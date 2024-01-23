import React from "react";
import { useState } from "react";
import { Navigate, NavLink,useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import imgSrc from "../../images/pics";

//firebase
import {auth,db} from '../../firebase'
import {createUserWithEmailAndPassword,updateProfile,sendEmailVerification} from 'firebase/auth'
import {doc,setDoc} from 'firebase/firestore'

function Register(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    pass: "",//create
  });
  //navigate
    const navigate=useNavigate()
  //handler
  const readData = async (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log("user", user);

      let email=user.email
      let password=user.pass
      //store creds in authentication
      const res=await createUserWithEmailAndPassword(auth,email,password)/* .then(res=>{
        res.sendEmailVerification()
        .then(res=>{
          toast.success("suucess")
        }).catch(err=> toast.error('error'))
      }).catch(err=>toast.error(err))
 */
      //store the users data in firestore
      await setDoc(doc(db,"users",res.user.uid),{
        uid:res.user.uid,
        displayName:user.name,
        email,
        photoURL:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
      })
      //create empty chat object in chat document of the registered user
      await setDoc(doc(db,"userChats",res.user.uid),{})

      
      
      toast.success('user registered succesfully')
      
      navigate('/login')
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <span className="logo">React-chat-app</span>
        </div>

        <div className="form-wrapper">
          <div className="left">
            <img src={imgSrc.signUpImg} alt="no-image" />
          </div>
          <div className="right">
            <div className="title">Register Here</div>
            <form autoComplete="off" onSubmit={submitHandler}>
              <div className="form-item">
                <label htmlFor="name">Enter your name</label>
                <input
                  type="text"
                  value={user.name}
                  onChange={readData}
                  name="name"
                  id="name"
                  placeholder="Enter name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-item">
                <label htmlFor="email">Enter your email</label>
                <input
                  type="email"
                  onChange={readData}
                  value={user.email}
                  name="email"
                  id="email"
                  required
                  className="form-input"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-item">
                <label htmlFor="name">password</label>
                <input
                  type="password"
                  value={user.pass}
                  onChange={readData}
                  name="pass"
                  id="pass"
                  required
                  className="form-input"
                  placeholder="Enter  password"
                />
              </div>
              <div className="form-item">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-green"
                  required
                />
              </div>
            </form>
            <div className="block">
              <NavLink to={"/login"} className="btn-link">
                Already registered login here
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
