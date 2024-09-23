import React, { useState } from 'react';
import SignIn from './Signin';
import SignUp from './Signup';
import '../assets/styles/Container.css';

const Container = () => {
    const [isSignInActive, setIsSignInActive] = useState(true);

    const toggle = () => {
        setIsSignInActive(!isSignInActive);
    };

    return (
        <div className={`container ${isSignInActive ? '' : 'active'}`} id="container">
            {isSignInActive ? <SignIn toggle={toggle} /> : <SignUp toggle={toggle} />}
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="hidden" onClick={toggle} id="login">Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start your journey with us</p>
                        <button className="hidden" onClick={toggle} id="register">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container;