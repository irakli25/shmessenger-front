import {html, css} from "lit-element";
import {Shmelement} from "../shmelement";

class Section extends Shmelement {
    constructor(){
        super();
    }

    static get styles(){
        return css`

            :host {
                --content-max-width: 1024px;
                --main-color: #4db789;/*#276b2d;*/
                --text-color: #57d583;/*#42f554*/
                --background: #f4f4f4;
                --background-header: #defce1;
                --white: #FFFFFF;
                --button-color: linear-gradient(347deg, var(--text-color) -66.87%, var(--main-color) 82.54%);
                --shadow:  rgb(0 0 0 / 10%) 20px 20px 20px 20px;
                --gray-light:#d9d9d9;
                --gray:#b9b9b9;
                --black: #555555;
                --error: #B00020;
            }

            .content{
                width: var(--content-max-width);
                margin: auto;
                display: grid;
                box-sizing: border-box;
                padding-bottom: 20px;
            }

            :host([green]) .content {
                background-color: var(--background-header);
            }

            :host([transparent]) .content {
                background-color: transparent;
            }

            :host([col-1]) .content{
                grid-template-columns: repeat(1,1fr);
            }

            :host([col-2]) .content{
                grid-template-columns: repeat(2,1fr);
            }

        `;
    }

    render(){
        return html `
            <div class="content">
                <slot></slot>
            </div>
        `;
    }
}

customElements.define("shmessenger-section", Section);