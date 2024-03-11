import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "ts-models";
import stylesCSS from "/src/styles/styles.css?inline";
import profileCSS from "/src/styles/profile.css?inline";
import "./profile-form";
import "./header-bar";
import "./profile-nav";

@customElement("user-profile")
export class UserProfileElement extends LitElement {
  @property({ attribute: false })
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
        <profile-form path="/profile/aimee4312"></profile-form>
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