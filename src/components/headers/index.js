import React from "react";
import { useLocation } from 'react-router-dom'
import DefaultHeader from "./DefaultHeader"
import SiteHeader from "./SitesHeader"

const Header = ({getDestination}) => {

    const location = useLocation()

    switch(location.pathname) {
        case "/list-of-tourist-sites":
            return <SiteHeader />
        case "/tourist-sites":
            return <SiteHeader />
        default:
            return <DefaultHeader getDestination={getDestination} />
    }
}

export default Header;