import React, { useState } from 'react';
import { KEYCODE } from '../../../constants/room';
import { ChatInput, InputBox, SendButton } from './style';
import socket from '../../../class/socket';

const Input = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.length > 50) return;
    if (message === '') return;
    socket.emitChatMessage(message);
    setMessage('');
  };

  const sendMessageWithEnter = (event) => {
    if (event.keyCode === KEYCODE.ENTER) {
      sendMessage();
    }
  };

  const updateMessage = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  return (
    <ChatInput>
      <InputBox
        value={message}
        onChange={updateMessage}
        onKeyUp={sendMessageWithEnter} />
      <SendButton
        onClick={sendMessage}>send
      </SendButton>
    </ChatInput>
  );
};

export default Input;
