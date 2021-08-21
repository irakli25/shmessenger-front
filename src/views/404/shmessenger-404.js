import {html, css} from 'lit-element';
import {Shmelement} from "../../components/shmelement";
import "../../components/section/shmessenger-section";
class Page404 extends Shmelement {
    constructor(){
        super();
    }

    static get styles(){
        return css `

            .wrapper {
                width: 100%;
                position: relative;
            }

            .wrapper-img {
                width:100%;
                object-fit: cover;
            }

            .buttons {
                position: absolute;
            }
        `;
    }

    render() {
        return html `
        <shmessenger-section>
            <div class="wrapper">
                <img class = "wrapper-img" src="img/404/img_404.jpg">
                <div class="buttons">
                    <button><a href="/register">მთავარი</a></button>
                </div>
            </div>
        </shmessenger-section>
        `;
    }
}

customElements.define("shmessenger-404", Page404);