import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react';
import { validateCredentials } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

 
  const nevigate = useNavigate()
  const dispatch = useDispatch()

  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState("")

  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)
  //  console.log(email)

  const handleButtonClick = () => {
    // Validate the Form Data
    // console.log(email.current.value)
    const message = validateCredentials(email.current.value, password.current.value)
    setErrorMessage(message)
    if (message) return

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;


          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            // ...
            const { email, uid, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ email: email, uid: uid, displayName: displayName, photoURL:photoURL }))
            nevigate("/Browse")
          }).catch((error) => {
            // An error occurred
            // ...
            const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)

          });




          console.log(user)
          // const {email, uid, displayName} = user;
          // dispatch(addUser({email: email, uid:uid , displayName:displayName}))
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)

          // ..
        });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          nevigate("/Browse")


        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        });
    }

  }

  const handleSignInToggle = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className=''>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg
" alt="background"
          className='absolute'
        />

        <form
          onSubmit={(e) => e.preventDefault()}
          action="" className='absolute w-3/12 my-36 mx-auto right-0 left-0 p-12 bg-black text-white bg-opacity-80'>
          <h2 className='font-bold text-2xl text-white pr-44 pb-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h2>
          {
            !isSignInForm && (
              <>
                <input
                  ref={name}
                  type="text"
                  placeholder='Full Name'
                  className='w-full px-5 py-2 my-3 rounded bg-gray-950 border'
                />
                <input
                  type="text"
                  placeholder='Age'
                  className='w-full px-5 py-2 my-3 rounded bg-gray-950 border'
                />
              </>
            )
          }
          <input
            ref={email}
            type="text" placeholder='Email  or Phone Number' className='w-full px-5 py-2 my-3 rounded bg-gray-950 border' />

          <input
            ref={password}
            type="password" placeholder='Password' className='w-full px-5 py-2 my-3 rounded bg-gray-950 border' />
          <p className='text-red-700 font-semibold'>{errorMessage}</p>
          <button
            className='w-full px-5 py-2 my-3 rounded bg-red-600 font-bold'
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className='font-bold text-white pr-24 mt-4 cursor-pointer' onClick={handleSignInToggle}>{isSignInForm ? "New User? Sign Up here" : "Already Registered? Sign In here"}</p>
        </form>

      </div>
    </div>
  )
}

export default Login
