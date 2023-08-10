// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAi1AmnDgFRgzryAXXWRmzuKONyUJDfuDc',
	authDomain: 'portfolio2023-c1761.firebaseapp.com',
	projectId: 'portfolio2023-c1761',
	storageBucket: 'portfolio2023-c1761.appspot.com',
	messagingSenderId: '954024629004',
	appId: '1:954024629004:web:a4c4abfbd2c55a09f3af29',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
//initialize storage and firestore
const db = getFirestore(app)
const storage = getStorage(app)
export { db, storage }
export default app
