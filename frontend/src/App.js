import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import ImageGrid from './components/ImageGrid/images';

function App() {
  return (
    <>
      <Navigation/>
        <Switch>
          <Route path="/login" component={LoginFormPage} />
          <Route path="/signup" component={SignupFormPage} />
          <Route exact path="/" component={ImageGrid} />
        </Switch>
    </>
  );
}

export default App;
