import { html, css} from "lit-element";
import { Shmelement } from "../../components/shmelement";
import "../../components/section/shmessenger-section";
import "../../components/button/shmessenger-button";
import "../../components/input/shmessenger-input";
import config from "../../config";
class main extends Shmelement {
    constructor () {
        super();
    }

    static get styles () {
        return css `
            .wrapper {
                position: relative;
            }

            .buttons {
                position: absolute;
                display: flex;
                justify-content: space-between;
                bottom: 0;
                right: 0;
            }

            .image {
                width: 100%;
            }

            .login-wrapper {
                position: absolute;
                top: 25px;
                left: 25px;
                background-color: var(--white);
                padding: 32px 24px;
                display: grid;
                grid-gap: 16px;
                border-radius: 7px;
                box-shadow: var(--shadow);
            }
    `;
    }

    _login = () => {
        const user = this.shadowRoot.querySelector("#user");
        const pass  =  this.shadowRoot.querySelector("#pass");
        this.postData(config.urls.loginUser, {
            "username":`${user.value}`,
            "password":`${pass.value}`
        })
        .then(data =>{
            if(data.responseType != "WARNING")
                this.setStorage("SHAuth",data.jwt);
            else 
                pass.error = config.errors[data.responseCode]; 
        })
    }

    render () {
        return html `
            <shmessenger-section col-1>
                <div class="wrapper">
                    <img class = "image" src="img/main/banner1.jpg" />
                    <div class="login-wrapper">
                        <shmessenger-input id = "user" placeholder="სახელი"></shmessenger-input>
                        <shmessenger-input id = "pass" placeholder="პაროლი" type="password"></shmessenger-input>
                        <shmessenger-button type="primary" @click="${this._login}">შესვლა</shmessenger-button>
                        <shmessenger-button type="text">დაგავიწყდა პაროლი ?</shmessenger-button>
                        <shmessenger-button type="primary">რეგისტრაცია</shmessenger-button>
                    </div>
                </div>
                
            </shmessenger-section>
        `;
    }
}

customElements.define("shmessenger-main", main);