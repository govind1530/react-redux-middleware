import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Home from "./Home";
import Signin from "./SignIn";
import Signup from "./Signup";
import PageNotFound from "./PageNotFound";
import { UserContext } from "../Context/Context";
import firebaseConfig from "../Config";

firebase.initializeApp(firebaseConfig);
const App = () => {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
