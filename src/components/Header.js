import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useEffect } from 'react';
import { LOGO_URL,} from '../utils/constants';




const Header = () => {

  const nevigate = useNavigate()
  const dispatch = useDispatch()
const userData = useSelector((store)=>store.user)

  useEffect(() => {
  const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { email, uid, displayName, photoURL } = user;
        dispatch(addUser({ email: email, uid: uid, displayName: displayName, photoURL: photoURL }))
         nevigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        nevigate("/")
      }
    });

    //Unsubscribe when component unmounts
    return()=> unsubscribe();

  }, [])


  const user = useSelector((store) => store.user);


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
        src={LOGO_URL} alt="netflix logo"
      />
      {user &&
        <div className='flex'>
          <img className='w-12 h-12 rounded-md my-3 mx-6' src={userData?.photoURL} alt="User logo" />
          <button
            onClick={handleSignOut}
            className='border-b-2 rounded-md bg-red-700 my-4 px-2 text-white '>Sign Out</button>
        </div>}

    </div>
  )

}

export default Header
