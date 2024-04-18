import React, { useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NetflixLogo } from '../utils/constants';
import useScroll from '../hooks/useScroll';
import { toogleChatGptSearchView } from '../utils/chatGptSlice';
import { SUPPORTED_LANG } from '../utils/languageConstants';
import { SelectUserLanguage } from '../utils/languageSlice';


const Header = () => {
  const user = useSelector(store => store.user)
  const searchView = useSelector(store => store.chatGptSearchView)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isScrolled = useScroll();
  const languageRef = useRef();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user
        navigate("/browse")
        dispatch(addUser({ uid, email, displayName, photoURL }))
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleChatGptClick = () => {
    dispatch(toogleChatGptSearchView())
  }

  const handleLanguageClick = (e) => {
    dispatch(SelectUserLanguage(languageRef.current.value))
  }

  return (
    <div className={`fixed top-0 left-0 w-full transition-all duration-1000 ${isScrolled > 0 ? 'bg-black' : 'bg-gradient-to-t from-transparent to-black'} px-14 p-2 h-16 z-20 flex justify-between`}>
      <Link to="/"><img className='w-32' src={NetflixLogo} alt="logo" /></Link>
      {user && (
        <div className='flex p-1'>
          { searchView &&
            <select ref={languageRef} onClick={(e) => handleLanguageClick(e)} className='mr-4 p-1 bg-black rounded-sm text-center text-white border cursor-pointer'>
              {SUPPORTED_LANG.map((lang) => {
                return (<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
              })}
            </select>
          }
          <button onClick={handleChatGptClick} className='bg-red-800 mr-5 rounded-md px-2 border-2'>{searchView ? "Home" : "GPT Search"}</button>
          <img className='w-12 mr-1 rounded-sm' src={user.photoURL} alt="profilePhoto" />

          <button className='font-bold text-white' onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header