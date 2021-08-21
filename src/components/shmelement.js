import {html, css, LitElement} from 'lit-element';
export class Shmelement extends LitElement {
    constructor() {
        super();
    }

    static get styles(){
        return css``;
    }

    render() {
        return html ``;
    }

    // Example POST method implementation:
    postData = async (url = '', data = {}) => {
        // Default options are marked with *
        const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
  }
  
    getData = async (url, jwt = null) => {
  
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        if(jwt)
        myHeaders.append('Authorization', `Bearer ${jwt}`)
        
        const myRequest = new Request(url, {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors'
        });
        
        const response = await fetch(myRequest);
        return response.json();
      
  }

    setStorage(name, value){
        localStorage.setItem(name,value);
    }

    getStorage(name){
        return  localStorage.getItem(name);
    }
}