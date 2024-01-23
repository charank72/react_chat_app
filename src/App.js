import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./AuthGuard/ProtectedRoute";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Home from "./component/default/Home";
import Pnf from "./component/default/Pnf";

function App(props) {
  return (
    <BrowserRouter>
    <ToastContainer autoClose='4000' position={'top-left'} />
      <Routes>
        <Route element={<ProtectedRoute/>}>
          <Route path={"/"} element={<Home />} />
        </Route>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/*"} element={<Pnf />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
