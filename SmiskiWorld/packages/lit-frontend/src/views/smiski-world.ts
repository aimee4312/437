import { html, unsafeCSS, css } from "lit";
import { customElement } from "lit/decorators.js";
import stylesCSS from "/src/styles/styles.css?inline";
import "../components/drop-down";
import "../components/auth-required";
import "../components/vaadin-router";
import "../components/home-header";

import "../components/header-bar";
import "../components/profile-nav";

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
            <div class="background-container">
                <home-header></home-header>
            </div>
            <vaadin-router .routes=${routes}> </vaadin-router>
        </auth-required>
            `;
       }

      static styles = [
        unsafeCSS(stylesCSS),
        css`
        // body {
        //     margin: 0;
        // }

        // input[type=text]{
        //     border-radius: 10px;
        // }
        
        // .background-container {
        //     position: fixed;
        //     top: 0;
        //     left: 0;
        //     width: 100%;
        //     height: 100%;
        //     background-image: url('/source-images/background/smiski-wallpaper.png');
        //     background-size: auto;
        //     background-position: center;
        // }

        .display-name {
            grid-column: 3;
            font-size: 3em;
            margin: 0;
            color: var(--secondary-color);
        }

        .profile-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: auto;
        }

        
        `
      ];
}