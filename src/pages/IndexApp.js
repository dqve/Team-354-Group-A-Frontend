import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import PageNotFound from "./pagenotfound/PageNotFound"
import LandingPage from "./homepage/LandingPage"
import PageLoader from "../components/loaders/pageLoader"
import TouristStream from "../components/touristsites/TouristStream"
import Header from "../components/Headers/DefaultHeader";

const IndexApp = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/list-of-tourist-sites" component={TouristStream} />
        <Route exact path="/loader" component={PageLoader} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  </Router>
)

export default IndexApp