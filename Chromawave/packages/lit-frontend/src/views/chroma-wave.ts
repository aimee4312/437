// @ts-nocheck
import { html, unsafeCSS, css } from "lit";
import { customElement } from "lit/decorators.js";
import stylesCSS from "../styles/styles.css?inline";
import "../components/drop-down";
import "../components/auth-required";
import "../components/vaadin-router";
import "../components/home-header";
import routes from "../routes";
import update from "../update";
import * as App from "../app";

@customElement("chroma-wave")
export class ChromaWaveElement extends App.Main{
    constructor() {
        super(update);
    }

    render() {
        return html`
        <auth-required>
            <div class="background-container">
                <home-header></home-header>
            </div>
            <div class="container">
                <input type="text" class="searchbar" placeholder="Search...">
            </div>
            <vaadin-router .routes=${routes}> </vaadin-router>
        </auth-required>
            `;
      }

      static styles = [
        unsafeCSS(stylesCSS),
        css`
        body {
            margin: 0;
        }

        input[type=text]{
            border-radius: 10px;
        }
        
        .background-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('/source-images/background/musicwave.gif');
            background-size: auto;
            background-position: center;
        }
        
        .container {
            position: absolute;
            top: 50%;
            width: 60%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: center;
        }
        
        .searchbar {
            width: 100%;
            max-width: calc(100% - 3em);
            height: 3em;
        }
        `
      ];
}