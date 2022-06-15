import React, { useContext, useState } from 'react';
import './Login.css';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';
// import google from '../../product-images/Group 573.png'
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useLocation, useNavigate } from 'react-router-dom';
import { userContex } from './../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import swal from 'sweetalert';



const app = initializeApp(firebaseConfig);
const Login = () => {
  let location = useLocation();
  let naviget = useNavigate();
  let { from } = location.state || { from: { pathname: "/" } };

  const { login } = useContext(userContex);
  const [logedInUser, setLogedInUser] = login

  const [newUser, setNewUser] = useState(true);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    succes: ''
  });

  const handleBlur = (event) => {
    let isFormValid = true;
    if (event.target.name === 'email') {
      isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === 'password') {
      let isPassValid = event.target.value.length > 6;
      let isPassHasNumber = /\d{1}/.test(event.target.value);
      isFormValid = isPassValid && isPassHasNumber;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo)
    }

  }

  const handleSubmit = (e) => {
    const auth = getAuth();

    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          const { displayName, email, } = res.user;
          const signInUser = { name: displayName, email };
          setLogedInUser(signInUser)
          naviget(from)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          const userError = { ...user };
          userError.error = errorCode;
          setUser(userError);
        });
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          res.user && swal({
            title: `Hi ${res.user.displayName},`,
            text: "Thanks for signing up here!",
            icon: "success",
            button: "ok",
          });
          const { displayName, email } = res.user;
          const signInUser = { name: displayName, email };
          setLogedInUser(signInUser)
          console.log(signInUser);
          naviget(from)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          const userError = { ...user };
          userError.error = errorCode;
          setUser(userError);
        });
    }
    e.preventDefault()
  }

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        result.user && swal({
          title: `Hi ${result.user.displayName},`,
          text: "Thanks for signing up here!",
          icon: "success",
          button: "ok",
        });
        sessionStorage.setItem('token', token)
        const { displayName, email, photoURL } = result.user;
        sessionStorage.setItem('email', email)
        sessionStorage.setItem('image', photoURL)
        const signInUser = { name: displayName, email: email, image: photoURL };
        setLogedInUser(signInUser);
        naviget(from)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        {newUser ? <h3 className='p-md-2'>Create an account</h3> : <h3 className='p-md-2'>Login </h3>}
        {newUser && <input onBlur={handleBlur} type="text" name='name' placeholder='Name' />}
        <input onBlur={handleBlur} type="email" name='email' placeholder='Email' />
        <input onBlur={handleBlur} type="password" id='pass1' name="password" placeholder='Password' />
        {newUser && <input onBlur={handleBlur} type="password" id='pass2' name="password" placeholder='confirm Password' />}
        {
          newUser ? <div className="create-account mb-0">
            <input type="submit" value="Create an account" />
            <div className="error">{user.error}</div>
            <p>Already have an account? <input className='fw-bold p-0' onClick={() => setNewUser(false)} type="submit" value="Login" /></p>
          </div> : <div className="login-account">
            <input type="submit" value="Login" />
            <div className="error">{user.error}</div>
            <p>Dont have an account? <input onClick={() => setNewUser(true)} type="submit" className='fw-bold' value="Create an account" /></p>
          </div>
        }

      </form>
      <h4 className='pt-md-2'>Or</h4>
      <div onClick={handleGoogleLogin} className="google-login bg-danger text-white p-2 d-flex align-items-center">
        <FontAwesomeIcon icon={faGoogle} />
        <button className='bg-danger text-white'>Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;