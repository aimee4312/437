import { css, html, unsafeCSS } from "lit";
import { customElement, state } from "lit/decorators.js";
import { Profile } from "ts-models";
import * as App from "../app";
import stylesCSS from "/src/styles/styles.css?inline";
import profileCSS from "/src/styles/profile.css?inline";
import "../components/profile-form";
import "../components/header-bar";
import "../components/profile-nav";

@customElement("profile-page")
export class ProfilePageElement extends App.View{
  using?: Profile;

  get profile() {
    return this.using || ({} as Profile);
  }

  @state()
  newAvatar?: string;

  render() {
    return html`
      <header-bar></header-bar>
      <div class="profile-container">
        <profile-nav selectedLink="profile"></profile-nav>
        <p class="display-name">Aimee</p>
        <profile-form path="/profiles/aimee4312"></profile-form>
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