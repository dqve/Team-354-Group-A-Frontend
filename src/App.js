import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from './pages/homepage/HomePage';
import PageNotFound from './pages/pagenotfound/PageNotFound';



const App = () => (
    <div className="container-fluid">
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route component={PageNotFound}/>
        </Switch>
        <ToastContainer autoClose={3000} hideProgressBar />
    </div>
)

export default App;