import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "../../../express-backend/src/models/profile";
import { serverPath } from "../rest";

@customElement("user-profile")
export class UserProfileElement extends LitElement {
  @property()
  path: string = "";

  @state()
  profile?: Profile;

  connectedCallback() {
    if (this.path) {
      this._fetchData(this.path);
    }
    super.connectedCallback();
  }

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
    const {
      name,
      email,
    } = (this.profile || {}) as Profile;
    return html`
    <div class="profile-container">
            <div class="profile-navbar">
                <img src="../../source-images/randomuser.jpeg" class="profile-img">
                <div class="name selected-prof-nav">
                    <a href="./index.html">${name}</a>
                </div>
                <div class="saved-songs name">
                    <a href="./saved-songs.html">Saved Songs</a>
                </div>
                <div class="name">
                    <a href="./saved-palettes.html">Saved Palettes</a>
                </div>
            </div>
            <img src="../../source-images/randomuser.jpeg" class="profile-img img-change">
            <p class="display-name">${name}</p>
            <div class="text-input">
                Name
                <input type="text" placeholder="${name}">
                Email
                <input type="email" placeholder="${email}">
                New Password
                <input type="password" placeholder="">
                Confirm Password
                <input type="password" placeholder="">
            </div>
        </div>
    `;
  }

  static styles = css`
  body {
    margin: 0;
    background-color: var(--primary-background);
    color: var(--secondary-text);
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

  .display-name {
    grid-column: 3;
    grid-row: 1;
    font-size: 3em;
    align-self: end;
    margin: 0;
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

  .text-input {
    grid-column: 3;
    grid-row: 2;
  }
  
  `;

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

@customElement("user-profile-edit")
export class UserProfileEditElement extends UserProfileElement {
  render() {
    return html`<form @submit=${this._handleSubmit}>
        <!-- fill in form here -->
        <button type="submit">Submit</button>
    </form> `;
  }

  static styles = css`...`
  ;

  _handleSubmit(ev: Event) {
    ev.preventDefault(); // prevent browser from submitting form data itself

    const target = ev.target as HTMLFormElement;
    const formdata = new FormData(target);
    const entries = Array.from(formdata.entries())
      .map(([k, v]) => (v === "" ? [k] : [k, v]))
      .map(([k, v]) =>
        k === "airports"
          ? [k, (v as string).split(",").map((s) => s.trim())]
          : [k, v]
      );
    const json = Object.fromEntries(entries);

    this._putData(json);
  }

  _putData(json: Profile) {
    fetch(serverPath(this.path), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json)
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        else return null;
      })
      .then((json: unknown) => {
        if (json) this.profile = json as Profile;
      })
      .catch((err) =>
        console.log("Failed to PUT form data", err)
      );
  }
}