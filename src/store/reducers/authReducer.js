const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_ERROR':
      console.log('login error');
      return  {
        ...state,
        authError: 'Login Failed'
      }
    case 'FIREBASE_ERROR':
      console.log('Firebase error');
      return {
        ...state,
        authError: 'Sorry we encountered error with firebase'
      }  
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null
      }
    case 'LOGOUT_SUCCESS':
      console.log('logout success');
      return state;
    default:
      return state;
  }
}

export default authReducer;