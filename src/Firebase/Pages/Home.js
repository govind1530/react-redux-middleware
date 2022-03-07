import React from "react";
import firebase from "firebase/compat/app";
// import  "firebase/compat/auth";
import { getAuth, signOut } from "firebase/auth";
import { UserContext } from "../Context/Context";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
    const auth = getAuth();
  const context = React.useContext(UserContext);
  const logoutUser = () => { 
    context.setUser(null);
 
signOut(auth).then((res)=>{
    console.log(res)
    toast("success logout", {
        type: "success",
      });
}).catch((err)=>{
    console.log(err)
    toast("failed logour", {
        type: "error",
      });
})
  };
  if(!context?.user?.udid){
    return <Navigate to="/signin" />;
  }
  return (
    <div>
      Welcome {context.user?.email}
      <button onClick={() => logoutUser()}>logout</button>
    </div>
  );
};

export default Home;
