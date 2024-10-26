// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useCallback, useEffect, useState } from 'react';
import { getDatabase, onValue, ref, update} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkDS4WdeMT6yYh0_1SXldkNkuvZpxIbbE",
  authDomain: "cs-392-react-app.firebaseapp.com",
  databaseURL: "https://cs-392-react-app-default-rtdb.firebaseio.com",
  projectId: "cs-392-react-app",
  storageBucket: "cs-392-react-app.appspot.com",
  messagingSenderId: "673462212765",
  appId: "1:673462212765:web:1313f6f1799c7993379c74",
  measurementId: "G-TM4REJ7EBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};