import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { loadResources } from "../redux/actions";

const Quiz = () => {
  // int used to iterate over array of questions. increments when 'next' buttin is clicked
  let [questionIdx, setQuestionIdx] = useState(0);
  // currently selected answer
  let [selectedAnswer, setSelectedAnswer] = useState(null);
  // store of incorrect answers, used to fetch appropriate reference material
  let [incorrectAnswers, setIncorrectAnswer] = useState([]);
  // used for conditionally rendering quiz results data
  let [quizEnd, toggleQuizEnd] = useState(false);
  // tracks total questions answered correctly
  let [score, setScore] = useState(0);
  // toggled to limit user ability to use next button if answer has not been selected
  let [disabled, toggledDisabled] = useState(true);

  const dispatch = useDispatch();

  const localQuestions = useSelector((state) => state.questionList);

  const toggleSelectedAnswer = (answer) => {
    setSelectedAnswer(answer);
    disabled && toggledDisabled(false);
  };

  
  const nextQuestionHandler = () => {
    let userAnswer = selectedAnswer.trim();
    let actualAnswer = localQuestions[questionIdx].answer
    // user answer is incorrect && add question ID to array of incorrect answers
    userAnswer !== actualAnswer && setIncorrectAnswer([...incorrectAnswers, localQuestions[questionIdx].id]);
    // user answer is correct && increment score counter
    userAnswer === actualAnswer && setScore(score + 1);
    // if question is the last in the array, toggle results page and fetch resources to display in dashboard
    if (questionIdx === localQuestions.length - 1) {
      toggleQuizEnd(true);
      fetchResources();
    }
    // used as index in array of questions. increments after each question
    setQuestionIdx(questionIdx + 1);
    // removes accessibility of 'next' button unti switched back to false
    toggledDisabled(true);
  };

  function fetchResources() {
    fetch("http://localhost:3030/quiz/resources", resourceRequest)
      .then((response) => response.json())
      .then((res) => dispatch(loadResources(res)));
  }

  const resourceRequest = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      resources: incorrectAnswers,
    }),
  };

  const toggleReturnToDashboard = () => {
    console.log("fetch user obj");
    // fetch request to pull update user object or pull resources
  };

  if (localQuestions === null || localQuestions === []) {
    return <p>Loading Data....</p>;
  }
  if (quizEnd) {
    return (
      <div>
        <h2>
          you got {score} out of {localQuestions.length}
        </h2>
        <Link to="/dashboard" className="link">
          <Button id="practiceButton" onClick={toggleReturnToDashboard}>
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
              id={disabled ? "nextDisabled" : "nextEnabled"}
              disabled={disabled}
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
