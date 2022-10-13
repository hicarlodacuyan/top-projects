import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const SignIn = ({ auth, user }) => {
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err));
  };

  return (
    <button className="text-slate-300 text-xs" onClick={signInWithGoogle}>
      Sign In
    </button>
  );
};

export default SignIn;
