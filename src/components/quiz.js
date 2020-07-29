import React, { Component } from "react";
import { QuizData } from "./quizDataEx";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { clearQuestions } from "../redux/actions";

const Quiz = () => {
  // let [questions, setQuestions] = useState(null);
  let [questionIdx, setQuestionIdx] = useState(0);
  let [userAnswer, setSelectedAnswer] = useState(null);
  //   let [incorrectAnswers, setIncorrectAnswer] = useState([]);
  //   let [correctAnswers, setCorrectAnswer] = useState([]);
  //   let [quizEnd, toggleQuizEnd] = useState(false);
  let [score, setScore] = useState(0);
  let [disabled, toggledDisabled] = useState(true);

  const dispatch = useDispatch();

  // const questionList = useSelector((state) => state.questionList);
  // console.log("QList", questionList);
  const localQuestions = useSelector((state) => state.questionList);
  console.log(localQuestions);
  // if(localQuestions !== null && localQuestions.length > 0){

  //   console.log("local: ", localQuestions[0].options.split(','));
  // }
  // setQuestions(questionList)

  // setQuestions(questionList);
  // dispatch(clearQuestions());

  //   const loadQuiz = () => {
  //     setQuestions(questionList);
  //     // const { currentQuestion } = this.state;
  //     //   this.setState(() => {
  //     //     return {
  //     //       questions: QuizData[currentQuestion].question,
  //     //       options: QuizData[currentQuestion].options,
  //     //       answer: QuizData[currentQuestion].answer,
  //     //     };
  // 	//   });
  // 	console.log(questions)
  //   };

  //   useEffect(() => {
  //     loadQuiz();
  //   });

  // componentDidUpdate(prevProps, prevState) {
  // 	const { currentQuestion } = this.state
  // 	if (this.state.currentQuestion !== prevState.currentQuestion) {
  // 		this.setState(() => {
  // 			return {
  // 				disabled: true,
  // 				questions: QuizData[currentQuestion].question,
  // 				options: QuizData[currentQuestion].options,
  // 				answer: QuizData[currentQuestion].answer
  // 			}
  // 		})
  // 	}
  // }

  const nextQuestionHandler = () => {
    if (selectedAnswer === localQuestions[questionIdx].answer) {
      setScore(score++);
    }
    setQuestionIdx(questionIdx++);
  };

  const selectedAnswer = (e) => {
    setSelectedAnswer(e.target.innerHTML);
    toggledDisabled(false);
  };

  const finishHandler = () => {
    const { score, userAnswer, answer } = this.state;
    if (this.state.currentQuestion === QuizData.length - 1) {
      console.log(userAnswer, answer);
      if (userAnswer === answer) {
        this.setState({
          score: score + 1,
        });
      }
      this.setState({
        quizEnd: true,
      });
    }
  };

  if (!localQuestions) {
    return <p>Loading....</p>;
  }
  if (questionIdx === localQuestions.length) {
    return (
      <div>
        <h2>you got {score} out of 2</h2>
        <Link to="/dashboard" className="link">
          <Button id="practiceButton">Return</Button>
        </Link>
      </div>
    );
  }
  if (localQuestions) {
    return (
      <div id="quizRoot">
        <div id="questionAnswer">
          <Paper id="questionPaper">
            <div id="question">{localQuestions[0].question}</div>
          </Paper>

          {localQuestions[0].options.split(",").map((option) => (
            <Button
              variant="contained"
              key={option.id}
              id={userAnswer === option ? "selected" : "questionOption"}
              onClick={(e) => selectedAnswer(e)}
              fullWidth
            >
              {option}
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
              onClick={finishHandler}
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
