export const login = (credentials) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const fb = getFirebase();
    const firestore = getFirestore();

    fb.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then((val) => {
      firestore.collection('User')
        .doc(val.user.uid)
        .set({
          email : val.user.email,
          uid : val.user.uid,
          creationTime: val.user.metadata.creationTime ? val.user.metadata.creationTime: '',
          lastSignInTime: val.user.metadata.lastSignInTime ? val.user.metadata.lastSignInTime : '' ,
          displayName: val.user.displayName ? val.user.displayName : '',
          photoUrl: val.user.photoUrl ? val.user.photoUrl : '',
          role: ['mentor']
        }, { merge: true })
        .then(() => {
          dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
          dispatch({ type: 'FIREBASE_ERROR', err });
        });
    }).catch((err) => {
      dispatch({type: 'LOGIN_ERROR', err});
    });
  }
}

export const logout = () => {
  return (dispatch, getState, {getFirebase}) => {
    const fb = getFirebase();
    fb.auth().signOut().then( () => {
      dispatch({ type: 'LOGOUT_SUCCESS' });
    })
  }
}