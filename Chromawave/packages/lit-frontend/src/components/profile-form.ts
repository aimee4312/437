import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "../../../express-backend/src/models/profile";
import { serverPath } from "../rest";

@customElement("profile-form")
export class ProfileFormlement extends LitElement {
  @property()
  path: string = "";

  @state()
  profile?: Profile;

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

  updated(changedProperties: Map<string, any>) {
    console.log("updated Profile Form", changedProperties);
    if (changedProperties.get("authenticatedUser")) {
      this._fetchData(this.path);
    }
    return true;
  }

  render() {
    const {
      name,
      email
    } = (this.profile || {}) as Profile;

    return html`
      <form
        @submit=${this._handleSubmit}
        @change=${this._handleChange}>
        <label>
          <span>Name</span>
          <input name="name" value=${name} />
        </label>
        <label>
          <span>Email</span>
          <input name="email" value=${email} />
        </label>
        <button type="submit">Submit</button>
      </form>
    `;
  }

  static styles = css`
    form {
      display: grid;
      grid-template-columns: 1fr 2fr;
      align-items: baseline;
    }
    form > label {
      display: contents;
    }
    input,
    button {
      font: inherit;
      line-height: inherit;
      margin: 0.25em;
    }
    button {
      grid-column: 2;
    }
  `;

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

  _handleChange(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    let profile = this.profile;

    console.log("Changed", name, value);
    (profile as any)[name] = value;

    this.profile = profile;
  }

  _handleSubmit(ev: Event) {
    ev.preventDefault(); // prevent browser from submitting form data itself

    const target = ev.target as HTMLFormElement;
    const formdata = new FormData(target);
    const entries = Array.from(formdata.entries())
      .map(([k, v]) => (v === "" ? [k] : [k, v]))
      .map(([k, v]) =>
        k === "airports"
          ? [k, (v as string).split(",").map((s) => s.trim())]
          : [k, v]
      );
    const json = Object.fromEntries(entries);

    this._putData(json);
  }

  _putData(json: Profile) {
    fetch(serverPath(this.path), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json)
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        else return null;
      })
      .then((json: unknown) => {
        if (json) this.profile = json as Profile;
      })
      .catch((err) =>
        console.log("Failed to PUT form data", err)
      );
  }
}