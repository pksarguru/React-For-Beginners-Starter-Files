import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCGkoJ9o_gBnqVq69c6qcN4HPHlAlVvM8Y",
  authDomain: "catch-of-the-day-pks.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-pks.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
