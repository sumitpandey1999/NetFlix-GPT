import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const user = useSelector((store)=>store.user);

 const nevigate = useNavigate()
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
   nevigate("/")
    }).catch((error) => {
      // An error happened.
      nevigate("/error")
    });
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black p-1 z-10 w-screen flex justify-between' >
      <img
        className='w-44'
        src="
https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix logo"
      />
{ user &&
      <div className='flex'>
        <img className='w-12 h-12 rounded-md my-3 mx-6' src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="User logo" />
        <button
          onClick={handleSignOut}
          className='border-b-2 rounded-md bg-red-700 my-4 px-2 text-white '>Sign Out</button>
      </div>}

    </div>
  )
}

export default Header
