import React from 'react';
import {Redirect, Route, Router, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import LandingPage from './LandingPage';
import Login from '../components/Landing/Login.jsx';
import Signup from '../components/Landing/Signup.jsx';
import CatalogPage from './CatalogPage.jsx';
import DesignerPage from './DesignerPage';
const hist = createBrowserHistory();

export default () => {
    return (
        <Router history={hist}>
            <Switch>
                <Route path="/designer" component={DesignerPage}/>
                <Route path="/landing_page" component={LandingPage}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/catalog" component={CatalogPage}/>
                <Redirect from="/" to="/landing_page"/>
            </Switch>
        </Router>
    );
}