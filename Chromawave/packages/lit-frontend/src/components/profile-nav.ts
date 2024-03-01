import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "../../../express-backend/src/models/profile";

type ProfileLocation = Location & {
    params: { userid: string };
};

@customElement("profile-nav")
export class ProfileNavElement extends LitElement {
    @state()
    profile?: Profile;

    @property({ attribute: false })
    location?: ProfileLocation;

    @property({ reflect: true })
    get userid() {
        return this.location?.params.userid;
    }

    @property({ reflect: true })
    get profileSelected(): boolean {
        return this.location?.params.userid !== undefined;
    }

    @property({ reflect: true })
    get songsSelected(): boolean {
        return new URL(document.location.toString()).searchParams.has("songs");
    }

    @property({ reflect: true })
    get palettesSelected(): boolean {
        return new URL(document.location.toString()).searchParams.has("palettes");
    }

    render() {
        return html`
            <nav>
                ${this.profileSelected? 
                    html`
                    <div class="profile-navbar">
                        <img src="../../source-images/randomuser.jpeg" class="profile-img">
                        <div class="name selected-prof-nav">
                            <a href="./index.html">${name}</a>
                        </div>
                        <div class="saved-songs name">
                            <a href="./saved-songs.html">Saved Songs</a>
                        </div>
                        <div class="name">
                            <a href="./saved-palettes.html">Saved Palettes</a>
                        </div>
                    </div>
                    ` : ""}
                ${this.songsSelected? 
                    html`
                    <div class="profile-navbar">
                        <img src="../../source-images/randomuser.jpeg" class="profile-img">
                        <div class="name">
                            <a href="./index.html">${name}</a>
                        </div>
                        <div class="saved-songs name selected-prof-nav">
                            <a href="./saved-songs.html">Saved Songs</a>
                        </div>
                        <div class="name ">
                            <a href="./saved-palettes.html">Saved Palettes</a>
                        </div>
                    </div>
                    ` : ""}
                ${this.songsSelected?
                    html`
                    <div class="profile-navbar">
                        <img src="../../source-images/randomuser.jpeg" class="profile-img">
                        <div class="name">
                            <a href="./index.html">${name}</a>
                        </div>
                        <div class="saved-songs name">
                            <a href="./saved-songs.html">Saved Songs</a>
                        </div>
                        <div class="name selected-prof-nav">
                            <a href="./saved-palettes.html">Saved Palettes</a>
                        </div>
                    </div>
                    ` : ""}
            </nav>
        `;
    }
}