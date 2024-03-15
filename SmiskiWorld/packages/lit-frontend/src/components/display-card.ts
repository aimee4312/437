import { html, css, unsafeCSS } from 'lit';
import { property, state } from 'lit/decorators.js';
import { customElement } from 'lit/decorators.js';
import { Profile } from "ts-models";
import { APIUser, APIRequest } from "../rest";
import { authContext } from "./auth-required";
import { consume } from "@lit/context";
import * as App from "../app";
import "./drop-down";
import cardCSS from "/src/styles/card.css?inline";

@customElement('display-card')
export class displayCard extends App.View {
  @property()
  path: string = "";

  @state()
  profile?: Profile;

  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  user?: APIUser;

  connectedCallback() {
    if (this.user) {
      const userid = this.user.username;
      this._getData(userid);
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
    const isInWishlist = this.profile && this.smiskiName && this.profile.wishlist.includes(this.smiskiName);
    const wishlistButtonText = isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist';
  
    const isInCollection = this.profile && this.smiskiName && this.profile.smiski_owned.includes(this.smiskiName);
    const collectionButtonText = isInCollection ? 'Remove from Collection' : 'Add to Collection';
  
    return html`
      <div class="card">
        <slot name="image"></slot>
        <div class="container">
          <img src="${this.photo}" alt="Smiski Image">
          <div class="smiski-name-container">
            ${this.smiskiName !== '' ? html`<h5><span slot="smiskiName">${this.smiskiName}</span></h5>` : ''}
            <drop-down>
              <button>+</button>
              <ul slot="menu" >
                <li><button @click="${this.toggleWishlist}">${wishlistButtonText}</button></li>
                <li><hr /></li>
                <li><button @click="${this.toggleCollection}">${collectionButtonText}</button></li>
              </ul>
            </drop-down>
          </div>
          ${this.collections !== '' ? html`<h5><span slot="collections">${this.collections}</span></h5>` : ''}
          ${this.bodyType !== '' ? html`<p>Body Type: <span slot="bodyType">${this.bodyType}</span></p>` : ''}
          ${this.found !== '' ? html`<p>Found: <span slot="found">${this.found}</span></p>` : ''}
          ${this.pose !== '' ? html`<p>Pose: <span slot="pose">${this.pose}</span></p>` : ''}
          ${this.description !== '' ? html`<span slot="description">${this.description}</span>` : ''}
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

  _getData(userId: string) {
    const request = new APIRequest();
    const path = `/profiles/${userId}`;

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

  toggleWishlist() {
    if (this.user) {
      this._getData(this.user.username);
    }

    if (this.profile && this.user) {
      const smiskiName = this.smiskiName;
      const isInWishlist = this.profile.wishlist.includes(smiskiName);
      let updatedWishlist;

      if (isInWishlist) {
        updatedWishlist = this.profile.wishlist.filter(item => item !== smiskiName);
      } else {
        updatedWishlist = [...this.profile.wishlist, smiskiName];
      }

      this.profile.wishlist = updatedWishlist;

      this.dispatchMessage({
        type: "SmiskiWishlistUpdated",
        userid: this.profile?.userid,
        wishlist: updatedWishlist
      });
    } else {
      console.error("Could not update user wishlist.");
    }
  }

  toggleCollection() {
    if (this.user) {
      this._getData(this.user.username);
    }

    if (this.profile && this.user) {
      const smiskiName = this.smiskiName;
      const isInCollection = this.profile.smiski_owned.includes(smiskiName);
      let updatedCollection;

      if (isInCollection) {
        updatedCollection = this.profile.smiski_owned.filter(item => item !== smiskiName);
      } else {
        updatedCollection = [...this.profile.smiski_owned, smiskiName];
      }

      this.profile.smiski_owned = updatedCollection;

      this.dispatchMessage({
        type: "SmiskiCollectionUpdated",
        userid: this.profile?.userid,
        smiski_owned: updatedCollection
      });
    } else {
      console.error("Could not update user collection.");
    }
  }
}
