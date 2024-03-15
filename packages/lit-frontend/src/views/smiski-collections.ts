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

    @state()
    filteredSmiski: Smiski[] = [];

    @state()
    selectedFilters: string[] = [];

    @state()
    showSpecial: boolean = false;

    async connectedCallback() {
        super.connectedCallback();
        await this._fetchAllSmiskis();
    }

    render() {
        return html`
            <header-bar></header-bar>
            <div class="container">
                <div class="filter-container">
                    <img class="filter" src="../source-images/smiskis/s1.png" @click="${() => this.toggleFilter('Series 1')}" alt="Series 1">
                    <img class="filter" src="../source-images/smiskis/s2.png" @click="${() => this.toggleFilter('Series 2')}" alt="Series 2">
                    <img class="filter" src="../source-images/smiskis/s3.png" @click="${() => this.toggleFilter('Series 3')}" alt="Series 3">
                    <img class="filter" src="../source-images/smiskis/s4.png" @click="${() => this.toggleFilter('Series 4')}" alt="Series 4">
                    <img class="special-filter" src="../source-images/smiskis/secret.png" @click="${this.toggleShowSpecial}" alt="Secret">
                </div>
                <div class="profile-container">
                    <div class="card-display">
                        ${this.filteredSmiski.map(smiski_owned => html`
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
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .filter-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .filter {
            width: 200px;
            height: auto;
            cursor: pointer;
            margin: 10px;
        }
        
        .special-filter {
            width: 100px;
            height: auto;
            cursor: pointer;
            margin: 10px;
        }
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
    
    toggleFilter(series: string) {
        const index = this.selectedFilters.indexOf(series);
        if (index === -1) {
            this.selectedFilters = [...this.selectedFilters, series];
        } else {
            this.selectedFilters = this.selectedFilters.filter(filter => filter !== series);
        }
        this.updateFilteredSmiski();
    }

    toggleShowSpecial() {
        this.showSpecial = !this.showSpecial;
        this.updateFilteredSmiski();
    }

    updateFilteredSmiski() {
        let filtered = this.allSmiski;
        if (this.selectedFilters.length > 0) {
            filtered = filtered.filter(smiski => this.selectedFilters.includes(smiski.collections));
        }
        if (this.showSpecial) {
            filtered = filtered.filter(smiski => smiski.special);
        }
        this.filteredSmiski = filtered;
    }

}