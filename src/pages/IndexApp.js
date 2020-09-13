import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import HomePage from './homepage/HomePage'
import PageNotFound from './pagenotfound/PageNotFound'
import LandingPage from "./homepage/LandingPage"
import PageLoader from "../components/loaders/pageLoader"


const IndexApp = () => (
        <div className="">
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/landing" component={LandingPage}/>
                <Route exact path="/loader" component={PageLoader}/>
                <Route component={PageNotFound}/>
            </Switch>
            <ToastContainer autoClose={3000} hideProgressBar />
        </div>
)

export default IndexApp