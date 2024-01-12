import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Home from "./component/default/Home";
import Pnf from "./component/default/Pnf";


function App(props){
  return(
    <Home/>
  )
}
export default App