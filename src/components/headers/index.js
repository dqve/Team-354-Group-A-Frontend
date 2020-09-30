import React from "react";
import { useLocation } from 'react-router-dom'
import DefaultHeader from "./DefaultHeader"
import SiteHeader from "./SitesHeader"

const Header = () => {

    const location = useLocation()

    switch(location.pathname) {
        case "/list-of-tourist-sites":
            return <SiteHeader />
            break;
        case "/tourist-sites":
            return <SiteHeader />
            break;
        default:
            return <DefaultHeader />
    }
}




export default Header;