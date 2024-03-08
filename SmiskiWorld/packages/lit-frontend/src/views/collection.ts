import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile, Collection, Smiski } from "ts-models";
import { serverPath } from "../rest";

@customElement("user-collection")
export class UserCollectionElement extends LitElement {
    @property()
    path: string = "";

    @state()
    allSmiski: Smiski[] = [];

    @state()
    allColelction: Collection[] = [];

    render() {
        return html`
        
        `;
        }

    static styles = css`
    `;

}