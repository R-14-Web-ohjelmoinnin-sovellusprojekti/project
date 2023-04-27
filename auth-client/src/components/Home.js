import React from 'react';
import './components.css'

export default function Home(props){
    
    return(
        <div>
            <div>
            User login status: {props.userLoggedIn ? "Logged in" : "Logged out"}
            </div>
            <h1>Welcome to ClimateView home page!</h1>
        <div className="buttons-home">
            <a href="/signup" className="button button--signup">Sign up</a>
            <a href="/login" className="button button--login">Log in</a>
            <a href='/DeleteUser' className="button button--DeleteUser">Delete User</a>
        </div>
        </div>

    );
}