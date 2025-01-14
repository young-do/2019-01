import styled from 'styled-components';
import {
  DASHBOARD, QUIZ, COUNTER, GAME_START_BUTTON, ROOM,
} from '../../../constants/room';

const GameAreaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: fit-content;
    height: 100%;
    box-sizing: border-box;
`;

const DashBoardWrapper = styled.div`
    position: relative;
    margin: auto;
    width: ${DASHBOARD.WIDTH}px;
    height: ${DASHBOARD.HEIGHT}px;
    border: ${DASHBOARD.BORDER};
    border-radius: ${ROOM.BORDER_RADIUS_BIG}px;
    box-sizing: border-box;
    background-size: 100% 100%;
`;

const QuizWrapper = styled.div`
    position: absolute;
    width: ${QUIZ.WIDTH}px;
    top: 50%;
    left: ${QUIZ.LEFT}px;
    transform: translateY(-50%);
    font-size: ${QUIZ.FONT_SIZE}px;
`;

const CounterWrapper = styled.div`
    position: absolute;
    width: ${COUNTER.WIDTH}px;
    padding: ${COUNTER.PADDING};
    top: 50%;
    right: ${COUNTER.RIGHT}px;
    transform: translateY(-50%);
    text-align: center;
    border: ${COUNTER.BORDER};
    border-radius: ${ROOM.BORDER_RADIUS_SMALL}px;
    background-color: white;
    font-size: ${COUNTER.FONT_SIZE}px;
`;

const GameStartButton = styled.div`
    :active {
        box-shadow: ${GAME_START_BUTTON.BOX_SHADOW_CLICKED};
    }
    :hover {
        background-image: ${ROOM.BUTTON_HOVER_EFFECT};
    }

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: ${GAME_START_BUTTON.PADDING};
    font-size: ${GAME_START_BUTTON.FONT_SIZE}px;
    border-radius: ${ROOM.BORDER_RADIUS_SMALL}px;
    background-color: ${GAME_START_BUTTON.BACKGROUND_COLOR};
    border: 0;
    box-shadow: ${GAME_START_BUTTON.BOX_SHADOW};
    cursor: pointer;
`;

const WaitingText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: ${GAME_START_BUTTON.FONT_SIZE}px;
`;

const GameEndText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: ${GAME_START_BUTTON.FONT_SIZE}px;
`;

export {
  GameAreaWrapper, DashBoardWrapper, QuizWrapper, CounterWrapper,
  GameStartButton, WaitingText, GameEndText,
};
