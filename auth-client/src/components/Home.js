import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props){
    
    return(
        <div>
            <h1>Welcome to ClimateView home page!</h1>

                
            <Link to="/signup"><button>SignUp</button></Link>
        </div>
    );
}