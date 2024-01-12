import React from 'react'
import { NavLink } from 'react-router-dom';
import imgSrc from '../../images/pics';
function Register(props) {
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
            <div className="title">
              Register Here
            </div>
            <form autoComplete='off'>
              <div className="form-item">
                <label htmlFor="name">Enter your name</label>
                <input type="text" name='name'id='name' placeholder='Enter name' required className='form-input' />
              </div>

              <div className="form-item">
                <label htmlFor="email">Enter your email</label>
                <input type="email" name='email'id='email' required className='form-input'  placeholder='Enter email' />
              </div>

              <div className="form-item">
                <label htmlFor="name">password</label>
                <input type="password" name='pass'id='pass' required className='form-input'  placeholder='Enter  password' />
              </div>
              <div className="form-item">
                <input type="submit" value='Register' className='btn btn-green' required />
              </div>
            </form>
            <div className="block">
              <NavLink to={'/login'} className='btn-link'>Already registered login here</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register