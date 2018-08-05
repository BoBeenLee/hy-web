import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Button', module).add('with text', () => {
  return (
    <button
      disabled={boolean('Disabled', false)}
      onClick={action('clicked')}
    >
      {text('Label', 'Hello Button')}
    </button>
  )
})
