// src/mathGenerator.js

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createQuestion(questionText, correctAnswer, deviation = 10) {
  correctAnswer = correctAnswer.toString();
  const answers = [correctAnswer];
  const correctAnswerNumber = parseFloat(correctAnswer);

  while (answers.length < 4) {
    let incorrectAnswer;
    if (correctAnswer.includes('%')) {
      const factor = 1 + getRandomInt(3, 7) / 10;
      if (Math.random() > 0.5) {
        incorrectAnswer = (correctAnswerNumber * factor).toFixed(2) + '%';
      } else {
        incorrectAnswer = (correctAnswerNumber / factor).toFixed(2) + '%';
      }
    } else {
      const factor = getRandomInt(7, 10) / 10;
      incorrectAnswer = (correctAnswerNumber * factor).toFixed(0);
    }

    if (!answers.includes(incorrectAnswer)) {
      answers.push(incorrectAnswer);
    }
  }

  const answerLabels = ['A', 'B', 'C', 'D'];
  const labeledAnswers = shuffle(answers).map((answer, index) => ({
    label: answerLabels[index],
    text: answer,
  }));

  return {
    question: questionText,
    answers: labeledAnswers,
    correctAnswer: labeledAnswers.find(answer => answer.text === correctAnswer),
  };
}

// 生成加法题目
export function generateAdditionQuestions() {
  const questions = [];
  for (let i = 0; i < 10; i++) {
    const a = getRandomInt(1000, 9999);
    const b = getRandomInt(1000, 9999);
    const c = getRandomInt(1000, 9999);
    const d = getRandomInt(1000, 9999);
    const correctAnswer = a + b + c + d;
    questions.push(createQuestion(`${a} + ${b} + ${c} + ${d} = ?`, correctAnswer));
  }
  return questions;
}

// 生成减法题目
export function generateSubtractionQuestions() {
  const questions = [];
  for (let i = 0; i < 10; i++) {
    const a = getRandomInt(100, 999);
    const b = getRandomInt(100, 999);
    const correctAnswer = a - b;
    questions.push(createQuestion(`${a} - ${b} = ?`, correctAnswer));
  }
  return questions;
}

// 生成乘法题目
export function generateMultiplicationQuestions() {
  const multipliers = [143, 167, 250, 333, 590, 125, 560, 530];
  const questions = [];
  for (let i = 0; i < 10; i++) {
    const a = getRandomInt(100, 999);
    const baseMultiplier = multipliers[getRandomInt(0, multipliers.length - 1)];
    const multiplier = baseMultiplier + getRandomInt(-3, 3);
    const correctAnswer = a * multiplier;
    questions.push(createQuestion(`${a} * ${multiplier} = ?`, correctAnswer, 0.3));
  }
  return questions;
}

// 生成百分比题目
export function generatePercentageQuestions() {
  const questions = [];
  for (let i = 0; i < 10; i++) {
    const a = getRandomInt(100, 999);
    const percentage = getRandomInt(1, 105);
    const correctAnswer = Math.round(a * percentage / 100);
    questions.push(createQuestion(`${a} * ${percentage}% = ?`, correctAnswer));
  }
  return questions;
}

// 生成除法题目
export function generateDivisionQuestions() {
  const questions = [];
  for (let i = 0; i < 10; i++) {
    const a = getRandomInt(100, 999);
    const b = getRandomInt(1000, 9999);
    const correctAnswer = ((a / b) * 100).toFixed(2) + '%';
    questions.push(createQuestion(`${a} / ${b} = ?`, correctAnswer, 0.3));
  }
  return questions;
}
