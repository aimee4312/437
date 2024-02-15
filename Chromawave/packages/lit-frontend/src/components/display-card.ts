import { LitElement, html, css } from 'lit';
import { customElement } from "lit/decorators.js";

@customElement('display-card')
export class DisplayCard extends LitElement {

  render() {
    return html`
      <div class="music-card">
        <slot name="image"></slot>
        <div class="container">
          <h4><slot name="artist"></slot></h4>
          <h4><slot name="title"></slot></h4>
          <p><slot name="genre"></slot></p>
          <p><slot name="by"></slot></p>
        </div>
      </div>
    `;
  }

  static styles = css`
  
  .container {
    padding: 2px 16px;
  }

  .music-card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
  }
  
  .music-card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  `;
}
