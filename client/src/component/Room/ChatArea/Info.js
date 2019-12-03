import React from 'react';
import {
  ChatHeader, RoomInfo, ExitButton, PlayerInfo, Emoji,
} from './style';

const Info = () => (
  <ChatHeader>
    <RoomInfo>
      <PlayerInfo>
        <Emoji url="https://kr.object.ncloudstorage.com/connect-2019-01/image/player-emoji.png" />10
      </PlayerInfo>
      <PlayerInfo>
        <Emoji url="https://kr.object.ncloudstorage.com/connect-2019-01/image/viewer-emoji.png" />10
      </PlayerInfo>
    </RoomInfo>
    <ExitButton>exit</ExitButton>
  </ChatHeader>
);

export default Info;
