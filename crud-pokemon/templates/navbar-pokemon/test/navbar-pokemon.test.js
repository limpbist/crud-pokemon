import { html, fixture, expect, assert } from '@open-wc/testing';

import '../navbar-pokemon.js';

describe('NavbarPokemon', () => {
  it('El titulo por defecto es "POKE CRUD"', async () => {
    const el = await fixture(html`<navbar-pokemon></navbar-pokemon>`);

    expect(el.title).to.equal('POKE CRUD');
  });
  it('El componente tiene una clase "wrap"', async () => {
    const el = await fixture(html`
      <div class="wrap">
      </div>`);
    expect(el).to.have.class('wrap');
  });
  it('El componente tiene un id "logo"', async () => {
    const el = await fixture(html`
        <div id="logo">
        </div>`);
    expect(el).to.have.id('logo');
  });
  it('El componente tiene una clase "pokeball"', async () => {
    const el = await fixture(html`
          <span class="pokeball"></span>`);
    expect(el).to.have.class('pokeball');
  });
  it('El componente tiene un id "menu"', async () => {
    const el = await fixture(html`
        <nav id="menu">
        </nav>`);
    expect(el).to.have.id('menu');
  });
  it('El array de elementos',async()=>{
    const el = await fixture(html`<navbar-pokemon></navbar-pokemon>`)
    expect(el.optionNavigation,'verifique el número de opciones del menú').to.have.lengthOf(3);
  });
  it('El array de elementos',async()=>{
    const el = await fixture(html`<navbar-pokemon></navbar-pokemon>`)
    expect(el.optionNavigation,'verifique los nombres de las opciones del menú').to.deep.equal(['INICIO', 'MIS POKEMONS', 'REGISTRATE']);
  });
  it('passes the a11y audit', async () => {
    const el = await fixture(html`<navbar-pokemon></navbar-pokemon>`);
    await expect(el).shadowDom.to.be.accessible();
  });
});
