import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyCobNforWHX5_MBFj5Zfs0bE8_-x9D3r50",
  authDomain: "attendance-taking-54122.firebaseapp.com",
  projectId: "attendance-taking-54122",
  storageBucket: "attendance-taking-54122.appspot.com",
  messagingSenderId: "1091601408850",
  appId: "1:1091601408850:web:237540aa36de483308108b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();