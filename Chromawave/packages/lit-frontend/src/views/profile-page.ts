import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import * as App from "../app";
import "../components/user-profile";

type ProfileLocation = Location & {
  params: { userid: string };
};

@customElement("profile-page")
export class ProfilePageElement extends App.View{
  @property({ attribute: false })
  location?: ProfileLocation;

  @property({ reflect: true })
  get userid() {
    return this.location?.params.userid;
  }

  @property()
  get profile() {
    return this.getFromModel("profile");
  }

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ) {
    if (
      name === "userid" &&
      oldValue !== newValue &&
      newValue
    ) {
      console.log("Profile Page:", newValue);
      this.dispatchMessage({
        type: "ProfileSelected",
        userid: newValue
      });
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
}