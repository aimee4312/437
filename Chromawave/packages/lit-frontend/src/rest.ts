const API_ROOT = "http://localhost:3000";
const TOKEN_KEY = "JWT_AUTH_TOKEN";

export function serverPath(path: string) {
  return `${API_ROOT}${path}`;
}

export class APIUser {
  authenticated = false;
  username = "fellow_user";
  signOut = () => {};

  static _theUser = new APIUser();

  static deauthenticate(user: APIUser) {
    const anon = new APIUser();

    console.log("Deauthenticating", user, APIUser._theUser);
    if (user === APIUser._theUser) {
      localStorage.removeItem(TOKEN_KEY);
      APIUser._theUser = anon;
    }

    return anon;
  }
}

export class AuthenticatedUser extends APIUser {
  token: string | undefined;

  constructor(token: string, signOut: () => void) {
    super();
    const base64Url = token.split(".")[1];
    const base64 = base64Url
      .replace(/-/g, "+")
      .replace(/_/g, "/");
    const payload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return (
            "%" +
            ("00" + c.charCodeAt(0).toString(16)).slice(-2)
          );
        })
        .join("")
    );
    const jsonPayload = JSON.parse(payload);

    console.log("Token payload", jsonPayload);
    this.token = token;
    this.authenticated = true;
    this.username = jsonPayload.username;
    this.signOut = signOut;
  }

  static authenticate(token: string, signOut: () => void) {
    const authenticatedUser = new AuthenticatedUser(
      token,
      signOut
    );
    APIUser._theUser = authenticatedUser;
    localStorage.setItem(TOKEN_KEY, token);
    return authenticatedUser;
  }

  static authenticateFromLocalStorage(signOut: () => void) {
    const priorToken = localStorage.getItem(TOKEN_KEY);

    return priorToken
      ? AuthenticatedUser.authenticate(priorToken, signOut)
      : APIUser._theUser;
  }
}

export class FormDataRequest {
  json: Object;

  constructor(formData: FormData) {
    this.json = Object.fromEntries(formData);
  }

  put(endpoint: string) {
    return fetch(serverPath(endpoint), {
      method: "PUT",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(this.json),
    });
  }
}

export class JSONRequest {
  json: Object | undefined;
  user: AuthenticatedUser | undefined;

  get(endpoint: string) {
    const headers = this.user
    ? {
      Authoirization: `Bearer ${this.user?.token}`,
      }
    : undefined;
    return fetch(serverPath(endpoint), { headers });
  }
}

export class APIRequest extends JSONRequest {
  constructor() {
    super(undefined);
  }
}