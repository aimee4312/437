import { html, unsafeCSS } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { Profile, Smiski } from "ts-models";
import { serverPath } from "../rest";
import stylesCSS from "/src/styles/styles.css?inline";
import profileCSS from "/src/styles/profile.css?inline";
import "../components/profile-nav";
import "../components/header-bar";
import "../components/display-card";
import * as App from "../app";

@customElement("user-wishlist")
export class UserWishlistElement extends App.View {
    @property()
    path: string = "";

    @state()
    profile?: Profile;
 
    @state()
    allSmiski: Smiski[] = [];

    // connectedCallback() {
    //     if (this.path) {
    //     this._fetchData(this.path);
    //     }
    //     super.connectedCallback();
    // }

    connectedCallback() {
        //if (this.path) {
            // this._fetchData(this.path);
            // Instead of fetching data, assign dummy data for testing
    
            // Dummy smiski data
            this.allSmiski = [
                { 
                    smiskiName: "Smiski Hugging Knees",
                    collections: "Series 1",
                    photo: "",
                    special: false,
                    bodyType: "Normal",
                    found: "In corners of a room",
                    pose: "Kneeling",
                    description: "Always in the corner hugging onto the knees, staring out into the distance pensive in thought.",
                },
                { 
                    smiskiName: "Smiski Looking Back",
                    collections: "Series 1",
                    photo: "",
                    special: false,
                    bodyType: "Chubby",
                    found: "In corners of a room",
                    pose: "Looking back",
                    description: "A Smiski that scares easily. When found, it will turn back and stare at you in surprise.",
                },
                { 
                    smiskiName: "Little Smiski Lifting",
                    collections: "Series 1",
                    photo: "",
                    special: true,
                    bodyType: "",
                    found: "",
                    pose: "",
                    description: "He's tiny but strong!",
                },
                { 
                    smiskiName: "Little Smiski Lifting",
                    collections: "Series 1",
                    photo: "",
                    special: true,
                    bodyType: "",
                    found: "",
                    pose: "",
                    description: "He's tiny but strong!",
                },
                { 
                    smiskiName: "Little Smiski Lifting",
                    collections: "Series 1",
                    photo: "",
                    special: true,
                    bodyType: "",
                    found: "",
                    pose: "",
                    description: "He's tiny but strong!",
                },
                { 
                    smiskiName: "Little Smiski Lifting",
                    collections: "Series 1",
                    photo: "",
                    special: true,
                    bodyType: "",
                    found: "",
                    pose: "",
                    description: "He's tiny but strong!",
                },
                { 
                    smiskiName: "Little Smiski Lifting",
                    collections: "Series 1",
                    photo: "",
                    special: true,
                    bodyType: "",
                    found: "",
                    pose: "",
                    description: "He's tiny but strong!",
                },
            ];
        //}
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
        return html`
        <header-bar></header-bar>
        <div class="profile-container">
                <profile-nav selectedLink="wishlist"></profile-nav>
                <div class="profile-display">
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
        unsafeCSS(profileCSS),
    ];

    _fetchData(path: string) {
        fetch(serverPath(path))
        .then((response) => {
            if (response.status === 200) {
            return response.json();
            }
            return null;
        })
        .then((json: unknown) => {
            if (json) {
                this.profile = json as Profile;
                if (this.profile.smiski_owned) {
                    this.profile.smiski_owned.forEach(smiskiName => this.fetchAndAppendSmiskiDetails(smiskiName));
                }
            }
        });
    }

    async fetchAndAppendSmiskiDetails(smiskiName: string) {
        try {
            const response = await fetch(serverPath(`/api/smiski/${encodeURIComponent(smiskiName)}`));
            if (response.ok) {
                const data = await response.json();
                const smiskiDetails = data as Smiski;
                this.allSmiski = [...this.allSmiski, smiskiDetails];
            }
        } catch (error) {
            console.error('Error fetching smiski details:', error);
        }
    }
}