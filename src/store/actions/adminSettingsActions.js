import * as firebase from 'firebase/app';
export const addNewMentor = (mentorData) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    return firestore
      .collection('Mentor')
      .doc(mentorData.email)
      .set(
        {
          name: mentorData.name ? mentorData.name : '',
          email: mentorData.email ? mentorData.email : '',
          userName: mentorData.userName ? mentorData.userName : '',
          password: mentorData.password ? mentorData.password : '',
          semester: mentorData.semester ? mentorData.semester : '',
          year: mentorData.year ? mentorData.year : '',
          level: mentorData.level ? mentorData.level : '',
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        },
        { merge: true }
      )
      .then(() => {
        return dispatch({ type: 'SUCCESS_ADDING_NEW_MENTOR' });
      })
      .catch((err) => {
        return dispatch({ type: 'ERROR_ADDING_NEW_MENTOR', err });
      });
  };
};

export const updateMentor = (mentorData) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const mentorRef = firestore.collection('Mentor').doc(mentorData.email);
    return mentorRef
      .get()
      .then((doc) => {
        if (!doc.exists) {
          return dispatch({ type: 'ERROR_MENTOR_DOESNOT_EXISTS' });
        } else {
          return firestore
            .collection('Mentor')
            .doc(mentorData.email)
            .set(
              {
                semester: mentorData.semester ? mentorData.semester : '',
                year: mentorData.year ? mentorData.year : '',
                level: mentorData.level ? mentorData.level : '',
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
              },
              { merge: true }
            )
            .then(() => {
              return dispatch({ type: 'SUCCESS_UPDATING_MENTOR' });
            })
            .catch((err) => {
              return dispatch({ type: 'ERROR_UPDATING_MENTOR', err });
            });
        }
      })
      .catch((err) => {
        return dispatch({ type: 'ERROR_UPDATING_MENTOR', err });
      });
  };
};

export const updateClockSettings = (clockData) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    return firestore
      .collection('Settings')
      .doc('timer')
      .set(
        {
          sessionDuration: clockData.sessionDuration ? clockData.sessionDuration : 20,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        },
        { merge: true }
      )
      .then(() => {
        return dispatch({ type: 'SUCCESS_UPDATING_CLOCK_SETTINGS' });
      })
      .catch((err) => {
        return dispatch({ type: 'ERROR_UPDATING_CLOCK_SETTINGS', err });
      });
  };
};
