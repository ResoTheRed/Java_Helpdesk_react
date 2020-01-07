import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

import { firebaseConfig } from '../environments/firebase.config';

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;