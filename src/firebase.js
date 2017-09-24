import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDZkyVy7Csawr9rKbjFGs4ydX9OClu81-g",
    authDomain: "goalcoach-31dd2.firebaseapp.com",
    databaseURL: "https://goalcoach-31dd2.firebaseio.com",
    projectId: "goalcoach-31dd2",
    storageBucket: "",
    messagingSenderId: "764145993213"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');