import { html, css } from "lit-element";
import { Shmelement } from "../shmelement";

class Input extends Shmelement {
    constructor () {
        super();
        this.type = "";
        this.placeholder = "";
        this.value = "";
        this.error = "";
    }

    static get properties() {
        return {
            placeholder: {
                type: String,
            },
            type: {
                type: String,
            },
            value: {
                type: String,
            },
            error: {
                type: String,
            },
        }
    }

    static get styles() {
        return css `

            .input-wrapper{
                border: 1px solid var(--gray);
                position: relative;
                padding: 20px 10px 5px;
                border-radius: 7px;
                cursor: text;
            }

            .input-wrapper.active {
                border: 1px solid var(--main-color);
            }


            .placeholder {
                position: absolute;
                top: 13px;
                font-size: 13px;
                color: var(--black);
                transition: 0.3s;
            }

            .focus {
                top: 4px;
                font-size: 10px;
                transition: 0.3s;
            }

            input {
                outline: none;
                border: none;
                width: 100%;
                caret-color: var(--text-color);
            }

            .error {
                color: var(--error);
                font-size: 10px;
                background-image: url(img/icons/error.svg);
                background-repeat: no-repeat;
                background-position: left;
                background-size: 13px;
                padding-left: 15px;
            }
        `;
    }

    render() {
        return html `
            <div class="input-wrapper" @click="${this._click}">
                <label id ="label" class="placeholder">${this.placeholder}</label>
                <input id="input" @keyup = "${this._keyup}" @focus = "${this._focus}" @blur="${this._blur}" type ="${this.type}" value="${this.value}">
            </div>
            ${this.error != "" ? html`<span class="error">${this.error}</span>` : html``}
            
        `;
    }

    _keyup(e){
        this.value = e.target.value;
    }

    _click (e) {
        e.target.classList.add("active");
        let input = this.shadowRoot.querySelector("#input");
        input.focus();
    }

    _focus (e) {
        e.target.parentElement.classList.add("active");
        let label = this.shadowRoot.querySelector("#label");
        label.classList.add("focus");
    }

    _blur(){
        let label = this.shadowRoot.querySelector("#label");
        let active = this.shadowRoot.querySelector(".input-wrapper.active");
        if(this.value.replace(/\s/g, '') == ""){
            label.classList.remove("focus");
            let input = this.shadowRoot.querySelector("#input");
            input.value = "";
        }
        active.classList.remove("active");
    }
}

customElements.define("shmessenger-input", Input);