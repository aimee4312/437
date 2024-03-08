
import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "ts-models";
import profileCSS from "/src/styles/profile.css?inline";
import stylesCSS from "/src/styles/styles.css?inline";

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

    render() {
        return html`
        <div class="nav-bar-container">
            <div class="profile-navbar">
                <img src="../../source-images/randomuser.jpeg" class="profile-img">
                <div class="name selected-prof-nav">
                    <a href="./index.html">Aimee</a>
                </div>
                <div class="saved-songs name">
                    <a href="./saved-songs.html">Collection</a>
                </div>
                <div class="name">
                    <a href="./saved-palettes.html">Wishlist</a>
                </div>
            </div>
        <div>
        `;
    }

    static styles = [
        unsafeCSS(profileCSS),
        unsafeCSS(stylesCSS),
    ]
}