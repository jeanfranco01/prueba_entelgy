class main extends HTMLElement{
    constructor(){
            super();
    }

    static get observedAttributes(){
        return fetch("https://reqres.in/api/users?page=2");
    }

    connectedCallback(){
        this.innerHTML="<div>holadsadsa mundo</div>";
    }
}

window.customElements.define("pais-1",main);