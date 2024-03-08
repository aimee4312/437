import { html, LitElement, css } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { Profile } from "ts-models";
import { consume } from "@lit/context";
import { authContext } from "./auth-required";
import { APIUser } from "../rest";

@customElement('home-header')
export class HomeHeaderElement extends LitElement {
    @state()
    profile?: Profile;

    @consume({ context: authContext, subscribe: true })
    @property({ attribute: false })
    user = new APIUser();

    render() {
        return html`
    <h1>
        <a href="../app/">
        <svg class="icon">
            <use href="/source-images/icons/icon.svg#icon-home" />
        </svg>  
        </a>
        <a href="./music/artist.html">Collections</a>
        <div class="header-title">Smiski World</div>
        <a href="./music/music.html">Forum</a>
        <drop-down>
            <svg class="icon">
                <use href="/source-images/icons/icon.svg#icon-profile" />
            </svg>
            <ul slot="menu" class="dropdown" >
                <li><a href="/app/profile/aimee4312">Profile</a></li>
                <li><hr /></li>
                <li>Collections</li>
                <li><hr /></li>
                <li>Wishlist</li>
                <li><hr /></li>
                <li><a href="#" @click=${this._signOut}>Logout</a></li>
            </ul>
        </drop-down>
    </h1>`;
    }

    static styles = css`
    h1 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px; 
        background-color: var(--secondary-color); 
        color: var(--secondary-text); 
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
        color: var(--secondary-text);
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

    // updated(changedProperties: Map<string, unknown>) {
    //     console.log(
    //         "Profile Data has been updated",
    //         changedProperties
    //     );
    //     if (changedProperties.has("user")) {
    //         console.log("New user", this.user);
    //         const { username } = this.user;
    //         this._getData(`/app/profile/${username}`);
    //     }
    //     return true;
    // }

    // _getData(path: string) {
    //     const request = new APIRequest();

    //     request
    //         .get(path)
    //         .then((response: Response) => {
    //             if (response.status === 200) {
    //                 return response.json();
    //             }
    //             return null;
    //         })
    //         .then((json: unknown) => {
    //             console.log("Profile:", json);
    //             this.profile = json as Profile;
    //         });
    // }

    _signOut() {
        console.log("Signout");
        this.user.signOut();
    }
}