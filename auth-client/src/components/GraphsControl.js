import React from 'react'
import { Link } from 'react-router-dom';






export default function GraphsControl(){
    return(
        <div className="graphs-control">
            <Link to="/V1-V3"><button>Visualization 1-3</button></Link>
            <Link to="/V4-V5"><button>Visualization 4-5</button></Link>
        </div>            
    );
}