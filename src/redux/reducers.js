import { combineReducers } from "redux";

const userObject = (state = null, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const questionList = (state = null, action) => {
  switch (action.type) {
    case "QUESTIONS":
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ userObject, questionList });
