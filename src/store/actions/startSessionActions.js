import * as firebase from 'firebase/app';
export const removeStudentFromQueue = (studentOnQueue) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    return firestore
      .collection('Queue')
      .doc(studentOnQueue.currentStudent)
      .delete()
      .then(() => {
        return dispatch({ type: 'SUCCESS_REMOVING_STUDENT_FROM_QUEUE' });
      })
      .catch((err) => {
        return dispatch({
          type: 'ERROR_REMOVING_STUDENT_FROM_QUEUE',
          err
        });
      });
  };
};

export const addStudentDetailsToSession = (studentDetails) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    return firestore
      .collection('Sessions')
      .doc(studentDetails.currentStudent)
      .set(
        {
          username: studentDetails.currentStudent ? studentDetails.currentStudent : '',
          problem: studentDetails.currentStudentDetails ? studentDetails.currentStudentDetails : '',
          comment: studentDetails.comment ? studentDetails.comment : '',
          endtime: studentDetails.endtime ? studentDetails.endtime : '',
          outcome: studentDetails.outcome ? studentDetails.outcome : '',
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        },
        { merge: true }
      )
      .then(() => {
        return dispatch({ type: 'SUCCESS_ADDING_STUDENT_DETAILS_TO_SESSION' });
      })
      .catch((err) => {
        return dispatch({ type: 'ERROR_ADDING_STUDENT_DETAILS_TO_SESSION', err });
      });
  };
};
