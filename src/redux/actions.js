export const login = (payload) => {
  return (dispatch) => {
    fetch("path", payload)
      .then((res) => res.json)
      .then((response) => {
        const action = {
          type: "LOGIN",
          value: response,
        };
        dispatch(action);
      });
  };
};

export const loadQuestions = (questions) => {
  return {
    type: "QUESTIONS",
    value: questions,
  };
};

export const loadResources = (resources) => {
  return {
    type: 'RESOURCES',
    value: resources
  }
}

export const updateUserQuestions = (questions) => {
  return {
    type: 'UPDATED_QUESTIONS',
    value: questions
  }
}
