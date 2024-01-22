import {initializeApp} from 'firebase/app'


//authenticaton
import{ getAuth} from 'firebase/auth'


//storage bucket

import {getStorage} from 'firebase/storage'
//firestore
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBpsrctMMOWrqtufX7akZ7vL-D4wKXOB1Q",
  authDomain: "react-chat-app-b8a1b.firebaseapp.com",
  databaseURL: "https://react-chat-app-b8a1b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-chat-app-b8a1b",
  storageBucket: "react-chat-app-b8a1b.appspot.com",
  messagingSenderId: "721171024162",
  appId: "1:721171024162:web:13aa49cccfa4708f2afd7b",
  measurementId: "G-HFR31H9FGW"
};

//firebase instance
export const app=initializeApp(firebaseConfig)

//auth instance

export const auth=getAuth()

//storage
export const store=getStorage()

//firestore
export const db=getFirestore()