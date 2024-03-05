import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "../../../express-backend/src/models/profile";
import { serverPath, FormDataRequest, AuthenticatedUser } from "../rest";

@customElement("profile-form")
export class ProfileFormElement extends LitElement {
  @property()
  path: string = "";

  @state()
  profile?: Profile;

  @property({ attribute: false})
  authenticatedUser?: AuthenticatedUser;

  connectedCallback() {
    if (this.path) {
      this._fetchData(this.path);
    }
    super.connectedCallback();
  }

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
    ) {
    if (name === "path" && oldValue !== newValue && oldValue) {
        this._fetchData(newValue);
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  render() {
    const {
      name,
      email,
    } = (this.profile || {}) as Profile;
    return html`
    <div class="profile-container">
        <form @submit=${this._handleSubmit}>
          <label>
            <span>Name</span>
            <input name="name" value=${name}/>
            <span>Email</span>
            <input name="email" value=${email}/>
            <button type="submit">Submit</button
          </label>
        </form>
    </div>
    `;
  }

  static styles = css`
  input {
    margin: 10px;
    margin-left: 0;
    width: 300px;
    height: 10%
  }

  .profile-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
  }
  
  `;

  _handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const request = new FormDataRequest(data);
    request.put(this.path)
    this.dispatchEvent(new CustomEvent("form-submitted"));
    }

    _fetchData(path: string) {
        fetch(serverPath(path))
        .then((response) => {
            if (response.status === 200) {
            return response.json();
            }
            return null;
        })
        .then((json: unknown) => {
            if (json) this.profile = json as Profile;
        });
    }
}