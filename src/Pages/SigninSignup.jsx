import React from 'react';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import "./signinsignup.css";


function SigninSignup() {
    return (
        <div className="signin-out">
        <SignIn />                      
        <SignUp />        
        </div>
    )
}

export default SigninSignup
