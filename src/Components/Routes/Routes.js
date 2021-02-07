
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from '../RegisterPage/LoginPage';
import Register from '../RegisterPage/Register';
import Screen from '../RegisterPage/Screen'


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
       
        <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/cadastro">
          <Register/>
          </Route>
       
      </Switch>
    </BrowserRouter>
  );
}

