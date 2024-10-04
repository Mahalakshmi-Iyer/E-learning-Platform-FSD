// src/components/PythonQuiz.jsx
import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const questions = [
  {
    question: 'What is the correct way to create a function in Python?',
    options: ['function myFunc():', 'def myFunc():', 'create myFunc():', 'func myFunc():'],
    answer: 'def myFunc():',
  },
  {
    question: 'Which of the following is a Python data type?',
    options: ['String', 'Float', 'Integer', 'All of the above'],
    answer: 'All of the above',
  },
  {
    question: 'How do you start a comment in Python?',
    options: ['# This is a comment', '// This is a comment', '/* This is a comment */', '<!-- This is a comment -->'],
    answer: '# This is a comment',
  },
  {
    question: 'Which method can be used to remove any whitespace from both the beginning and the end of a string?',
    options: ['ptrim()', 'len()', 'strip()', 'trim()'],
    answer: 'strip()',
  },
  {
    question: 'Which operator is used to multiply numbers in Python?',
    options: ['+', '-', '*', '/'],
    answer: '*',
  },
];

const PythonQuiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (index, answer) => {
    setSelectedAnswers({ ...selectedAnswers, [index]: answer });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let calculatedScore = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setShowScore(true);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Python Quiz</h2>
      <Form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <Card key={index} className="mb-4">
            <Card.Body>
              <Card.Title>{question.question}</Card.Title>
              {question.options.map((option, idx) => (
                <Form.Check
                  type="radio"
                  key={idx}
                  name={`question-${index}`}
                  label={option}
                  onChange={() => handleAnswerChange(index, option)}
                />
              ))}
            </Card.Body>
          </Card>
        ))}
        <Button type="submit" variant="primary" className="d-block mx-auto">
          Submit
        </Button>
      </Form>

      {showScore && (
        <div className="text-center mt-4">
          <h3>Your Score: {score}/{questions.length}</h3>
        </div>
      )}
    </Container>
  );
};

export default PythonQuiz;
