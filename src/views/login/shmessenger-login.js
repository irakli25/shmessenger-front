import {html, css} from 'lit-element';
import {Shmelement} from "../../components/shmelement";
import "../../components/section/shmessenger-section";
import config from "../../config";
class Login extends Shmelement {
    constructor(){
        super();
        this.name = "";
        this.password = "";

    }

    static get styles(){
        return css `
            .login{
                width:50%;
                margin:auto;
            }
        `;
    }

    render() {
        return html `
            <shmessenger-section col-1 transparent>
                <div class="login">
                    <p>ავტორიზაცია</p>
                    სახელი : <input type="text" id="name" value = ${this.name} @keyup="${(e) => this.name = e.target.value}"> <br>
                    პაროლი : <input type="password" id="password" value = ${this.password} @keyup="${(e) => this.password = e.target.value}">
                    <button @click="${this._login}">ავტორიზაცია</button>
                </div>
            </shmessenger-section>
        `;
    }

    _login = () => {
        this.postData(config.urls.loginUser, {
            "username":`${this.name}`,
            "password":`${this.password}`
        })
    }
}

customElements.define("shmessenger-login", Login);