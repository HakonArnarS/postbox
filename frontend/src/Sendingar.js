import React from 'react';
import { Link } from "react-router-dom";
import Barcode from 'react-barcode';
import './App.scss';

const Sendingar = (props)=>{

    return(
        <div>
            <div>
                <Link to="/home"><button>Skrá sendingu</button></Link>
                <Link to="/sendingar"><button>Mínar sendingar</button></Link>
                <Link to="/"><button onClick={props.logOut}>Log Out</button></Link>
            </div>
            <div className="skraContainer">
                <h3>Hér koma sendingar!</h3>

                <br/>
                <Barcode value={props.buisKey} />

                
            </div>
            
        </div>
        
    )
}



export default Sendingar; 