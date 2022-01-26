import React from "react";
import './utils/css/style.css'

import image1 from './utils/media/bbb.png';

export default function Login() {
    return (
        <main>
            <div className="container form">
                <div className="row">
                    <div className="col-sm-12 col-lg-6 input_img">
                        <img src={image1} alt="bbb" />
                    </div>
                    <div className="col-sm-12 col-lg-6 input">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="E-mail" />
                        <input type="password" placeholder="Password" />
                        <button>Log In</button>
                    </div>
                </div>
                <div style={{textAlign: 'center', padding: '10px', margin: '10px', color: 'rgb(224,224,224)'}}>
                    Already have an account ? Log In
                </div>
            </div>
        </main>
    );
}