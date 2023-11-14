import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation/>
        <Switch>
          <Route path="/login" component={LoginFormPage} />
          <Route path="/signup" component={SignupFormPage} />
        </Switch>
    </>
  );
}

export default App;
