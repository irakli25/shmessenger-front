import {html, css} from 'lit-element';
import {Shmelement} from "./components/shmelement";
import "./components/header/shmessenger-header";
class App extends Shmelement {
    constructor(){
        super();
    }

    static get styles(){
        return css ``;
    }

    render() {
        return html `
        <shmessenger-header></shmessenger-header>
        <slot></slot>
        <shmessenger-footer></shmessenger-footer>
        `;
    }
}

customElements.define("shmessenger-app", App);