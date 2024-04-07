export const validateEmail = (email, setEmailError) => {
        if(email && email.length>0){
            const isEmail  = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(email)
            if(!isEmail){
                setEmailError('Email is not valid')
                return isEmail
            }
            else{
                setEmailError("")
                return true
            }
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
            return false
        }
        else{
            setPasswordError("")
            return true;
        }
    }
    else{
        setPasswordError('Please Enter the password')
    }
}
export const validateUserName = (userName, setPasswordError) => {
        if(userName && userName.length > 0 ){
            setPasswordError('')
            return true;
        }
        else{
            setPasswordError('Please enter the username')
            return false
        }
    }
