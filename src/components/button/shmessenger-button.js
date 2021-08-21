import { html, css } from "lit-element";
import { Shmelement } from "../shmelement";

class button extends Shmelement {
    constructor() {
        super();
        this.href = "#";
    }

    static get properties () {
        return {
            href:{
                type: String,
            }
        }
    }

    static get styles () {
        return css `
        /* primary */
            :host([type='primary']) .content {    
                width: 245px;
                height: 35px;
                cursor: pointer;
                background: var(--button-color);
                border-radius: 6px 12px;
                border: 1px solid transparent;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background-color 0.3s;
            }

            :host([type='primary']) .link {
                text-decoration: none;
                color: var(--white);
            }

            :host([type='primary']) .content:hover {
                background: var(--white);
                border-color: var(--main-color);
                transition: background-color 0.3s;
            }

            :host([type='primary']) .content:hover a {
                color: var(--main-color);
            }

            :host([type='primary']) .content:active {
                background-color: var(--text-color);
                transition: background-color 0.3s;
            }

            :host([type='primary']) .content:active a{
                color: var(--white);
            }

            /** text  **************** ************************************************ ***********/

            :host([type='text']) .content {    
                width: 245px;
                height: 35px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            :host([type='text']) .link {
                text-decoration: none;
                color: var(--text-color);
            }

            :host([type='text']) .content:hover a {
                color: var(--main-color);
            }

            :host([type='text']) .content:active a {
                color: var(--main-color);
            }

        `;
    }
    
    render () {
        return html `
                <div class="content">
                    <a class="link" href="${this.href}" >
                        <slot></slot>
                    </a>
                </div>
                
        `;
    }
}

customElements.define("shmessenger-button", button);