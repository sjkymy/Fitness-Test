// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDG6PFNHTesjUogdhzHOf81SLEfPzvqbMI",
authDomain: "firstproject-963fb.firebaseapp.com",
projectId: "firstproject-963fb",
storageBucket: "firstproject-963fb.appspot.com",
messagingSenderId: "46431411311",
appId: "1:46431411311:web:164b796dddaf97d8d3c19a"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

const formInfo = document.querySelector(".form_info");
const Gender = formInfo.querySelector(".gender_select");
const Age = formInfo.querySelector(".age_select");
const Email = formInfo.querySelector(".inp_email");
const btnContact = formInfo.querySelector(".btn_contact");

formInfo.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(Email.value)
})

const db = getFirestore(app);
