import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ChatBot from '../components/chat-bot';


storiesOf('ChatBot', module)
  .add('with no messages', () => <ChatBot />)
  .add('with message History', () => {
    return (
      <ChatBot messageHistory={[{ content: 'Testing, how are you?', sender: 'bot' }]} />
    )
  });
// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);


// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
