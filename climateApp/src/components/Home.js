import React from 'react';
import './components.css'

export default function Home(props){
    
    return(
        <div>
            <div className="user-login-status">
            User login status: {props.userToken ? "Logged in" : "Logged out"}
            </div>
            <h1>Welcome to ClimateView home page!</h1>
        <div className="buttons-home">
            <a href="/signup" className="button button--signup">Sign up</a>
            <a href="/login" className="button button--login">Log in</a>
            {props.userToken && (<a href='/logout' className="button button--logout">Log out</a>)}
            {props.userToken && (<a href='/DeleteUser' className="button button--DeleteUser">Delete User</a>)}
        </div>
        </div>

    );
}