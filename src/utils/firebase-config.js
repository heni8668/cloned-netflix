import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB60EiaxAH8MLzb5AgePUy-ESUzaZM2raA",
  authDomain: "netflix-project-bcac2.firebaseapp.com",
  projectId: "netflix-project-bcac2",
  storageBucket: "netflix-project-bcac2.appspot.com",
  messagingSenderId: "453029450934",
  appId: "1:453029450934:web:6639bcddc521c7e51c8217",
  measurementId: "G-0NNXKP8Y84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);