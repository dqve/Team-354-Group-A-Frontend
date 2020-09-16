import React from "react";

// reactstrap components
import {
//   Button,
  // Input,
  Label,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   Container,
  Row,
  Col,
//   UncontrolledTooltip
} from "reactstrap";

// core components
import DefaultNavBar from "../../components/navbars/DefaultNavBar";
import DefaultFooter from "../../components/footers/DefaultFooter";
import SitesHeader from "../../components/headers/SitesHeader"
import Ratings from "../../components/pageassets/rating"
import BreadCrumb from "../../components/breadcrumbs"
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
      <DefaultNavBar limit={true}/>
        <div className="wrapper">
          <SitesHeader />
          <div className="separator separator-primary seperator-light"></div>
          
          <div className="container">
          <BreadCrumb links={[{name:"Tourist Site", link:"/tourist-sites"}]}/>
          <div className="section">
            {/* Grid row */}
            <Row>

              {/* Grid column */}
              <Col className="md-4">

                {/* Section: Sidebar */}
                <h4 className=" mb-3">Filters</h4>
                  {/* Section: Categories */}
                  <section>
                    <h6 className="font-weight-bold mb-3">Categories</h6>
                      <p className="mb-3"><a href="#" className="card-link-secondary">Adventure Tourism</a></p>
                      <p className="mb-3"><a href="#" className="card-link-secondary">Atomic Tourism</a></p>
                      <p className="mb-3"><a href="#" className="card-link-secondary">Cultural Tourism</a></p>
                      <p className="mb-3"><a href="#" className="card-link-secondary">Expert Picks</a></p>
                  </section>
                  {/*Section: Categories */}

                  {/*Section: Average */}
                  <section>
                      <h6 className="font-weight-bold mb-3">Ratings</h6>

                      <label htmlFor="customer-rating-4" className="z-depth-0 py-0">
                        <Ratings className="rating waves-light mb-0 waves-effect waves-light rating-image" index={5}/>
                        <input id="customer-rating-4" className="filter-option rating-option" type="checkbox" rating="5" />
                        
                      </label>
                      <br />
                      <label htmlFor="customer-rating-4" className="z-depth-0 py-0">
                        <Ratings className="rating waves-light mb-0 waves-effect waves-light rating-image" index={4}/>
                        <input id="customer-rating-4" className="filter-option rating-option" type="checkbox" rating="4" />
                        
                      </label>
                      <br />
                      <label htmlFor="customer-rating-3" className="z-depth-0 py-0">
                        <Ratings className="rating waves-light mb-0 waves-effect waves-light rating-image" index={3}/>
                        <input id="customer-rating-3" className="filter-option rating-option" type="checkbox" rating="3" />
                      </label>
                      <br />
                      <label htmlFor="customer-rating-2" className="z-depth-0 py-0">
                        <Ratings className="rating waves-light mb-0 waves-effect waves-light rating-image" index={2}/>
                        <input id="customer-rating-2" className="filter-option rating-option" type="checkbox" rating="2" />
                      </label>
                      <br />
                      <label htmlFor="customer-rating-1" className="z-depth-0 py-0">
                      < Ratings className="rating waves-light mb-0 waves-effect waves-light rating-image" index={1}/>
                        <input id="customer-rating-1" className="filter-option rating-option" type="checkbox" rating="1" />
                      </label>
                      <br /><br />
                    </section>
                    {/*Section: Average */}

                  {/*Section: Filters */}

                    {/*Section: Condition */}
                    <section>
                      <h6 className="font-weight-bold mb-3">Condition</h6>

                      <div className=" pl-0 mb-3">
                        <input condition="new" type="checkbox" className="filter-option -input filled-in" id="used" />
                        <label className="-label small text-uppercase card-link-secondary" htmlFor="new">&nbsp; Modern</label>
                      </div>
                      <div className=" pl-0 mb-3">
                        <input condition="used" type="checkbox" className="filter-option -input filled-in" id="used" />
                        <label className="-label small text-uppercase card-link-secondary" htmlFor="used">&nbsp; Historic</label>
                      </div>
                      <div className=" pl-0 mb-3">
                        <input condition="collectible" type="checkbox" className="filter-option -input filled-in" id="collectible" />
                        <label className="-label small text-uppercase card-link-secondary" htmlFor="collectible">&nbsp; Leisure</label>
                      </div>
                      <div className=" pl-0 mb-3 pb-1">
                        <input condition="renewed" type="checkbox" className="filter-option -input filled-in" id="renewed" />
                        <label className="-label small text-uppercase card-link-secondary" htmlFor="renewed">&nbsp; Informative</label>
                      </div>
                    </section>
                    {/*Section: Condition */}
                {/*Section: Sidebar */}

                </Col>
              {/*Grid column*/}

              {/*Grid column*/}
              <div className="col-md-8 mb-4">

                {/*Section: Block Content */}
                <section className="mb-3">
                  </section>
                  </div>
            </Row>
            </div>
          </div>
          <DefaultFooter />
        </div>
        
    </>
  );
}

export default TouristSiteList;
