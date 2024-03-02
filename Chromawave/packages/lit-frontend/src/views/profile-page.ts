import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Profile } from "../../../express-backend/src/models/profile";
import "../components/user-profile";
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
                  <user-profile .using=${this.profile}>
                  </user-profile>
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