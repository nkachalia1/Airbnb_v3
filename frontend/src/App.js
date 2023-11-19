import React from 'react';
import { BrowserRouter as Redirect, Link, HashRouter, Router, Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import ImageGrid from './components/ImageGrid/images';
import { Provider } from 'react-redux';
import ListingShow from './components/ListingShowPage';
// import ListingShowContainer from './frontend/src/components/listing_show/listing_show_container.js';
// import ListingFormContainer from './listing_form/listing_form_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ListingShow from './components/ListingShowPage';

function App() {
  return (
    <>
      <Navigation/>
        <Switch>

          <Route path="/login" component={LoginFormPage} />
          <Route path="/signup" component={SignupFormPage} />
          <Route exact path="/" component={ImageGrid} />
          {/* <Route exact path="/listings/new" component={ListingFormContainer} />
          <Route path="/listings/:Id" component={ListingShowContainer} /> */}
        <Route path="/benches/:benchId" component={ListingShow} />

        </Switch>
    </>
  );
}

export default App;
