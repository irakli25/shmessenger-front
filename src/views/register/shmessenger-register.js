import {html, css} from "lit-element";
import {Shmelement} from "../../components/shmelement";
import "../../components/section/shmessenger-section";
import config from "../../config";
class Register extends Shmelement {
    constructor(){
        super();
        this.name = "";
        this.nickName = "";
        this.countryCode = "GE";
        this.email = "irakla@gmail.com";
        this.phone = "551551551";
        this.birthDate = "2000-01-01T00:00:00";
        this.password = "";
        this.checkPassword = "";
    }
    
    static get styles(){
        return css `
            button {
                cursor:pointer;
            }
        `;
    }

    render () {
        return html `
            <shmessenger-section>
                <p>რეგისტრაცია</p>
                სრული სახელი : <input type="text" id="name" value = ${this.name} @keyup="${(e) => this.name = e.target.value}"> <br>
                მომხმარებლის სახელი : <input type="text" id="name" value = ${this.nickName} @keyup="${(e) => this.nickName = e.target.value}"> <br>
                ქვეყანა : <input type="text" id="name" value = ${this.countryCode} @keyup="${(e) => this.countryCode = e.target.value}"> <br>
                ელფოსტა : <input type="text" id="name" value = ${this.email} @keyup="${(e) => this.email = e.target.value}"> <br>
                ტელეფონი : <input type="text" id="name" value = ${this.phone} @keyup="${(e) => this.phone = e.target.value}"> <br>
                დაბადების თარიღი : <input type="text" id="name" value = ${this.birthDate} @keyup="${(e) => this.birthDate = e.target.value}"> <br>
                პაროლი : <input type="password" id="name" value = ${this.password} @keyup="${(e) => this.password = e.target.value}"> <br>
                გაიმეორეთ პაროლი : <input type="password" id="name" value = ${this.checkPassword} @keyup="${(e) => this.checkPassword = e.target.value}"> <br>
                <button @click="${this._register}">რეგისტრაცია</button>
            </shmessenger-section>
            `;
    }

    _register = () => {
        this.postData(config.urls.registerUser,{
            "username": "irakla30",
            "name": "irakla",
            "countryCode": "GE",
            "email": "irakla29@gmail.com",
            "phone": "55155155129",
            "birthDate": "2000-01-01T00:00:00",
            "password": "551551551"
        })
    }

}

customElements.define("shmessenger-register", Register);