import {html, css} from "lit-element";
import {Shmelement} from "../shmelement";
import "../section/shmessenger-section";

class Header extends Shmelement {
    constructor(){
        super();
    }

    static get styles(){
        return css`
            .logo {
                color: transparent;
                background-image: linear-gradient(83.84deg, var(--text-color) -6.87%, var(--main-color) 26.54%);
                -webkit-background-clip: text;
                background-clip: text;
            }
            .big-symbol{
                font-size:70px;
            }

            .small-symbol{
                font-size:30px;
            }


        `;
    }

    render() {
        return html`
        <shmessenger-section col-1>
            <h1 class="logo">
                <span class = "big-symbol">შ</span>
                <span class = "small-symbol">მესენჯერი</span>
            </h1>
        </shmessenger-section>
        `;
    }
}

customElements.define("shmessenger-header",Header);