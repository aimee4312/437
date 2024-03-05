import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Profile, Songs } from "ts-models";
import "../components/user-profile";
import { serverPath } from "../rest";
import * as App from "../app";

type SavedSongsLocation = Location & {
    params: { userid: string };
};

@customElement("saved-songs")
export class SongsPageElement extends App.View{
    @property({ attribute: false })
    location?: SavedSongsLocation;

    @property({ reflect: true })
    get userid() {
        return this.location?.params.userid;
    }

    @property()
    get route() {
        return this.getFromModel<Songs>("route");
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