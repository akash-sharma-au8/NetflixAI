export const validateEmail = (email, setEmailError) => {
        if(email && email.length>0){
            const isEmail  = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(email)
            if(!isEmail){
                setEmailError('Email is not valid')
            }
            else{
                setEmailError("")
            }
            return isEmail
        }
        else{
            setEmailError('Please Enter the email');
            return false
        }
}

export const validatePassword = (password, setPasswordError) => {
    if(password && password.length>0){
        const isPassword  = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)
        if(!isPassword){
            setPasswordError('Password is not valid')
        }
        else{
            setPasswordError("")
        }
        return isPassword
    }
    else{
        setPasswordError('Please Enter the password')
        return false
    }
}
export const validateUserName = (userName, setUserNameError) => {
        if(userName && userName.length > 0 ){
            setUserNameError('')
            return true;
        }
        else{
            setUserNameError('Please enter the username')
            return false
        }
    }
