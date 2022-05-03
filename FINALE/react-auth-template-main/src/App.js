import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import Forgot from "./components/views/Forgot";
import resetPassword from "./components/views/resetPassword";
import activate from "./components/views/activate";
import indexPage from "./components/views/indexPage";
import Profil from "./components/views/profil";
import reclamation from "./components/views/reclamations";
import suggestions from "./components/views/suggestions"
import Errors from "./components/views/Errors"
import Music from "./components/views/music"
import Play from "./components/views/playMusic"
import AllMusic from "./components/views/AllMusic"


import contact from "./components/views/contact"
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AuthContext } from "./reducers/auth";
import { useContext } from "react";

const Auth = () => {

  const history = useHistory();
  const dispatch = useDispatch();
   const [user2, setuser2] = useState(JSON.parse(localStorage.getItem('profile')));
  const [user, setuser] = useState(AuthContext._currentValue.user);

  console.log(AuthContext._currentValue.user)
  console.log(user)
  console.log(user2)


  return (
    <Router>
      <Switch>
      <Route exact path="/" component={ indexPage } />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/forgot-password' component={Forgot} />
        <Route path='/reset-password/:Passwordtoken' component={resetPassword} />
        <Route path='/Errors' component={Errors} />

        <Route path='/activate/:secretToken' component={activate} />
        {user2 && ( 
           <>
        <Route path='/Profil' component={Profil} />
        <Route path='/reclamation' component={reclamation} />
        <Route path='/suggestions' component={suggestions} />
        <Route path='/contact' component={contact} />
        <Route path='/music' component={Music} />
        <Route path='/AllMusic' component={AllMusic} />

        <Route path='/play/:id' component={Play} />


       </>
      )}         { console.log(user2)}

        
        {user2 ? <Profil />  : <Redirect to="/Errors"  component={Errors} />} 
         { console.log(user2)}
        
      </Switch>
    </Router>
  );
}

export default Auth;
