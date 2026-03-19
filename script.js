// Firebase SDK (CDN version for simple websites)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB8_iaikomXnvTanJ1l-3txwRntX-EMEo",
  authDomain: "goresolve-49f52.firebaseapp.com",
  projectId: "goresolve-49f52",
  storageBucket: "goresolve-49f52.appspot.com",
  messagingSenderId: "850006302718",
  appId: "1:850006302718:web:a1fc24f4821d0b91c7aaaf",
  measurementId: "G-9FVLEPMKF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// TEST FUNCTION (temporary)
window.testFirebase = async function () {
  try {
    await addDoc(collection(db, "test"), {
      message: "Firebase connected successfully",
      time: new Date()
    });
    alert("🔥 Firebase Working!");
  } catch (e) {
    console.error(e);
    alert("❌ Firebase Error");
  }
};
