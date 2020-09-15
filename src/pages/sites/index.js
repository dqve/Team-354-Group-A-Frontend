import React from "react";

// reactstrap components
import {
//   Button,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   Container,
//   Row,
//   Col,
//   UncontrolledTooltip
} from "reactstrap";

// core components
import DefaultNavBar from "../../components/navbars/DefaultNavBar";
import DefaultFooter from "../../components/footers/DefaultFooter";
import SitesHeader from "../../components/headers/SitesHeader"

function TouristSiteList() {

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <DefaultNavBar />
      <div className="wrapper">
        <SitesHeader />
        <DefaultFooter />
      </div>
    </>
  );
}

export default TouristSiteList;
