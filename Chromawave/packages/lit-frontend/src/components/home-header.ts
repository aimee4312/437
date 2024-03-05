import { html, LitElement, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('home-header')
export class HomeHeaderElement extends LitElement {
  
  render() {
    return html`
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
    </h1>`;
  }

  static styles = css `
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
  `;
}