import React from "react";

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

// core components
import DefaultNavBar from "../../components/navbars/DefaultNavBar";
import DefaultFooter from "../../components/footers/DefaultFooter";
import SitesHeader from "../../components/headers/SitesHeader"
import Filters from "./Filters"
import BreadCrumb from "../../components/breadcrumbs";
//import "../../assets/demo/mdb.min.js"
//import "../../assets/css/mdb-pro.min.css"
import "../../assets/css/mdb.ecommerce.min.css"


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
      {/* <DefaultNavBar limit={true}/> */}
        <div className="wrapper">
          {/* <SitesHeader /> */}
          <div className="separator separator-primary seperator-light"></div>
          
          <div className="container">
          <BreadCrumb links={[{name:"Tourist Site", link:"/tourist-sites"}]}/>
          <div className="section">
            <Row>
              <Col className="md-4">
                <Filters />
              </Col>
              <Col className="md-8">
                
              </Col>
            </Row>
            </div>
          </div>
          <DefaultFooter />
        </div>
        
    </>
  );
}

export default TouristSiteList