import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import imgSrc from "../../images/pics";
import { toast } from "react-toastify";

//firebase
import { auth, db, app } from "../../firebase";
import {
  signInWithEmailAndPassword,
  updateProfile,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";

function Login(props) {
  const femail = useRef();
  const fpass = useRef();
  const navigate = useNavigate();

  //data
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const email = femail.current.value;
      const password = fpass.current.value;

      await signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          toast.success("succesfully login");
          navigate("/");
          // console.log(data)
        })
        .catch((err) => toast.error('login failed'));
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <span className="logo">React-chat-app</span>
        </div>

        <div className="form-wrapper">
          <div className="right">
            <div className="title">Login Here</div>
            <form autoComplete="off" onSubmit={submitHandler}>
              <div className="form-item">
                <label htmlFor="email">Enter your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  ref={femail}
                  required
                  className="form-input"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-item">
                <label htmlFor="name">password</label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  ref={fpass}
                  required
                  className="form-input"
                  placeholder="Enter  password"
                />
              </div>
              <div className="form-item">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-green"
                  required
                />
              </div>
            </form>
            <div className="block">
              <NavLink to={"/register"} className="btn-link">
                New user register...
              </NavLink>
            </div>
          </div>
          <div className="leftL">
            <img src={imgSrc.loginImg} alt="no-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
