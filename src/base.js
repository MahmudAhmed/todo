import firebase from 'firebase/app';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAYBK-Ipxh_Iif98xu5AFFm9QJhzWzQKDk",
    authDomain: "todoapp-b01b7.firebaseapp.com",
    projectId: "todoapp-b01b7",
    storageBucket: "todoapp-b01b7.appspot.com",
    messagingSenderId: "231109706452",
    appId: "1:231109706452:web:5bbd249c3c2c16ce24b141"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = firebase.storage();