import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyBnvf9a41B9TNQQhKYhqt40IedLujFwe8k",
        authDomain: "origo-postbox.firebaseapp.com",
        databaseURL: "https://origo-postbox.firebaseio.com",
        projectId: "origo-postbox",
        storageBucket: "origo-postbox.appspot.com",
        messagingSenderId: "97666138045",
        appId: "1:97666138045:web:1d5b5c67a5626fb8fc9cd4",
        measurementId: "G-12ECZKMEWX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase; 
