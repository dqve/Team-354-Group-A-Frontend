import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import PageNotFound from './pagenotfound/PageNotFound'
import LandingPage from "./homepage/LandingPage"
import PageLoader from "../components/loaders/pageLoader"
import TouristLists from "../components/touristsites/TouristLists"
import Header from "../components/headers/DefaultHeader";
import Footer from "../components/footers/DefaultFooter"
import Test from "./qrscanner/test"
import TouristSiteList from "./sites";

const IndexApp = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/list-of-tourist-sites" component={TouristLists} />
        <Route exact path="/tourist-sites" component={TouristSiteList} />
        <Route exact path="/test" component={Test}/>
        <Route exact path="/loader" component={PageLoader} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  </Router>
)

export default IndexApp
