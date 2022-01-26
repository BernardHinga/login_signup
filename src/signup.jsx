import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
//css
import './utils/css/style.css'
//media
import image1 from './utils/media/logo1.png';
import image2 from './utils/media/logo2.png';

export default function Signup() {
    return (
        <main>
            <div className="container form">
                <div className="row">
                    <div className="col-sm-12 col-lg-5 logo" style={{ display: 'grid', placeItems: 'center' }}>
                        <MediaQuery minWidth={1000}>
                            <img src={image1} alt="Logo-lg" />
                        </MediaQuery>
                        <MediaQuery maxWidth={999}>
                            <img src={image2} alt="Logo-sm" />
                        </MediaQuery>
                    </div>
                    <div className="col-sm-12 col-lg-7 input">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="E-mail" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Repeat Password" />
                        <button>Sign Up</button>
                    </div>
                </div>
                <div style={{ textAlign: 'center', padding: '10px', margin: '10px', color: 'rgb(224,224,224)' }}>
                    Already have an account ? <Link to='/'>Log In</Link>
                </div>
            </div>
        </main>
    );
}