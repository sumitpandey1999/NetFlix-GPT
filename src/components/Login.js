import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

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

        <form action="" className='absolute w-3/12 my-36 mx-auto right-0 left-0 p-12 bg-black text-white bg-opacity-80'>
          <h2 className='font-bold text-2xl text-white pr-44 pb-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h2>
          {
            !isSignInForm && (
              <>
                <input
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
          <input type="text" placeholder='Email  or Phone Number' className='w-full px-5 py-2 my-3 rounded bg-gray-950 border' />
          <input type="password" placeholder='Password' className='w-full px-5 py-2 my-3 rounded bg-gray-950 border' />
          <button className='w-full px-5 py-2 my-3 rounded bg-red-600 font-bold' >{isSignInForm?"Sign In": "Sign Up"}</button>
          <p className='font-bold text-white pr-24 mt-4 cursor-pointer' onClick={handleSignInToggle}>{isSignInForm?"New User? Sign Up here":"Already Registered? Sign In here"}</p>
        </form>

      </div>
    </div>
  )
}

export default Login
