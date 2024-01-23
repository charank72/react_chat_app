import React, { useContext } from 'react'
import {Navigate,Outlet} from 'react-router-dom';
import Home from '../component/default/Home';
import { AuthContext } from '../Context/AuthContext';

function ProtectedRoute(props) {

  const context=useContext(AuthContext);
  const loginStatus=context.loginStatus
  const currentStatus=context.currentStatus
  return (
   loginStatus?<Outlet/>:<Navigate to={'/login'}/>
  )
}

export default ProtectedRoute