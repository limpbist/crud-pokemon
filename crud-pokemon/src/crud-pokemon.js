import { LitElement, html, css } from 'lit-element';
import '../templates/navbar-pokemon/navbar-pokemon.js';

class CrudPokemon extends LitElement {
  static get properties() {
    return {
    };
  }

  static get styles() {
    return css`
    *{
      margin:0px;
      padding:0px;
    }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
        <navbar-pokemon></navbar-pokemon>
    `;
  }
}


customElements.define('crud-pokemon', CrudPokemon);
