import { css, html, unsafeCSS } from "lit";
import { customElement, state } from "lit/decorators.js";
import * as App from "../app";
import { APIUser } from "../rest";
import { Connection, createConnection, sendMessage } from "../websocket";
import { ChatMessage } from "ts-models";
import stylesCSS from "/src/styles/styles.css?inline";
import "../components/header-bar";

@customElement("chat-room")
export class ChatRoomElement extends App.View {
  get username() {
    return this.getFromModel<APIUser>("user")?.username;
  }

  connection?: Connection | undefined;

  @state()
  messages: ChatMessage[] = [];

  firstUpdated() {
    if (!this.connection) {
      this.connection = createConnection<ChatMessage>(
        `chatroom`,
        (msg: ChatMessage) => this._handleMessage(msg)
      );
      console.log("Connection created", this.connection);
    }
  }

  render() {
    return html`
      <header-bar></header-bar>
      <ul>
        ${this.messages.map(
          (msg) =>
            html`
              <li>${msg.username}: ${msg.text}</li>
            `
        )}
      </ul>
      <form @submit=${this._handleSubmit}>
        <input name="text" placeholder="Type a message..." />
        <button type="submit">Send</button>
      </form>

    `;
  }

  static styles = [
    unsafeCSS(stylesCSS),
    css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }

    ul {
      flex: 1;
      overflow-y: auto;
    }

    form {
      display: flex;
      align-items: center;
    }
    
    input[name="text"] {
      flex: 1;
      height: 30%;
      margin-right: 5px;
    }
    
    button[type="submit"] {
      width: 50px;
      height: 30px;
    }
  
    `
  ];

  _handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    console.log("submit")
    if (this.username && this.connection) {
      const target = event.target as HTMLFormElement;
      const formdata = new FormData(target);
      const text = formdata.get("text")?.toString() || "";

      sendMessage<ChatMessage>(this.connection, {
        username: this.username,
        text
      });
      target.reset();
    }
  }

  _handleMessage(message: ChatMessage) {
    console.log("Received message", message);
    this.messages = this.messages.concat([message]);
  }
}