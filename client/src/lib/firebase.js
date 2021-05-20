import firebase from 'firebase'

const firebaseConfig = {
	apiKey: "AIzaSyDFtmGu6Ur13SsyHXdABYubNrIK3qmGLZI",
	authDomain: "intern-579b5.firebaseapp.com",
	projectId: "intern-579b5",
	storageBucket: "intern-579b5.appspot.com",
	messagingSenderId: "345211754678",
	appId: "1:345211754678:web:ab1fac114ddee842f66e17",
	measurementId: "G-BQFQ637GBJ"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebase;