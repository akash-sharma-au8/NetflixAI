import {React, useState, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from './Header';
import { validateEmail, validatePassword, validateUserName } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase'

const Login = () => {

    const navigate = useNavigate()
    const[isSignedIn, setIsSignedIn] = useState(true)
    const [email, setEmail] =useState("");
    const [password, setPasssword] =useState("");
    const [userName, setUserName] =useState("");
    const [error, SetError] = useState("")
    const[emailError,setEmailError] =useState(null)
    const[passwordError,setPassswordError] =useState(null)
    const[userNameError,setUserNameError] =useState(null)

    console.log(email)
    const handleClick = ()=>{
        setEmailError("")
        setPassswordError("")
        setUserNameError("")
        
        if(isSignedIn){
            if(validateEmail(email, setEmailError) && validatePassword(password, setPassswordError)){
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        if(user){
                            alert("Login Successful")
                            navigate("/browse")
                        }
                        console.log(user)
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        SetError(errorMessage)
                    });
                setEmail("")
                setPasssword("")
            }
        }
        else{
            if(validateEmail(email, setEmailError ) && validatePassword(password, setPassswordError) && validateUserName(userName, setUserNameError)){
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                        if(user){
                            alert("SignUp Successful")
                            setIsSignedIn(true)
                        }
                        console.log(user)
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        SetError(errorMessage)
                        // ..
                    });
                
               
                setEmail("")
                setPasssword("")
                setUserName("")
            }
        }
        
    };

    const handleToggleSignIn = ()=>{
        SetError('')
        setIsSignedIn(!isSignedIn)
    };

    return (
        <div>
            <Header className="absolute" />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="login-image" />
            </div>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleClick()
            }} 
            className=' absolute bg-black p-12 mx-auto left-0 right-0 w-3/12 my-36 text-white bg-opacity-80 rounded-md'>

                <h1 className='text-4xl mb-12'>{ isSignedIn ? "Sign In" : "Sign Up"}</h1>
                {error && <span className='text-red-700'>{error}</span>}
                {
                !isSignedIn &&  
                    <>
                        <input value= {userName} onChange = {(e) =>
                        {
                         setUserName(e.target.value)
                         validateUserName(e.target.value,setUserNameError )
                        }} 
                        type="text" placeholder='Full Name'
                        className='p-2 my-2 w-full rounded bg-gray-700' />
                        {userNameError && <span className='text-red-700'>{userNameError}</span>}    
                    </>   
                }   

                
                <input value={email} onChange = {(e) => 
                { 
                    setEmail(e.target.value)
                    validateEmail(e.target.value, setEmailError)
                }} 
                type="email" placeholder={isSignedIn ? 'Email address' : "UserName"}
                    className='p-2 my-2 w-full rounded bg-gray-700' />
                {emailError && <span className='text-red-700'>{emailError}</span>}

                <input value={password} onChange = {(e) => {
                    setPasssword(e.target.value)
                    validatePassword(e.target.value, setPassswordError) 
                }} type="password" placeholder='Password'
                    className='p-2 my-2 w-full rounded bg-gray-700' />
                {passwordError && <span className='text-red-700'>{passwordError}</span>} 

                <button type="submit" className='p-2 my-3 bg-red-700 w-full rounded '> {isSignedIn ? "Sign In" : "Sign Up" } </button>

                <p className='cursor-pointer' onClick={handleToggleSignIn}>{isSignedIn ? "New to Netflix? Sign up now." : "Already A User? Sign In now"}</p>

            </form>
        </div>
    )
}

export default Login