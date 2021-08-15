
let fc, db;

fc = {
  apiKey: "AIzaSyCrFJinKpq0-r1A72DBoS8fa7brdvkWuTA",
  authDomain: "pencarian-akun-belajarid.firebaseapp.com",
  projectId: "pencarian-akun-belajarid",
  storageBucket: "pencarian-akun-belajarid.appspot.com",
  messagingSenderId: "559871619111",
  appId: "1:559871619111:web:6b043155eaa14ed7701e02",
  measurementId: "G-411GCJ45NN"
};

firebase.initializeApp(fc);
firebase.analytics();
db = firebase.firestore();