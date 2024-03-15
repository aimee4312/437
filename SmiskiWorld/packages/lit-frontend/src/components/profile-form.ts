import { css, html, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "ts-models";
import * as App from "../app";
import stylesCSS from "/src/styles/styles.css?inline";
import profileCSS from "/src/styles/profile.css?inline";


@customElement("profile-form")
export class ProfileFormElement extends App.View {
  @property({ attribute: false })
  using?: Profile;

  @state()
  newAvatar?: string;

  get profile() {
    return this.using || ({} as Profile);
  }

  render() {
    const {
      name,
      email,
    } = (this.profile || {}) as Profile;
    return html`
      <form @submit=${this._handleSubmit}>
        <label>
          <span>Name</span>
          <input name="name" value=${name}/>
          <span>Email</span>
          <input name="email" value=${email}/>
          <input
            name="avatar"
            type="file"
            @change=${this._handleAvatarSelected}
        />
          <button type="submit">Submit</button
        </label>
      </form>
    `;
  }

  static styles = [
    unsafeCSS(stylesCSS),
    unsafeCSS(profileCSS),
    css`
    input {
      margin: 10px;
      margin-left: 0;
      width: 300px;
      height: 10%
    }
  
  `];

  _handleAvatarSelected(ev: Event) {
    const target = ev.target as HTMLInputElement;
    const selectedFile = (target.files as FileList)[0];

    const reader: Promise<string> = new Promise(
      (resolve, reject) => {
        const fr = new FileReader();
        fr.onload = () => resolve(fr.result as string);
        fr.onerror = (err) => reject(err);
        fr.readAsDataURL(selectedFile);
      }
    );

    reader.then((url: string) => (this.newAvatar = url));
  }

  _handleSubmit(event: Event) {
    event.preventDefault();

    if (this.profile) {
      const target = event.target as HTMLFormElement;
      const formdata = new FormData(target);
      let entries = Array.from(formdata.entries())
        .map(([k, v]) => (v === "" ? [k] : [k, v]))
        .map(([k, v]) =>
          k === "airports"
            ? [k, (v as string).split(",").map((s) => s.trim())]
            : [k, v]
        );

      if (this.newAvatar)
        entries.push(["avatar", this.newAvatar]);

      const json = Object.fromEntries(entries);

      console.log("Submitting Form", json);

      this.dispatchMessage({
        type: "ProfileSaved",
        userid: this.profile?.userid,
        profile: json as Profile
      });
    }
  }
}