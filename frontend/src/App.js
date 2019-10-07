import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import firebase from './initFirebase'; 
import Login from './Login'; 
import Skra from './Skra'; 
import Sendingar from './Sendingar'; 


const App= ()=> {

  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({}); 
  const [buisKey, setBuisKey] = useState(""); 
  const signIn = ()=>{
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user=>{
        console.log("User logged in");
        if(user){
            setIsLoggedIn(true); 
            fetch('http://localhost:3001/users') //nota csurf! 
            .then(r=>r.json())
            .then((res)=>{
            res.forEach((origoUser)=>{
              if(origoUser.email === user.user.email){
                setUser(origoUser)
                }
              })
            })
            .catch(err=>console.log(err));
        }
    })
    .catch(function(error) {
        console.log(error);
    });
  }
  const logOut = ()=>{
    firebase.auth().signOut()
    .then(function() {
        setIsLoggedIn(false);
        console.log("User logged out"); 
      })
    
      .catch(function(error) {
        // An error happened.
      });
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            {isLoggedIn?
            <Skra logOut={logOut} user={user} setBuisKey={setBuisKey}/>
            :"Þú ert ekki skráð/ur inn eða hefur slegið inn vitlaust notendanafn eða lykilorð"}
          </Route>
          <Route path="/sendingar">
            {isLoggedIn?
            <Sendingar buisKey={buisKey}/>
            :"Þú ert ekki skráð/ur inn eða hefur slegið inn vitlaust notendanafn eða lykilorð"}
          </Route>
          <Route path="/">
            <Login LogIn={signIn} setEmail={setEmail} setPassword={setPassword}/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
