import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCFKTKZ0sZdA8_UrTuQGXPz4qivt7OkCR0",
    authDomain: "marioplan-network.firebaseapp.com",
    databaseURL: "https://marioplan-network.firebaseio.com",
    projectId: "marioplan-network",
    storageBucket: "marioplan-network.appspot.com",
    messagingSenderId: "1050025860164",
    appId: "1:1050025860164:web:8f3e93b40b701a06cfb011",
    measurementId: "G-9T6VYXZ7F7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timeStampsInSnapshots: true})

export default firebase