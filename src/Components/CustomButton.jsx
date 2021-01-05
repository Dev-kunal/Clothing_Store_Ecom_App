import React from 'react'
import "../Components/formInput.css";

function CustomButton(props) {
    return (
        <>
            <button onClick={props.onClick} type={props.type} className={props.googleSignIn?'google-sign-in':'custom-btn'} >{props.children}   </button>
        </>
    )
}

export default CustomButton
