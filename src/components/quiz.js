import React, { Component } from "react";
import { QuizData } from "./quizDataEx";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const Quiz = () => {
  let state = {
    userAnswer: null,
    currentQuestion: 0,
    options: [],
    quizEnd: false,
    score: 0,
    disabled: true,
  };
  const [userAnswer, setUserAnswer] = useState(null);
  const [quizEnd, toggleQuizEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [disabled, toggledDisabled] = useState(true);

  const questionList = useSelector((state) => state.questionList);
  console.log(questionList)

//   const loadQuiz = () => {
//     // const { currentQuestion } = this.state;
//     this.setState(() => {
//       return {
//         questions: QuizData[currentQuestion].question,
//         options: QuizData[currentQuestion].options,
//         answer: QuizData[currentQuestion].answer,
//       };
//     });
//   };
  useEffect(() => {
	// loadQuiz();
	console.log('USE EFFECT WORKS!')
  });

  const nextQuestionHandler = () => {
    const { userAnswer, answer, score } = this.state;
    console.log(userAnswer, answer);
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    });
    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }
  };

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
  const checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    });
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

  // const { questions, options, currentQuestion, userAnswer, quizEnd } = this.state
  // if (quizEnd) {
  return (
    <div>
      <h2>
        you got {score} out of {QuizData.length}
      </h2>
      <Link to="/dashboard" className="link">
        <Button id="practiceButton">Return</Button>
      </Link>
    </div>
  );
  // }
  // 	return (
  // 		<div id='quizRoot'>
  // 			<div id='questionAnswer'>
  // 				<Paper id='questionPaper'>
  // 					<div id='question'>
  // 						{this.state.questions}
  // 					</div>
  // 				</Paper>

  // 				{this.state.options.map(option => (
  // 					<Button
  // 						variant="contained"
  // 						key={this.state.options.indexOf(option)}
  // 						id={userAnswer === option ? 'selected' : 'questionOption'}
  // 						onClick={() => this.checkAnswer(option)}
  // 						fullWidth>
  // 						{option}
  // 					</Button>
  // 				))}
  // 			</div>
  // 			<div id='nextButtonArea'>
  // 				{this.state.currentQuestion < QuizData.length - 1 &&
  // 					<Button
  // 						id={this.state.disabled ? 'nextDisabled' : 'nextEnabled'}
  // 						disabled={this.state.disabled}
  // 						variant="contained"
  // 						color='primary'
  // 						onClick={this.nextQuestionHandler}>Next</Button>

  // 				}
  // 				{this.state.currentQuestion === QuizData.length - 1 &&
  // 					<Button
  // 						id='finishButton'
  // 						onClick={this.finishHandler}
  // 						variant="contained"
  // 					>Finish</Button>
  // 				}
  // 			</div>
  // 		</div>
  // 	)
  // }
};
export default Quiz;

// number of question logic
/* <div>{`Question ${currentQuestion + 1} out of ${QuizData.length}`} */
