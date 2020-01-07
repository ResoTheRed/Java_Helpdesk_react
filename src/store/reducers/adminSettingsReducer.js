const initState = {
  firebaseStatus: null
};

const adminSettingsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SUCCESS_ADDING_NEW_MENTOR':
      console.log('added new mentor');
      return {
        ...state,
        firebaseStatus: 'Successfully added a mentor'
      };
    case 'ERROR_ADDING_NEW_MENTOR':
      console.log('error adding new mentor');
      return {
        ...state,
        firebaseStatus: 'Sorry we encountered error with firebase'
      };
    case 'ERROR_MENTOR_DOESNOT_EXISTS':
      console.log('error mentor does not exist');
      return {
        ...state,
        firebaseStatus: 'Sorry the mentor you are trying to update doesnot exist'
      };
    case 'SUCCESS_UPDATING_MENTOR':
      console.log('success in updating mentor');
      return {
        ...state,
        firebaseStatus: 'Successfully updated the mentor'
      };
    case 'ERROR_UPDATING_MENTOR':
      console.log('error in updating mentor');
      return {
        ...state,
        firebaseStatus: 'Sorry we encountered error with firebase'
      };
    case 'SUCCESS_UPDATING_CLOCK_SETTINGS':
      console.log('success in updating clock settings');
      return {
        ...state,
        firebaseStatus: 'Successfully updated the clock settings'
      };
    case 'ERROR_UPDATING_CLOCK_SETTINGS':
      console.log('error in updating clock settings');
      return {
        ...state,
        firebaseStatus: 'Error updating the clock settings'
      };
    default:
      return state;
  }
};

export default adminSettingsReducer;
