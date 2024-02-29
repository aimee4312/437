const API_ROOT = "http://localhost:3000";

export function serverPath(path: string) {
  return `${API_ROOT}${path}`;
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