import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, provider} from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {

    const [{}, dispatch] = useStateValue();
    const signIn = () => {
        // provider exported from firebase as a google authentication provider
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message)); 
    };

    return (
        <div className = "login">
            <div className = "login__container">
                <img 
                    src = "https://media-exp1.licdn.com/dms/image/C4D0BAQGV22ZUiMZUXQ/company-logo_200_200/0?e=2159024400&v=beta&t=J41QMPpMEhet0IdbMAKuQ1MRCupUCjTOZP7Ve11x7Hk"
                    alt = ""
                />
                <div className = "login__text">
                    <h1>Group Chat Sign in..</h1>
                </div>

                <Button type = "submit" onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
            
        </div>
    )
}

export default Login
