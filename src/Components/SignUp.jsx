import React,{useState} from 'react';
import FormInput from "../Components/FormInput";
import CustomButton from "../Components/CustomButton";

function SignUp() {
    const [formData, setformData] = useState({
        username: "",
        email: "",
        password: "",
        confirmpass:""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setformData({ [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setformData({ username: '', email: "", password: "",confirmpass:"" });
    }
    return (
        <div className="form">
            <h3 style={{ fontWeight: "bold" }}>I do not have an account..!</h3>
            <span >
                {" "}
            Sign Up with Username email and password
          </span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    label="Username"
                    onChange={handleChange}
                    name="username"
                    value={formData.username}
                />
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
                <FormInput
                    type="password"
                    onChange={handleChange}
                    label="Confirm Password"
                    name="confirmpass"
                    value={formData.confirmpass}
                />
                <CustomButton type="submit">Sign-Up</CustomButton>
            </form>
        </div>
    );
}
    


export default SignUp;























