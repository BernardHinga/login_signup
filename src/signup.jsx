import React from "react";

export default function Signup() {
    return(
        <div className="signup">
            <label>FirstName</label>
            <input type='text' />
            <label>LastName</label>
            <input type='text' />
            <label>UserName</label>
            <input type='text' />
            <label>E-Mail</label>
            <input type='email' />
            <label>Password</label>
            <input type='password' />
            <label>Repeat Password</label>
            <input type='password' />

            <button>Sign Up</button>
        </div>
    );
}