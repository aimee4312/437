import { css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Profile } from "ts-models";
import * as App from "../app";
import stylesCSS from "/src/styles/styles.css?inline";
import profileCSS from "/src/styles/profile.css?inline";
import "../components/profile-form";
import "../components/header-bar";
import "../components/profile-nav";

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
    const {
      name,
    } = (this.profile || {}) as Profile;
    return html`
      <header-bar></header-bar>
      <div class="profile-container">
        <profile-nav selectedLink="profile"></profile-nav>
        <p class="display-name">${name}</p>
        <profile-form .using=${this.profile}></profile-form>
      </div>
    `;
  }

  static styles =[ 
  unsafeCSS(stylesCSS),
  unsafeCSS(profileCSS),
  css`

  profile-form {
    grid-column: 3;
    grid-row: 3;
    margin-top: 20px;
    height: 50%;
  }
  
  `];
}