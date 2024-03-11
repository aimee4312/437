import { LitElement, html, css, unsafeCSS } from 'lit';
import { property, state } from 'lit/decorators.js';
import { customElement } from 'lit/decorators.js';
import { Profile } from "ts-models";
import { APIUser, APIRequest, JSONRequest } from "../rest";
import { authContext } from "./auth-required";
import { consume } from "@lit/context";
import "./drop-down";
import cardCSS from "/src/styles/card.css?inline";

@customElement('display-card')
export class displayCard extends LitElement {
  @property()
  path: string = "";

  @state()
  profile?: Profile;

  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  user?: APIUser;

  connectedCallback() {
    if (this.path) {
      this._getData(this.path);
    }
    super.connectedCallback();
  }

  @property({ type: String }) photo = '';
  @property({ type: String }) smiskiName = '';
  @property({ type: String }) collections = '';
  @property({ type: String }) bodyType = '';
  @property({ type: String }) found = '';
  @property({ type: String }) pose = '';
  @property({ type: String }) description = '';

  render() {
    return html`
      <div class="card">
        <slot name="image"></slot>
        <div class="container">
          <img src="${this.photo}" alt="Smiski Image">
          <div class="smiski-name-container">
            <h5><span slot="smiskiName">${this.smiskiName}</span></h5>
            <drop-down>
              <button>+</button>
              <ul slot="menu" >
                <li><button @click="${this.addToWishlist}">Add to wishlist</button></li>
                <li><hr /></li>
                <li><button @click="${this.addToCollection}">Add to collection</button></li>
              </ul>
          </drop-down>
          </div>
          <h5><span slot="collections">${this.collections}</span></h5>
          <p>Body Type: <span slot="bodyType">${this.bodyType}</span></p>
          <p>Found: <span slot="found">${this.found}</span></p>
          <p>Pose: <span slot="pose">${this.pose}</span></p>
          <span slot="description">${this.description}</span>
        </div>
      </div>
    `;
  }

  static styles = [
    unsafeCSS(cardCSS),
    css`
      ul[slot="menu"] button {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
      }

      h5,
      p {
        margin: 10px 0;
      } 

      .smiski-name-container {
        display: flex;
        align-items: center;
      }

      .smiski-name-container h5 {
        margin-right: 10px;
        width: 80%;
      }
    `
  ];

  _getData(path: string) {
    const request = new APIRequest();

    request
      .get(path)
      .then((response: Response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((json: unknown) => {
        this.profile = json as Profile;
      });
  }

  addToWishlist() {
    const request = new JSONRequest(this.user);
    request
    .put(this.path)
    .then((response) => {
      if (response.status === 200) {
        console.log("Added to wishlist successfully");
      } else {
        console.log("Failed to add to wishlist");
      }
    })
    .catch((err) => console.error("Error adding to wishlist:", err));
  }

  addToCollection() {
    const request = new JSONRequest(this.user);
    request
    .put(this.path)
    .then((response) => {
      if (response.status === 200) {
        console.log("Added to collection successfully");
      } else {
        console.log("Failed to add to collection");
      }
    })
    .catch((err) => console.error("Error adding to collection:", err));
  }
}
