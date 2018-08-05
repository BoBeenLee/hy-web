import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { CheerCard, CheerInput, InfoSection } from '../src/components';

storiesOf('HY', module)
  .add('with CheerCard', () => <CheerCard />)
  .add('with CheerInput', () => <CheerInput />)
  .add('with InfoSection', () => <InfoSection />);
