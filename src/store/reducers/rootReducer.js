import authReducer from './authReducer';
import studentProblemReducer from './studentProblemReducer';
import adminSettingsReducer from './adminSettingsReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  firebaseReducer: firebaseReducer,
  studentProblemReducer: studentProblemReducer ,
  adminSettingsReducer : adminSettingsReducer,
  firestoreReducer: firestoreReducer
});

export default rootReducer
