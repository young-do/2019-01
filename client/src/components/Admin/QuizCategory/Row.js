import React from 'react';
import PropTypes from 'prop-types';
import {
  QuizTh, QuizTr, QuizButton,
} from './style';
import fetchData from '../util';

const Row = ({ openModal, quiz }) => {
  const keys = Object.keys(quiz);

  const deleteButtonHandler = (id) => {
    fetchData('delete', '/admin/quiz', { id });
  };

  return (
    <QuizTr>
      {keys.map((key) => <QuizTh>{quiz[key]}</QuizTh>)}
      <QuizButton onClick={openModal}>수정</QuizButton>
      <QuizButton onClick={() => deleteButtonHandler(quiz.id)}>삭제</QuizButton>
    </QuizTr>
  );
};

Row.propTypes = {
  openModal: PropTypes.func.isRequired,
  quiz: PropTypes.shape({
    id: PropTypes.number.isRequired,
    answer: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  }).isRequired,
};

export default Row;
