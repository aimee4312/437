import { html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import stylesCSS from "/src/styles/styles.css?inline";
import homeCSS from "/src/styles/homepage.css?inline";
import "../components/auth-required";
import "../components/vaadin-router";
import routes from "../routes";
import update from "../update";
import * as App from "../app";

@customElement("smiski-world")
export class SmiskiWorldElement extends App.Main{
    constructor() {
        super(update);
    }

    render() {
        return html`
            <auth-required>
                <vaadin-router .routes=${routes}> </vaadin-router>
            </auth-required>
            `;
      }

      static styles = [
        unsafeCSS(stylesCSS),
        unsafeCSS(homeCSS),
      ];
}