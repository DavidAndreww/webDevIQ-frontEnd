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
  // const questionList = useSelector((state) => state.questionList);
  // console.log("QList", questionList);
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

  const toggleSelectedAnswer = (e) => {
    setSelectedAnswer(e.target.innerHTML);
    disabled && toggledDisabled(false);
    console.log(selectedAnswer);
  };
  const nextQuestionHandler = () => {
    // when splitting during the localQuestions.map, an extra '' is added before all answers following a comma, resulting in mismatched values for comparison. hence these two vars
    // let answer = localQuestions[questionIdx].answer;
    let trimmedAnswer = selectedAnswer.trim()

    if (trimmedAnswer !== localQuestions[questionIdx].answer) {
      console.log("wrong answer");
      setIncorrectAnswer([...incorrectAnswers, localQuestions[questionIdx].id]);
    } else {
      setScore(score + 1);
      console.log('score: ', score)
    }
    console.log("incorrectAnswerArray: ", incorrectAnswers);
    setQuestionIdx(questionIdx + 1);
    toggledDisabled(true);
  };

  const finishHandler = () => {
    const { score, selectedAnswer, answer } = this.state;
    if (this.state.currentQuestion === QuizData.length - 1) {
      console.log(selectedAnswer, answer);
      if (selectedAnswer === answer) {
        this.setState({
          score: score + 1,
        });
      }
      this.setState({
        quizEnd: true,
      });
    }
  };

  if (localQuestions === null || localQuestions === []) {
    return <p>Loading Data....</p>;
  }
  if (questionIdx === localQuestions.length -1) {
    return (
      <div>
        <h2>you got {score} out of {localQuestions.length}</h2>
        <Link to="/dashboard" className="link">
          <Button
            id="practiceButton"
            onClick={() => dispatch(clearQuestions())}
          >
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
              onClick={(e) => toggleSelectedAnswer(e)}
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
