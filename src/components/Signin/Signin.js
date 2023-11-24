import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Home/Navigation/Nav';
import Toggle from '../Shared/PasswordToggle/Toggle';
import './Signin.css';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import Aos from 'aos';
import 'aos/dist/aos.css';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Signin = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const [passInput, toggleIcon] = Toggle()

    return (
        <div>
            <Navigation></Navigation>
            <div className='bg-img'>
                <div className='content'>
                    <h2>Create new account</h2>
                    <form action="">
                        <div className='field'>
                            <span className='fa fa-user'></span>
                            <input type="text" name="" required placeholder='Email or Phone' id="" />
                        </div>
                        <div className='field space'>
                            <span className='fa fa-lock'></span>
                            <input className='pass' required type={passInput} name="" placeholder='Set new password' id="" />
                            <span className='show'>{toggleIcon}</span>
                        </div>
                        <div className='field space'>
                            <input type="submit" value="Sign in" />
                        </div>
                        <div className='another-login'>
                            Or sign-in with
                        </div>
                        <div className='link-btn'>
                            <div className='fb-btn'>
                                <i className='fab fa-facebook-f'></i><span>Continue with Facebook</span>
                            </div>
                        </div>
                        <div className='link-btn'>
                            <div className='google-btn'>
                                <i className='fab fa-google'></i><span>Continue with Google</span>
                            </div>
                        </div>
                        <div className='text'>
                            <p>Already have an account? <a href="/signup">Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Signin;