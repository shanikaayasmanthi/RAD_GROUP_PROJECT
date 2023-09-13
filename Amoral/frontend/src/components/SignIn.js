import React from "react";
import "./SignIn.css";
function SignIn(){

    return (
        <>
            <div className="signIn">
                <h3>Sign In</h3>
                <div className="signInBlock">
                    <label htmlFor="">Name</label><input type="text" placeholder="Your name" required/>
                    <label htmlFor="">Email</label><input type="text" placeholder="Email Address" required/>
                    <label htmlFor="">Password</label><input type="text" placeholder="Password" required/>
                    <input type="button" value="Sign In"/>
                    <div className="newUsers">
                    <p>Don't have an account</p> <a href="">Sign Up</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;