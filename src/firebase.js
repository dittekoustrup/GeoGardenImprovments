import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyCZczsi1FcWr1W64qYxemQ9I4bAeu8D0AU",
    authDomain: "geo-garden.firebaseapp.com",
    projectId: "geo-garden",
    storageBucket: "geo-garden.appspot.com",
    messagingSenderId: "811667282253",
    appId: "1:811667282253:web:7dfc1535b218460ad87f04"
};

const app = initializeApp(firebaseConfig);