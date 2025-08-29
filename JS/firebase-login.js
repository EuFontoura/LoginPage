import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZCOfaEVJNKKXHadTc9oZzzATRGX-cGPU",
  authDomain: "loginpage-aa71f.firebaseapp.com",
  projectId: "loginpage-aa71f",
  storageBucket: "loginpage-aa71f.firebasestorage.app",
  messagingSenderId: "185428754124",
  appId: "1:185428754124:web:25e555fb88fbf3a71f0c69",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    alert("Login realizado com sucesso: " + user.email);
  } catch (error) {
    alert("Erro no login: " + error.message);
  }
});
