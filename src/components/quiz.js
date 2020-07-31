import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { clearQuestions } from "../redux/actions";

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
  // console.log("localQuestions: ", localQuestions);

  const toggleSelectedAnswer = (answer) => {
    setSelectedAnswer(answer);
    disabled && toggledDisabled(false);
  };

  const nextQuestionHandler = (e) => {
    let trimmedAnswer = selectedAnswer.trim();
    // let buttonId = e.currentTarget
  
    if (trimmedAnswer !== localQuestions[questionIdx].answer) {
      setIncorrectAnswer([...incorrectAnswers, localQuestions[questionIdx].id]);
    }
    if (trimmedAnswer === localQuestions[questionIdx].answer) {
      setScore(score + 1);
    }
    if (questionIdx === localQuestions.length - 1) {
      toggleQuizEnd(true);
      console.log("fetch resources");
   fetchResources()
    }
    setQuestionIdx(questionIdx + 1);
    toggledDisabled(true);
  };

  function fetchResources(){
    fetch("http://localhost:3030/quiz/resources", resourceRequest)
    .then(response => response.json())
    .then(res => console.log('RESOURCES!!!: ', res))
  }

  const resourceRequest = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      resources: incorrectAnswers
    })
  }


  const returnToDash = () => {
    dispatch(clearQuestions());
    console.log("fetch user obj");
    // fetch request to pull update user object or pull resources
    console.log(incorrectAnswers);
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
              onClick={(e)=>nextQuestionHandler(e)}
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
