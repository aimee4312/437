import { html, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "ts-models";
import { consume } from "@lit/context";
import { authContext } from "./auth-required";
import { APIUser, APIRequest } from "../rest";
import * as App from "../app";
import profileCSS from "/src/styles/profile.css?inline";
import stylesCSS from "/src/styles/styles.css?inline";

@customElement("profile-nav")
export class ProfileNavElement extends App.View {
    @state()
    profile?: Profile;

    @consume({ context: authContext, subscribe: true })
    @property({ attribute: false })
    user = new APIUser();

    @property({ type: String })
    selectedLink?: string;

    @state()
    newAvatar?: string;

    render() {
        const {
            name,
            userid,
        } = (this.profile || {}) as Profile;
        return html`
            <div class="profile-navbar">
                ${this._renderAvatar()}
                <div class="name ${this.selectedLink === 'profile' ? 'selected-prof-nav' : ''}">
                    <a href="/app/profile/${userid}">${name}</a>
                </div>
                <div class="saved-songs name ${this.selectedLink === 'collection' ? 'selected-prof-nav' : ''}">
                    <a href="/app/collection/${userid}">Collection</a>
                </div>
                <div class="name ${this.selectedLink === 'wishlist' ? 'selected-prof-nav' : ''}">
                    <a href="/app/wishlist/${userid}">Wishlist</a>
                </div>
            </div>
        `;
    }

    static styles = [
        unsafeCSS(profileCSS),
        unsafeCSS(stylesCSS),
    ]

    updated(changedProperties: Map<string, unknown>) {
        console.log(
            "Profile Data has been updated",
            changedProperties
        );
        if (changedProperties.has("user")) {
            console.log("New user", this.user);
            const { username } = this.user;
            this._getData(`/profiles/${username}`);
        }
        return true;
    }

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
                console.log("Profile:", json);
                this.profile = json as Profile;
            });
    }

    _renderAvatar() {
        const { avatar } = (this.profile ||
          {}) as Profile;
        const url = this.newAvatar || avatar;
        const avatarImg = html` <img src="${url}" class="profile-img">`;
    
        return html` <div class="avatar">
          ${avatarImg}
        </div>`;
      }
    
}
