import { Route, Switch } from "react-router-dom"
import React, { useState, useEffect } from "react";
import LoginFormPage from "./components/LoginFormPage";
import SignupPage from './components/SignUpPage';
import * as sessionActions from "./store/session";
import { useDispatch } from "react-redux";
import Navigation from "./components/Navigation";
import Homepage from "./components/HomePage";
import BusinessFormPage from "./components/BusinessFormPage";
import BusinessDetailPage from "./components/BusinessFormPage/businessDetail.js";
import BusinessEditPage from "./components/BusinessEditPage";


function App() {
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route path='/login'>
              <LoginFormPage />
            </Route>
            <Route path='/signup'>
              <SignupPage />
            </Route>
            <Route exact path='/business/:id/edit'>
              <BusinessEditPage />
            </Route>
            <Route exact path='/business/:id'>
              <BusinessDetailPage />
            </Route>

            <Route path='/business'>
              <BusinessFormPage />
            </Route>
          </Switch>
        )}

    </>
  );
}

export default App;
