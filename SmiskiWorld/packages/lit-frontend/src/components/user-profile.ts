import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "ts-models";
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
        <profile-nav></profile-nav>
        <p class="display-name">Aimee</p>
        <profile-form path="/profile/aimee4312"></profile-form>
      </div>
    `;
  }

  static styles =[ 
  unsafeCSS(profileCSS),
  css`
  :host {
    --avatar-backgroundColor: var(--color-accent);
    --avatar-size: 100px;
  }

  a:link,
  a:visited {
    color: var(--secondary-text);
    text-decoration: none;
  }

  input {
    margin: 10px;
    margin-left: 0;
    width: 100%;
    height: 10%
  }

  .avatar {
    grid-column: key;
    grid-row: auto/span 2;
    justify-self: end;
    position: relative;
    width: var(--avatar-size);
    aspect-ratio: 1;
    background-color: var(--avatar-backgroundColor);
    border-radius: 50%;
    text-align: center;
    line-height: var(--avatar-size);
    font-size: calc(0.66 * var(--avatar-size));
    font-family: var(--font-family-display);
    color: var(--color-link-inverted);
    overflow: hidden;
  }

  img {
    width: 100%;
  }

  profile-form {
    grid-column: 3;
    grid-row: 3;
    margin-top: 20px;
    height: 50%;
  }
  
  `];
}