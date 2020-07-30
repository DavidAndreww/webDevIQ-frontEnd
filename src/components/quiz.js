import React, { Component } from "react";
import { QuizData } from "./quizDataEx";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { clearQuestions } from "../redux/actions";

const Quiz = () => {
  let [questionIdx, setQuestionIdx] = useState(0);
  let [selectedAnswer, setSelectedAnswer] = useState(null);
  let [incorrectAnswers, setIncorrectAnswer] = useState([]);
  let [quizEnd, toggleQuizEnd] = useState(false);
  let [score, setScore] = useState(0);
  let [disabled, toggledDisabled] = useState(true);

  const dispatch = useDispatch();

  const localQuestions = useSelector((state) => state.questionList);
  console.log("localQuestions: ", localQuestions);

  const toggleSelectedAnswer = (answer) => {
    setSelectedAnswer(answer);
    disabled && toggledDisabled(false);
  };

  const nextQuestionHandler = () => {
    let trimmedAnswer = selectedAnswer.trim();

    if (trimmedAnswer !== localQuestions[questionIdx].answer) {
      setIncorrectAnswer([...incorrectAnswers, localQuestions[questionIdx].id]);
    }
    if (trimmedAnswer === localQuestions[questionIdx].answer) {
      setScore(score + 1);
    }
    if (questionIdx === localQuestions.length - 1) {
      toggleQuizEnd(true);
      // fetch request to pull resources OR update user object
    }
    setQuestionIdx(questionIdx + 1);
    toggledDisabled(true);
  };

  const returnToDash = () => {
    dispatch(clearQuestions());
    // fetch request to pull update user object or pull resources
  };

  if (localQuestions === null || localQuestions === []) {
    return <p>Loading Data....</p>;
  }
  if (quizEnd) {
    console.log("hiya");
    return (
      <div>
        <h2>
          you got {score} out of {localQuestions.length}
        </h2>
        <Link to="/dashboard" className="link">
          <Button id="practiceButton" onClick={returnToDash}>
            Return
          </Button>
        </Link>
      </div>
    );
  }
  if (localQuestions) {
    return (
      <div id="quizRoot">
        <div id="questionAnswer">
          <Paper id="questionPaper">
            <div id="question">{localQuestions[questionIdx].question}</div>
          </Paper>

          {localQuestions[questionIdx].options.split(",").map((question) => (
            <Button
              variant="contained"
              key={question}
              id={selectedAnswer === question ? "selected" : "questionOption"}
              onClick={() => toggleSelectedAnswer(question)}
              fullWidth
            >
              {question}
            </Button>
          ))}
        </div>
        <div id="nextButtonArea">
          {questionIdx < localQuestions.length - 1 && (
            <Button
              id={disabled ? "nextDisabled" : "nextEnabled"}
              disabled={disabled}
              variant="contained"
              color="primary"
              onClick={nextQuestionHandler}
            >
              Next
            </Button>
          )}
          {questionIdx === localQuestions.length - 1 && (
            <Button
              id="finishButton"
              onClick={nextQuestionHandler}
              variant="contained"
            >
              Finish
            </Button>
          )}
        </div>
      </div>
    );
  }
};
export default Quiz;

// number of question logic
/* <div>{`Question ${currentQuestion + 1} out of ${QuizData.length}`} */
