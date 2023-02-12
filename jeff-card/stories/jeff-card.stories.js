import { html } from 'lit';
import '../src/jeff-card.js';

export default {
  title: 'JeffCard',
  component: 'jeff-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <jeff-card
      style="--jeff-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </jeff-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
