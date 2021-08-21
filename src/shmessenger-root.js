import {html, css} from 'lit-element';
import {Shmelement} from "./components/shmelement";
import { Router } from "@vaadin/router";
import routes from './routes';
class App extends Shmelement {
  constructor() {
    super();
  }

  static get styles(){
    return css ``;
  }

  render() {
    return html `<div id="app"></div>`
  }

  firstUpdated() {
    const router = new Router(this.shadowRoot.getElementById("app"),{
      baseUrl: '/',
    });
    router.setRoutes(routes);
  }

}

customElements.define("shmessenger-root", App);