import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Profile } from "../../../express-backend/src/models/profile";
import "../components/user-profile";
import "../components/profile-edit";
import { serverPath } from "../rest";

type ProfileLocation = Location & {
    params: { userid: string };
};

@customElement("profile-page")
export class ProfilePageElement extends LitElement{
    @property({ attribute: false })
    location?: ProfileLocation;

    @property({ reflect: true })
    get userid() {
        return this.location?.params.userid;
    }

    @property({ reflect: true })
    get edit(): boolean {
        if (this.location) {
        const params = new URL(document.location.toString())
            .searchParams;
        return params.has("edit");
        }
        return false;
    }

    @property({ type: Object })
    profile?: Profile;

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
        return html`
          <main class="page">
            ${this.edit
              ? html`
                  <profile-edit .using=${this.profile}>
                  </profile-edit>
                `
              : html`
                  <user-profile .using=${this.profile}>
                  </user-profile>
                `}
          </main>
        `;
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