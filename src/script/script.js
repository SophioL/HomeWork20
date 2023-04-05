
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";
  import { getDatabase, set , ref, get } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDh7Gdvl7g4LDvkjjOf_ctAOUhlqRZoMTM",
    authDomain: "authentication-app-8a27f.firebaseapp.com",
    databaseURL: "https://authentication-app-8a27f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "authentication-app-8a27f",
    storageBucket: "authentication-app-8a27f.appspot.com",
    messagingSenderId: "656694224339",
    appId: "1:656694224339:web:307ea5ef4968975d577b26"
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

  const SignIn = document.getElementById('SignIn');
    SignIn.addEventListener('click' , (e) => {
        e.preventDefault();
        const email = document.getElementById('exampleInputEmail1').value;
        const password = document.getElementById('exampleInputPassword1').value;
        signInWithEmailAndPassword(auth , email , password)
        .then((res) => {
            const user = res.user;
            console.log(user);
            localStorage.setItem('user' ,user.accessToken );
            localStorage.setItem('uid', user.uid); 
            const UserDAta = user.providerData[0]
            console.log(UserDAta);
            window.location.href = 'blog_post.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

    })
