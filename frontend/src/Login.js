import React from 'react';
import { Link } from "react-router-dom";
// import firebase from './initFirebase'; 
// import Skra from './Skra';
import './App.scss';


const Login = (props)=>{
     
    

    return(
        <div className="loginForm">
            <h2>INNSKRÁNING</h2>
            
            <label htmlFor="email"></label>
            <input onChange={e=>props.setEmail(e.target.value)} className="inputLogin" name="email" id="email" type="text" placeholder="email" required></input>

            <label htmlFor="lykilorð"></label>
            <input onChange={e=>props.setPassword(e.target.value)} className="inputLogin" name="lykilorð" id="lykilorð" type="password" placeholder="Lykilorð" required></input>

                <Link to="/home"><button onClick={props.LogIn} className="btn1">Innskrá</button></Link>
            
            <button className="btn2">Rafræn skilríki</button>
            <a  href="./App.js" className="App-link">Búa til aðgang</a>
            
        </div>
        
    )
}



export default Login; 