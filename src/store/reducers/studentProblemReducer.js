const initState = {
  firebaseStatus: null
}

const studentProblemReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SUCCESS_ADDING_STUDENT_PROBLEM':
      console.log('added student problem');
      return {
        ...state,
        firebaseStatus: 'Successfully joined the queue'
      }
    case 'ERROR_ADDING_STUDENT_PROBLEM':
      console.log('error adding student problem');
      return {
        ...state,
        firebaseStatus: 'Sorry we encountered error with firebase'
      }
    default:
      return state;
  }
}

export default studentProblemReducer;