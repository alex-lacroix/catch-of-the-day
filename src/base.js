import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCaoixiVpWqov4QYCAemHMGeUZTSSvNq78",
  authDomain: "catch-of-the-day-alex-lac.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-alex-lac.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
