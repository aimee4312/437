import { html, LitElement, css } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { ToggleSwitchElement } from "./toggle-switch.ts";
import { Profile } from "ts-models";
import { consume } from "@lit/context";
import { authContext } from "./auth-required";
import { APIUser } from "../rest";

@customElement('header-bar')
export class HeaderElement extends LitElement {
  @state()
    profile?: Profile;

    @consume({ context: authContext, subscribe: true })
    @property({ attribute: false })
    user = new APIUser();

  render() {
    return html`
    <h1>
      <a href="/app">
        <svg class="icon">
            <use href="/source-images/icons/icon.svg#icon-home" />
        </svg>  
      </a>
      <a href="/app/smiski">Collections</a>
      <div class="header-title">Smiski World</div>
      <a href="/app/forum">Forum</a>
      <drop-down>
          <svg class="icon">
              <use href="/source-images/icons/icon.svg#icon-profile" />
          </svg>
          <ul slot="menu" >
              <li><a href="/app/profile/aimee4312">Profile</a></li>
              <li><hr /></li>
              <li><a href="/app/collection">Collection</a></li>
              <li><hr /></li>
              <li><a href="/app/wishlist">Wishlist</a></li>
              <li><hr /></li>
              <li><toggle-switch @change=${this._toggleDarkMode}>Dark Mode</toggle-switch></li>
              <li><hr /></li>
              <li><a href="#" @click=${this._signOut}>Logout</a></li>
          </ul>
      </drop-down>
    </h1>`;
  }

  static styles = css `
    h1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px; 
      background-color: var(--secondary-color); 
      color: var(--secondary-text); 
      margin: 0;
    }

    svg.icon {
      display: inline;
      height: 2em;
      width: 2em;
      vertical-align: top;
      fill: currentColor;
    }

    a:link, a:visited{
      color: var(--secondary-text);
      text-decoration: none;
    }
    
    a:hover {
        color: var(--primary-accent);
    }
  `;

  _toggleDarkMode(ev: InputEvent) {
    const target = ev.target as ToggleSwitchElement;
    const body = document.body;

    if (target?.on) body.classList.add("dark-mode");
    else body.classList.remove("dark-mode");
  }

  _signOut() {
    console.log("Signout");
    this.user.signOut();
}
}