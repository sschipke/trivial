const questions = ( state = [], action) => {
  switch(action.type) {
    case 'SET_QUESTIONS':
      return action.questions
    default:
      return state
  }
}

export default questions;