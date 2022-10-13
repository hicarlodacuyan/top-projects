import { signOut } from "firebase/auth";

const SignOut = ({ auth, user }) => {
  const signOutWithGoogle = async () => {
    signOut(auth)
      .then(() => console.log("Sign Out Succesfully"))
      .catch((error) => console.log(error));
  };

  return (
    <img
      src={user.photoURL}
      alt="Account Profile"
      className="w-8 h-8 rounded-full hover:cursor-pointer"
      onClick={signOutWithGoogle}
    />
  );
};

export default SignOut;
