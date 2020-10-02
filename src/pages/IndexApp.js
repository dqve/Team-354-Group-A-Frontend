import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import PageNotFound from './pagenotfound/PageNotFound'
import LandingPage from "./homepage/LandingPage"
import PageLoader from "../components/loaders/pageLoader"
import TouristLists from "../components/touristsites/TouristLists"
import Header from "../components/headers/index";
import DefaultNavBar from "../components/navbars/DefaultNavBar"
import Footer from "../components/footers/DefaultFooter"
import Test from "./qrscanner/test"
import QrScanner from "./qrscanner"
import TouristSiteList from "./sites";

const IndexApp = () => {
  
  const [modal, setModal] = React.useState(false);
    return (
        <Router>
            <div>
            <DefaultNavBar getModal={setModal}/>
            <Header />
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/list-of-tourist-sites" component={TouristLists} />
                <Route exact path="/tourist-sites" component={TouristSiteList} />
                <Route exact path="/test" component={Test}/>
                <Route exact path="/loader" component={PageLoader} />
                <Route component={PageNotFound} />
            </Switch>
            <QrScanner modal={modal} setModal={setModal}/>
            <Footer />
            <ToastContainer autoClose={3000} hideProgressBar />
            </div>
        </Router>
    )
}

export default IndexApp
