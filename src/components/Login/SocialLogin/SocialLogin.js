import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  let errorMessage = "";
  if (user) {
    navigate("/");
    console.log(user);
  }
  if (loading) {
    // return <Loading></Loading>;
  }
  if (error) {
    errorMessage = <p className="text-danger">Error: {error?.message}</p>;
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">Or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorMessage}
      <div className="d-inline-block pb-5">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-dark  d-block mx-auto my-3"
        >
          <FcGoogle />
          <span className="px-2">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
