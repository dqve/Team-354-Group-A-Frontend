import React from 'react';
import { Route, Switch } from 'react-router-dom';

// styles
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.4.0";
import "./assets/demo/demo.css?v=1.4.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
import "./assets/css/font-awesome.min.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from './pages/homepage/HomePage';
import PageNotFound from './pages/pagenotfound/PageNotFound';
import LandingPage from "./pages/homepage/LandingPage";



const App = () => (
    <div className="">
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/landing" component={LandingPage}/>
            <Route component={PageNotFound}/>
        </Switch>
        <ToastContainer autoClose={3000} hideProgressBar />
    </div>
)

export default App;