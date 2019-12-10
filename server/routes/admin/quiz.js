import express from 'express';
import quizDb from '../../database/quiz';
import { isSuccessFul } from '../../util';

const router = express.Router();

router.get('/list', async (req, res, next) => {
  try {
    const quizList = await quizDb.fetchAllQuizzes();
    res.status(200).send({ result: true, quizList });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const {
      category, level, question, comment, answer,
    } = req.body;
    const queryResult = await quizDb.add(category, level, question, comment, answer);
    const result = isSuccessFul(queryResult);
    res.status(200).send({ result });
  } catch (error) {
    next(error);
  }
});

router.put('/', async (req, res, next) => {
  try {
    const { id, data } = req.body;
    const {
      category, level, question, comment, answer,
    } = data;
    const queryResult = await quizDb.updateQuiz(id, category, level, question, comment, answer);
    const result = isSuccessFul(queryResult);
    res.status(200).send({ result });
  } catch (error) {
    next(error);
  }
});

router.delete('/', async (req, res, next) => {
  try {
    const { id } = req.body;
    const queryResult = await quizDb.delete(id);
    const result = isSuccessFul(queryResult);
    res.status(200).send({ result });
  } catch (error) {
    next(error);
  }
});

export default router;
