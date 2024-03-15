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

@customElement("user-collections")
export class UserCollectionElement extends App.View {
    @state()
    profile?: Profile;

    @consume({ context: authContext, subscribe: true })
    @property({ attribute: false })
    user = new APIUser();

    @state()
    allSmiski: Smiski[] = [];

    render() {
        const {
            smiski_owned,
        } = (this.profile || {}) as Profile;
        const smiskisInCollection = this.allSmiski.filter(smiski => smiski_owned.includes(smiski.smiskiName));

    return html`
        <header-bar></header-bar>
        <div class="profile-container">
            <profile-nav selectedLink="collection"></profile-nav>
            <div class="profile-display">
                ${smiskisInCollection.map(smiski => html`
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
        console.log("Smiski owned has been updated", changedProperties);
        if (changedProperties.has("user")) {
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
                console.log("Smiski owned:", this.profile?.smiski_owned);
                if (Array.isArray(this.profile?.smiski_owned)) {
                    const promises = this.profile.smiski_owned.map(name => this._fetchSmiskiByName(name));
                    const allSmiski = await Promise.all(promises);
                    this.allSmiski = allSmiski.filter(smiski => smiski !== null) as Smiski[];
                } else {
                    console.error("smiski owned is not an array");
                }
            } else {
                console.error("Failed to fetch user collection data");
            }
        } catch (error) {
            console.error("Error fetching user collection:", error);
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