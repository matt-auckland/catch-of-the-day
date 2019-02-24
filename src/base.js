import Rebase from 're-base';
import Firebase from 'firebase';

const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyAcQA7_wTXYAMVBCMV0QzHSRx3ViXLHsbA',
  authDomain: 'catch-of-the-day-d2927.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-d2927.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

// thhis is the default export

export default base;
