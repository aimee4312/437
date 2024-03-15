import { html, unsafeCSS } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { Profile, Smiski } from "ts-models";
import { consume } from "@lit/context";
import { authContext } from "../components/auth-required";
import { APIUser, APIRequest } from "../rest";
import * as App from "../app";
import stylesCSS from "/src/styles/styles.css?inline";
import profileCSS from "/src/styles/profile.css?inline";
import "../components/profile-nav";
import "../components/header-bar";
import "../components/display-card";

@customElement("user-wishlist")
export class UserWishlistElement extends App.View {
    @state()
    profile?: Profile;

    @consume({ context: authContext, subscribe: true })
    @property({ attribute: false })
    user = new APIUser();

    @state()
    allSmiski: Smiski[] = [];

    render() {
        const {
            wishlist,
        } = (this.profile || {}) as Profile;
        const smiskisInWishlist = this.allSmiski.filter(smiski => wishlist.includes(smiski.smiskiName));

    return html`
        <header-bar></header-bar>
        <div class="profile-container">
            <profile-nav selectedLink="wishlist"></profile-nav>
            <div class="profile-display">
                ${smiskisInWishlist.map(smiski => html`
                    <display-card 
                        photo="${smiski.photo}"
                        smiskiName="${smiski.smiskiName}"
                        collections="${smiski.collections}"
                        bodyType="${smiski.bodyType}"
                        found="${smiski.found}"
                        pose="${smiski.pose}"
                        description="${smiski.description}"
                    ></display-card>
                `)}
            </div>
        </div>
        `;
    }

    static styles = [
        unsafeCSS(stylesCSS),
        unsafeCSS(profileCSS),
    ];

    updated(changedProperties: Map<string, unknown>) {
        console.log("Profile Data has been updated", changedProperties);
        if (changedProperties.has("user")) {
            console.log("New user", this.user);
            const { username } = this.user;
            this._getData(`/profiles/${username}`);
        }
        return true;
    }

    async _getData(path: string) {
        const request = new APIRequest();

        try {
            const response = await request.get(path);
            if (response.status === 200) {
                const data = await response.json();
                this.profile = data as Profile;
                console.log("Wishlist:", this.profile?.wishlist);
                if (Array.isArray(this.profile?.wishlist)) {
                    const promises = this.profile.wishlist.map(name => this._fetchSmiskiByName(name));
                    const allSmiski = await Promise.all(promises);
                    this.allSmiski = allSmiski.filter(smiski => smiski !== null) as Smiski[];
                } else {
                    console.error("Wishlist is not an array");
                }
            } else {
                console.error("Failed to fetch profile data");
            }
        } catch (error) {
            console.error("Error fetching wishlist:", error);
        }
    }
    
    
    async _fetchSmiskiByName(name: string): Promise<Smiski | null> {
        const request = new APIRequest();
        const path = `/smiskis/${name}`;

        try {
            const response = await request.get(path);
            if (response.status === 200) {
                const smiski = await response.json();
                return smiski as Smiski;
            }
        } catch (error) {
            console.error("Error fetching Smiski by name:", error);
        }
        return null;
    }

}