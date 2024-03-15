import { css, html, unsafeCSS } from "lit";
import { customElement, state } from "lit/decorators.js";
import { Smiski } from "ts-models";
import { APIRequest } from "../rest";
import * as App from "../app";
import stylesCSS from "/src/styles/styles.css?inline";
import cardCSS from "/src/styles/card.css?inline";
import "../components/header-bar";
import "../components/display-card";

@customElement("smiski-collection")
export class SmiskiCollectionElement extends App.View {
    @state()
    allSmiski: Smiski[] = [];

    async connectedCallback() {
        super.connectedCallback();
        await this._fetchAllSmiskis();
    }

    render() {
        console.log('Rendering component: ', this.allSmiski);
        return html`
            <header-bar></header-bar>
            <div class="profile-container">
                <div class="card-display">
                    ${this.allSmiski.map(smiski_owned => html`
                    <display-card 
                        photo="${smiski_owned.photo}"
                        smiskiName="${smiski_owned.smiskiName}"
                        collections="${smiski_owned.collections}"
                        bodyType="${smiski_owned.bodyType}"
                        found="${smiski_owned.found}"
                        pose="${smiski_owned.pose}"
                        description="${smiski_owned.description}"
                    ></display-card>

                    `)}
                </div>
            </div>
        </div>
        `;
        }

    static styles = [
        unsafeCSS(stylesCSS),
        unsafeCSS(cardCSS),
        css`
    `];
    
    async _fetchAllSmiskis(): Promise<Smiski[] | null> {
        const request = new APIRequest();
        const path = `/smiskis`;
        try {
            const response = await request.get(path);
            if (response.status === 200) {
                const smiskis = await response.json();
                this.allSmiski = smiskis as Smiski[];
                return smiskis as Smiski[];
            }
        } catch (error) {
            console.error("Error fetching all Smiskis:", error);
        }
        return null;
    }
    
    
}