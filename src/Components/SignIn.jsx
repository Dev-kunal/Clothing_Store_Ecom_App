import React, { useState } from "react";
import FormInput from "../Components/FormInput";
import CustomButton from "./CustomButton";
import {signInWithGoogle} from "../Firebase/Firebase.util";
import "../Components/formInput.css";


function SignIn() {

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
      setformData({[name]:value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    setformData({ email: "", password: "" });
  }
  return (
    <div  className="form">
      <h3 style={{ fontWeight: "bold" }}>I already have an account..!</h3>
      <span >
        {" "}
        Sign in with email and password
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          label="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <FormInput
          type="password"
          onChange={handleChange}
          label="Password"
          name="password"
          value={formData.password}
        />
        <CustomButton type="submit">Sign-In</CustomButton>       
        <CustomButton type="button" onClick={signInWithGoogle} googleSignIn>Sign-In with Google</CustomButton>
      </form>
    </div>
  );
}

export default SignIn;
