import styled from 'styled-components';
import {
  CHAT_AREA, FIELD, ROOM, DASHBOARD, QUIZ,
} from '../../../constants/room';

const ChatAreaWrapper = styled.div`
    width: ${CHAT_AREA.WIDTH}px;
    height: ${FIELD.getHeight()}px;
    margin-top: ${DASHBOARD.HEIGHT + ROOM.MARGIN}px;
    box-sizing: border-box;
    padding: 8px;
    border: 1px solid lightslategrey;
    border-radius: 8px;
    background-color: ${CHAT_AREA.BG_COLOR};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ChatHeader = styled.div`
    width: 100%;
    height: 8%;
    display: flex;
    justify-content: space-between;
`;

const RoomInfo = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`;

const PlayerInfo = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${QUIZ.FONT_SIZE}px;
`;

const Emoji = styled.div.attrs((props) => ({
  style: { backgroundImage: `url(${props.url})` },
}))`
    background-size: 20px 20px;
    width: 20px;
    height: 20px;
    margin-left: 8px;
`;

const buttonStyle = `
    &:active {
        box-shadow: none;
        color: gray;
        background-color: rgba(10,10,10,0.1);
    }
    border: 1px solid lightslategrey;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 1px 1px 0px dimgrey;
    color: black;
    cursor: pointer;
    box-sizing: border-box;
    font-size: ${QUIZ.FONT_SIZE}px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-image: linear-gradient(-180deg, rgba(150, 150, 150, 0.1), rgba(150, 150, 150, 0.2) 50%);
    }
`;

const ExitButton = styled.div`
    width: 25%;
    height: 100%;
    ${buttonStyle}
`;

const ChatLog = styled.div`
    width: 100%;
    max-width: 100%;
    height: 80%;
    overflow: auto;
    box-sizing: border-box;
    padding: 8px;
`;

const ChatNotice = styled.div`
    text-align: center;
    color: coral;
    font-weight: bold;
    margin-bottom: 10%;
`;

const Chat = styled.div`
    width: 100%;
    margin-bottom: 8px;
`;

const ChatNinkname = styled.span`
    font-weight: bold;
`;

const ChatMessage = styled.span`
    max-width: 100%;
    word-wrap: break-word;
    line-height: ${QUIZ.FONT_SIZE}px;
`;

const ChatInput = styled.div`
    display: flex;
    width: 100%;
    height: 8%;
    justify-content: space-between;
`;

const InputBox = styled.input.attrs({
  type: 'text',
  maxLength: '50',
})`
    width: 72%;
    height: 100%;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 0 8px;
    font-size: ${CHAT_AREA.FONT_SIZE}px;
    box-shadow: 1px 1px 0px dimgrey;
    border: 1px solid lightslategrey;
    font-family: 'DungGeunMo';
    &:focus {
        outline: none;
    };
`;

const SendButton = styled.div.attrs({
  type: 'button',
})`
    width: 25%;
    height: 100%;
    ${buttonStyle}
`;

export {
  ChatAreaWrapper, ChatHeader, RoomInfo, ExitButton,
  ChatLog, ChatInput, InputBox, SendButton, PlayerInfo,
  Emoji, Chat, ChatNinkname, ChatMessage, ChatNotice,
};
