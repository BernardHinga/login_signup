import React from "react";
import './style.css'

export default function Login() {
    return (
        <div className="register">
            <div className="column">
                <label>UserName</label>
                <input type='text' />
                <label>Password</label>
                <input type='password' />

                <button>Log In</button>
            </div>
            <div className="column">
                <label>UserName</label>
                <input type='text' />
                <label>Password</label>
                <input type='password' />

                <button>Log In</button>
            </div>

        </div>
    );
}