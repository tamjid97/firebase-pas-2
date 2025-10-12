import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./App.css";
import { auth } from "./firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

function App() {
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("User Info:", result.user);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <>
      <div>
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      </div>
    </>
  );
}

export default App;
