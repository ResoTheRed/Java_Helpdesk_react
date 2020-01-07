import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import rootReducer from './reducers/rootReducer';
import firebaseConfig from '../config/firebaseConfig';
import thunk from 'redux-thunk';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebaseConfig), // redux binding for firebase
    reduxFirestore(firebaseConfig) // redux bindings for firestore
  )
);
export default store;