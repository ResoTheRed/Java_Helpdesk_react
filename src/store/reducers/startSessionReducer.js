const initState = {
  firebaseStatus: null
};

const startSessionReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SUCCESS_REMOVING_STUDENT_FROM_QUEUE':
      console.log('removed student from the queue');
      return {
        ...state,
        firebaseStatus: 'Successfully removed the student from the queue'
      };
    case 'ERROR_REMOVING_STUDENT_FROM_QUEUE':
      console.log('error removing student from the queue');
      return {
        ...state,
        firebaseStatus: 'Sorry we encountered error with firebase'
      };
    case 'SUCCESS_ADDING_STUDENT_DETAILS_TO_SESSION':
      console.log('added student details to session');
      return {
        ...state,
        firebaseStatus: 'Successfully added student details to session'
      };
    case 'ERROR_ADDING_STUDENT_DETAILS_TO_SESSION':
      console.log('error adding student details to session');
      return {
        ...state,
        firebaseStatus: 'Sorry we encountered error with firebase'
      };
    default:
      return state;
  }
};

export default startSessionReducer;
