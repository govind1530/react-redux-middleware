import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { UserContext } from "../Context/Context";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const context = React.useContext(UserContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        toast("something went wrong", {
          type: "error",
        });
      });
    console.log("sign up res", res?.user);
    if (res?.user?.uid) {
      context.setUser({ email: res.user.email, udid: res?.user?.uid });
    } else {
      toast("something went wrong", {
        type: "error",
      });
    }
  };

  if (context?.user?.udid) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password"
        />
        <button
          style={{ height: "20px", width: "100px", border: "1px solid red" }}
          type="submit"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
