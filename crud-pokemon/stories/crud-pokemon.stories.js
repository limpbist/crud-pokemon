import { html } from 'lit-html';
import '../src/crud-pokemon.js';

export default {
  title: 'CrudPokemon',
  component: 'crud-pokemon',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <crud-pokemon
      style="--crud-pokemon-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </crud-pokemon>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
