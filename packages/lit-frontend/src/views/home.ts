import { html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import stylesCSS from "/src/styles/styles.css?inline";
import homeCSS from "/src/styles/homepage.css?inline";
import "../components/drop-down";
import "../components/auth-required";
import "../components/home-header";
import * as App from "../app";

@customElement("home-page")
export class HomePageElement extends App.View{

    render() {
        return html`
                <div class="background-container">
                    <home-header></home-header>
                </div>
            `;
    }

      static styles = [
        unsafeCSS(stylesCSS),
        unsafeCSS(homeCSS),
      ];
}