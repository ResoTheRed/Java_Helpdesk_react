import * as firebase from 'firebase/app';
export const submitStudentProblem = (studentProblemData) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    return firestore.collection('Queue')
      .doc(studentProblemData.username)
      .set({
        username: studentProblemData.username ? studentProblemData.username: '',
        issue: studentProblemData.issue ? studentProblemData.issue: '',
        classes: studentProblemData.classes ? studentProblemData.classes: '',
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true })
      .then(() => {
        return dispatch({ type: 'SUCCESS_ADDING_STUDENT_PROBLEM' });
      }).catch((err) => {
        return dispatch({ type: 'ERROR_ADDING_STUDENT_PROBLEM', err });
      });
  }
}