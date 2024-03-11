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

    @property({ type: String })
    selectedLink?: string; // Property to indicate the selected link

    render() {
        return html`
            <div class="profile-navbar">
                <img src="../../source-images/randomuser.jpeg" class="profile-img">
                <div class="name ${this.selectedLink === 'profile' ? 'selected-prof-nav' : ''}">
                    <a href="./profile/aimee4312">Aimee</a>
                </div>
                <div class="saved-songs name ${this.selectedLink === 'collection' ? 'selected-prof-nav' : ''}">
                    <a href="./collection/aimee4312">Collection</a>
                </div>
                <div class="name ${this.selectedLink === 'wishlist' ? 'selected-prof-nav' : ''}">
                    <a href="./wishlist/aimee4312">Wishlist</a>
                </div>
            </div>
        `;
    }

    static styles = [
        unsafeCSS(profileCSS),
        unsafeCSS(stylesCSS),
    ]
}
