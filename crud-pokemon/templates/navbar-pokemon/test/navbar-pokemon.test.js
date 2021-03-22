import { html, fixture, expect } from '@open-wc/testing';

import '../navbar-pokemon.js';

describe('NavbarPokemon', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`<navbar-pokemon></navbar-pokemon>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`<navbar-pokemon></navbar-pokemon>`);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`<navbar-pokemon title="attribute title"></navbar-pokemon>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<navbar-pokemon></navbar-pokemon>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
