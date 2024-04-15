import React ,{useEffect}from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {auth} from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { onAuthStateChanged } from "firebase/auth";
import{useDispatch} from 'react-redux';
import {addUser, removeUser} from '../utils/userSlice';
import { NetflixLogo } from '../utils/constants';



const Header = () => {
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
   const unsubscribe = onAuthStateChanged (auth, (user) => {
      if (user) {
      const {uid, displayName, email, photoURL} = user
      navigate("/browse")
      dispatch(addUser({uid,email, displayName, photoURL}))
      } else {
        dispatch(removeUser())
        navigate("/")
      }
      });
      
      // Unsubscribe when component unmounts
      return () => unsubscribe();
  },[]);

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute w-full bg-gradient-to-t from-transparent to-black p-2 z-10 flex justify-between'>
        <img className='w-44' src= {NetflixLogo} alt="logo"/>
        {user &&(
          <div className='flex p-4'>
            <img className='w-12 mr-1 rounded-sm' src= {user.photoURL}  alt= "profilePhoto" />
            
            <button className='font-bold text-white' onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        )}
    </div>
  )
}

export default Header