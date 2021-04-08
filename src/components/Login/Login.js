import React, { useContext, useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './LoginManager';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';

import firebase from "firebase/app";

import "firebase/auth";

const Login = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyBw20jp56qsl8Qhy0JP6oNeg-AV3n1uV1w",
        authDomain: "carmia-b18f4.firebaseapp.com",
        projectId: "carmia-b18f4",
        storageBucket: "carmia-b18f4.appspot.com",
        messagingSenderId: "753907942435",
        appId: "1:753907942435:web:5cb116c5e94bd807df5d96"
    };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [user, setUser] = useState({
        // isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const googleSignIn = () => {
        // handleGoogleSignIn()
        //     .then(res => {
        //         setUser(res);
        //         setLoggedInUser(res);
        //         if(redirect){
        //             history.replace(from);
        //         }
        //     })
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, photoURL, email } = result.user;
                const signedInUser = {
                    // isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                    // success: true
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

            });
    }


    return (
        <div className="login-area">
            <div className="form-area">
                <h3>Create Account</h3>
                <input className="input-field" type="text" placeholder="Name" name="name" id="" />
                <input className="input-field" type="text" placeholder="Email" name="email" id="" />
                <input className="input-field" type="password" placeholder="Password" name="password" id="" />
                <input className="input-field" type="password" placeholder="Confirm Password" name="confirmPassword" id="" />
                <input className="submit-button" type="submit" value="Create Account" />
                <p>Already Registered <strong>Login</strong></p>
                <button className="social-login-button" onClick={googleSignIn}><FontAwesomeIcon className="social-icon" icon={faGoogle} /> Sign in With Google</button>
                <button className="social-login-button"><FontAwesomeIcon className="social-icon" icon={faFacebook} /> Sign in With Facebook</button>
            </div>
        </div>
    );
};

export default Login;