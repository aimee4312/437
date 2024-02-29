import { html } from "lit";
import { customElement } from "lit/decorators.js";
// MVU app
import * as App from "../app";
import routes from "../routes";
import update from "../update";
// components
import "../components/auth-required";
import "../components/vaadin-router";
import "../components/header-bar";

@customElement("chroma-wave")
export class ChromaWaveElement extends App.Main {
  constructor() {
    super(update);
  }

  render() {
    return html`
      <auth-required>
        <header-bar></header-bar>
        <vaadin-router .routes=${routes}> </vaadin-router>
      </auth-required>
    `;
  }
}