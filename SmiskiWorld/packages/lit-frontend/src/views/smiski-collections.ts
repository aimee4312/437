import { css, html, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Collections, Smiski } from "ts-models";
//import { serverPath } from "../rest";
import stylesCSS from "/src/styles/styles.css?inline";
import cardCSS from "/src/styles/card.css?inline";
import "../components/header-bar";
import "../components/display-card";
import * as App from "../app";

@customElement("smiski-collection")
export class SmiskiCollectionElement extends App.View {
    @property()
    path: string = "";

    @state()
    allSmiski: Smiski[] = [];

    @state()
    allCollection: Collections[] = [];

    connectedCallback() {
        //if (this.path) {
            // this._fetchData(this.path);
            // Instead of fetching data, assign dummy data for testing
    
            // Dummy smiski data
            this.allSmiski = [
                { 
                    smiskiName: "Smiski Hugging Knees",
                    collections: "Series 1",
                    photo: "/source-images/smiskis/huggingknees.png",
                    special: false,
                    bodyType: "Normal",
                    found: "In corners of a room",
                    pose: "Kneeling",
                    description: "Always in the corner hugging onto the knees, staring out into the distance pensive in thought.",
                },
                { 
                    smiskiName: "Smiski Looking Back",
                    collections: "Series 1",
                    photo: "/source-images/smiskis/lookingback.png",
                    special: false,
                    bodyType: "Chubby",
                    found: "In corners of a room",
                    pose: "Looking back",
                    description: "A Smiski that scares easily. When found, it will turn back and stare at you in surprise.",
                },
                { 
                    smiskiName: "Little Smiski Lifting",
                    collections: "Series 1",
                    photo: "/source-images/smiskis/littlelifting.png",
                    special: true,
                    bodyType: "",
                    found: "",
                    pose: "",
                    description: "He's tiny but strong!",
                },
                { 
                    smiskiName: "Little Smiski Lifting",
                    collections: "Series 1",
                    photo: "/source-images/smiskis/littlelifting.png",
                    special: true,
                    bodyType: "",
                    found: "",
                    pose: "",
                    description: "He's tiny but strong!",
                },
                { 
                    smiskiName: "Little Smiski Lifting",
                    collections: "Series 1",
                    photo: "/source-images/smiskis/littlelifting.png",
                    special: true,
                    bodyType: "",
                    found: "",
                    pose: "",
                    description: "He's tiny but strong!",
                },
                { 
                    smiskiName: "Little Smiski Lifting",
                    collections: "Series 1",
                    photo: "/source-images/smiskis/littlelifting.png",
                    special: true,
                    bodyType: "",
                    found: "",
                    pose: "",
                    description: "He's tiny but strong!",
                },
                { 
                    smiskiName: "Little Smiski Lifting",
                    collections: "Series 1",
                    photo: "/source-images/smiskis/littlelifting.png",
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

    render() {
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

}