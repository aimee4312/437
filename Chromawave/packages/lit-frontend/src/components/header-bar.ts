import { html, LitElement, css } from "lit";
import { customElement } from "lit/decorators.js";
import { ToggleSwitchElement } from "./toggle-switch.ts";

@customElement('header-bar')
export class HeaderElement extends LitElement {
  
  render() {
    return html`
    <h1>
      <a href="../index.html">
        <svg class="icon">
            <use href="/source-images/icons/icon.svg#icon-home" />
        </svg>  
      </a>
      <a href="../music/artist.html">Artists</a>
      <div class="header-title">TBD</div>
      <a href="../music/music.html">Music</a>
      <drop-down>
          <svg class="icon">
              <use href="/source-images/icons/icon.svg#icon-profile" />
          </svg>
          <ul slot="menu" >
              <li><a href="../profile-drop-down/profile.html">Profile</a></li>
              <li><hr /></li>
              <li><a href="../profile-drop-down/saved-songs.html">Saved Songs</a></li>
              <li><hr /></li>
              <li><a href="../profile-drop-down/saved-palettes.html">Saved Palettes</a></li>
              <li><hr /></li>
              <li><toggle-switch @change=${this._toggleDarkMode}>Dark Mode</toggle-switch></li>
              <li><hr /></li>
              <li>Logout</li>
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
}