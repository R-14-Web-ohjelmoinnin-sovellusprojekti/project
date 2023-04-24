import React from 'react';
import { Link } from 'react-router-dom';
import './components.css'

export default function Home(props){
    
    return(
        <div>
            <h1>Welcome to ClimateView home page!</h1>
        <div class="buttons-home">
            <a href="/signup" class="button button--signup">Sign up</a>
            <a href="/login" class="button button--login">Log in</a>
        </div>
        </div>
    );
}