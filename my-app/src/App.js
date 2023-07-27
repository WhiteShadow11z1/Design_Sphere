import React from "react";
import Login from "./scenes/LoginPage/Login";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./scenes/HomePage/Home";
import SignUp from "./scenes/SignUp/SignUp";
import ProfilePage from "./scenes/ProfilePage/ProfilePage";
import AuthPage from "./scenes/Authentication/Auth";
import { useSelector } from "react-redux";


function App() {
  const user = useSelector((state) => state.AuthReducer.authData);
  return(
    <div>
        <Routes>
          <Route path = "/" element = {user ? <Navigate to = "home" /> : <Navigate to = "auth" />} />
          <Route path = "/home" element = {user ? <Home /> : <Navigate to = "../auth" /> } />
          <Route path = "/auth" element = {user ? <Navigate to = "../home" /> : <AuthPage /> } />
          <Route path = "/profile" element = {<ProfilePage /> } />
        </Routes>
    </div>
  );
}

export default App;
