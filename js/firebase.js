// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

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
const db = getFirestore(app);

const formInfo = document.querySelector(".form_info");
const Gender = formInfo.querySelector(".gender_select");
const Age = formInfo.querySelector(".age_select");
const Email = formInfo.querySelector(".inp_email");
const btnContact = formInfo.querySelector(".btn_contact");

formInfo.addEventListener("submit", async(e) => {
    e.preventDefault();
    try {
        const docRef = await addDoc(collection(db, "waitings"), {
          Gender: `${Gender.value}`,
          Age: `${Age.value}`,
          Email: `${Email.value}`
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
})