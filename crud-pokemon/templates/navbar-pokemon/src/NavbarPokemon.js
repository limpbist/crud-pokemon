import { html, css, LitElement } from 'lit-element';
'use strict'
export class NavbarPokemon extends LitElement {
  static get styles() {
    return css`
    *{
      margin:0px;
      padding:0px;
    }
    #header{
      width:100%;
      height: 68px;
      background-color: #EF5350;
      color:white;
    }
    .wrap{
      width:1200px;
      margin:0px auto;
    }
    #logo{
      float:left;
      width:200px;
      background-color:yellow;
      text-align:center;
      letter-spacing:1px;
      cursor:pointer;
      overflow:hidden;
      transition: all 300ms;
      margin:0px 18px;
      padding:18px;
    }
    #logo h3{
      font-size:1.4em;
      transtion:all 300ms;
      font-weight:bold;
      color: #0085b6;
      color: hsl(196.2, 100%, 35.7%);
      background-color:#fae6fa;
    }
    #logo .pokeball{
      font-size:28px;
      float:left;
    }
    #menu{
      float:right;
      background:transparen;
      height:70px;
      cursor:pointer;
    }
    #menu li {
      font-size:24px;
      display:inline-block;
      letter-spacin:1px;
      line-height:68px;
      margin:0px 20px 0px 20px;
    }
    #menu li a{
      display:block;
      text-decoration:none;
      color:black;
      transition:all 200ms;
    }
    #menu li a:hover{
      color:yellow;
      transform:scale(1.2,1.2);
    }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      optionNavigation: { type: Array }
    };
  }

  constructor() {
    super();
    this.title = 'POKE CRUD'
    this.optionNavigation = ['INICIO', 'MIS POKEMONS', 'REGISTRATE'];
  }

  render() {
    return html`
    <header id="header">
      <div class="wrap">
        <div id="logo">
          <span class="pokeball">P</span>
          <h3>${this.title}</h3>
        </div>
        <nav id="menu">
          ${this.optionNavigation.map(element => html`
          <ul>
            <li><a>${element}</a></li>
          </ul>
          `)}
        </nav>
      </div>
    </header>
    `;
  }

}
