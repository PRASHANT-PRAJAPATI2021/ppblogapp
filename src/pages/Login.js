import React from 'react'
import {auth, provider} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

function Login({setIsAuth}) {

  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true)
      navigate("/") //this will redirect to homepage once we are logged in 
    });
  };


  return (
    <div className='loginPage'>
      <p>Sign in with google to continue</p>
      <button className='login-with-google-btn' onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  )
}

export default Login