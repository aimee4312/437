import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "ts-models";
import { serverPath } from "../rest";
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
    const {
      name,
    } = (this.profile || {}) as Profile;
    return html`
      <header-bar></header-bar>
      <div class="profile-container">
        <profile-nav></profile-nav>
        ${this._renderAvatar()}
        <p class="display-name">${name}</p>
        <profile-form path="/profiles/aimee4312" @form-submitted=${this._handleFormSubmitted}></profile-form>
      </div>
    `;
  }

  _renderAvatar() {
    const { avatar, name, color } = (this.profile ||
      {}) as Profile;
    const url = this.newAvatar || avatar;
    const avatarImg = url
      ? html`<img id="avatarImg" src="${url}" />`
      : ( name || " ").slice(0, 1);
    const colorStyle = color
      ? `--avatar-backgroundColor: ${color}`
      : "";

    return html` <div class="avatar" style=${colorStyle}>
      ${avatarImg}
    </div>`;
  }

  static styles = css`
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

  .display-name {
    grid-column: 3;
    grid-row: 1;
    font-size: 3em;
    align-self: end;
    margin: 0;
  }

  img {
    width: 100%;
  }

  .img-change {
    grid-column: 2;
  }

  .name {
    padding: 10%;
    font-size: 2em;
  }

  .profile-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
  }

  .profile-display {
    grid-column: 2 / -1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;
    margin: 5%;
  }
    
  .profile-display a {
    display: inline-block;
    width: 100%;
  }

  .profile-img {
    box-sizing: border-box;
    border-radius: 150px;
    border: 2px solid var(--primary-accent);
    width: 40%;
    margin-top: 10%;
    margin-left: 25%;
  }

  .profile-navbar {
    grid-column: 1;
    grid-row-start: 1;
    grid-row-end: 10;
    background-color: var(--primary-background);
  }

  .selected-prof-nav {
    grid-column: 1; 
    grid-row: 2; 
    background-color: var(--secondary-color);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  profile-form {
    grid-column: 3;
    grid-row: 2/4;
    margin-top: 20px;
  }
  
  `;

  _handleFormSubmitted = () => {
    this._fetchData(this.path);
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