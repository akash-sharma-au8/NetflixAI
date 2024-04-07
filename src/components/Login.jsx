import {React, useState} from 'react'
import Header from './Header'


const Login = () => {

    const[isSignedIn, setIsSignedIn] = useState(true)

    const handleToggleSignIn = ()=>{
        setIsSignedIn(!isSignedIn)
    }
    return (
        <div>
            <Header className="absolute" />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="login-image" />
            </div>
            <form className=' absolute bg-black p-12 mx-auto left-0 right-0 w-3/12 my-36 text-white bg-opacity-80 rounded-md'>

                <h1 className='text-4xl mb-12'>{ isSignedIn ? "Sign In" : "Sign Up"}</h1>

                {
                !isSignedIn &&     
                <input type="text" placeholder='Full Name'
                    className='p-2 my-2 w-full rounded bg-gray-700' />
                }   

                <input type="email" placeholder={isSignedIn ? 'Email address' : "UserName"}
                    className='p-2 my-2 w-full rounded bg-gray-700' />


                <input type="password" placeholder='Password'
                    className='p-2 my-2 w-full rounded bg-gray-700' />
                 

                <button type="submit" className='p-2 my-3 bg-red-700 w-full rounded '> {isSignedIn ? "Sign In" : "Sign Up" } </button>

                <p className='cursor-pointer' onClick={handleToggleSignIn}>{isSignedIn ? "New to Netflix? Sign up now." : "Already A User? Sign In now"}</p>

            </form>
        </div>
    )
}

export default Login