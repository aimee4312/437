import { html, unsafeCSS, css } from "lit";
import { customElement } from "lit/decorators.js";
import stylesCSS from "../styles/styles.css?inline";
import "../components/drop-down";
import "../components/auth-required";
import "../components/vaadin-router";
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
            <div class="background-container">
                <h1>
                    <a href="../app/index.html">
                    <svg class="icon">
                        <use href="/source-images/icons/icon.svg#icon-home" />
                    </svg>  
                    </a>
                    <a href="./music/artist.html">Artists</a>
                    <div class="header-title">TBD</div>
                    <a href="./music/music.html">Music</a>
                    <drop-down>
                        <svg class="icon">
                            <use href="/source-images/icons/icon.svg#icon-profile" />
                        </svg>
                        <ul slot="menu" class="dropdown" >
                            <li><a href="./profile/">Profile</a></li>
                            <li><hr /></li>
                            <li><a href="../app/profile/saved-songs.html">Saved Songs</a></li>
                            <li><hr /></li>
                            <li><a href="../app/profile/saved-palettes.html">Saved Palettes</a></li>
                            <li><hr /></li>
                            <li>Logout</li>
                        </ul>
                    </drop-down>
                </h1>
            </div>
            
            <div class="container">
                <input type="text" class="searchbar" placeholder="Search...">
            </div>
            <vaadin-router .routes=${routes}> </vaadin-router>
        `;
      }

      static styles = [
        unsafeCSS(stylesCSS),
        css`
        h1 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 20px; 
          background-color: transparent; 
          color: var(--secondary-color); 
          margin: 0;
        }
          
        svg.icon {
            display: inline;
            height: 2em;
            width: 2em;
            vertical-align: top;
            fill: var(--secondary-color);
        }
          
        a:link,
        a:visited,
        a:hover{
            color: var(--secondary-color);
            text-decoration: none;
        }
        
        .dropdown {
            background: var(--secondary-color);
            color: var(--secondary-text);
            border-radius: 15px;
        }
        
        .dropdown a:link,
        .dropdown a:visited,
        .dropdown a:hover {
            color: var(--secondary-text);
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