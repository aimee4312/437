import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "ts-models";
import { APIUser, APIRequest, JSONRequest } from "../rest";
import { authContext } from "./auth-required";
import { consume } from "@lit/context";

@customElement("profile-form")
export class ProfileFormElement extends LitElement {
  @property()
  path: string = "";

  @state()
  profile?: Profile;

  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  user?: APIUser;

  connectedCallback() {
    if (this.path) {
      this._getData(this.path);
    }
    super.connectedCallback();
  }

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ) {
    if (name === "path" && oldValue !== newValue && oldValue) {
      this._getData(newValue);
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  updated(changedProperties: Map<string, any>) {
    console.log("updated Profile Form", changedProperties);
    if (changedProperties.get("authenticatedUser")) {
      this._getData(this.path);
    }
    return true;
  }

  render() {
    const {
      name,
      email,
    } = (this.profile || {}) as Profile;
    return html`
      <form @submit=${this._handleSubmit}>
        <label>
          <span>Name</span>
          <input name="name" value=${name}/>
          <span>Email</span>
          <input name="email" value=${email}/>
          <button type="submit">Submit</button
        </label>
      </form>
    `;
  }

  static styles = css`
  input {
    margin: 10px;
    margin-left: 0;
    width: 300px;
    height: 10%
  }
  
  `;

  _getData(path: string) {
    const request = new APIRequest();

    request
      .get(path)
      .then((response: Response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((json: unknown) => {
        this.profile = json as Profile;
      });
  }

  _handleChange(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    let profile = this.profile;

    console.log("Changed", name, value);
    (profile as any)[name] = value;

    this.profile = profile;
  }

  _handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const request = new JSONRequest(this.profile);

    request
      .put(this.path)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((json: unknown) => {
        if (json) {
          console.log("PUT request successful:", json);
          this.profile = json as Profile;
        }
      })
      .catch((err) =>
        console.log("Failed to POST form data", err)
      );
  }
}