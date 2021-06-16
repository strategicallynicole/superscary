import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import backgrounds from '@storybook/addon-backgrounds';
import {
  withKnobs,
  text,
  number,
  array,
  object,
  boolean,
} from '@storybook/addon-knobs/react';
import styled from 'styled-components';

import RubberButton from './gradient.js';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

storiesOf('RubberButton', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addDecorator(
    backgrounds([
      { name: 'white', value: '#fff' },
      { name: 'gray', value: '#e0e0e0', default: true },
    ])
  )
  .add('Default', () => <RubberButton content={text('content', 'BUTTON')} />)
  .add('Cutomized gradient', () => (
    <RubberButton
      gradient={array('gradient => ARRAY', ['#f00b47', '#0f6bb6'])}
      content={text('content', 'BUTTON')}
    />
  ))
  .add('Playground', () => (
    <Container style={{ flexDirection: 'column' }}>
      <h3>Update props in {`"KNOBS"`} section below</h3>
      <RubberButton
        content={text('content => STRING', 'BUTTON')}
        theme={text('theme => STRING', 'Vanusa')}
        angle={text('angle => STRING', 'right')}
        padding={array('padding => ARRAY', [15, 30])}
        borderRadius={number('borderRadius => NUMBER', 20)}
        borderWith={number('borderWith => NUMBER', 2)}
        background={text('background => STRING', '#fff')}
        color={text('color => STRING', '#ae3560')}
        fontSize={number('fontSize => NUMBER', 16)}
        transition={object('transition => OBJECT', {
          property: 'all',
          duration: 0.2,
          timingFunction: 'ease-in-out',
          delay: 0,
        })}
        disabled={boolean('disabled => BOOL', false)}
      />
    </Container>
  ));
