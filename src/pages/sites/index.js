import React from "react";

// reactstrap components
import {
//   Button,
  Input,
  Label,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   Container,
  Row,
  Col,
  Container,
//   UncontrolledTooltip
} from "reactstrap";

// core components
import { BsStar, BsStarFill } from "react-icons/bs";
import DefaultNavBar from "../../components/navbars/DefaultNavBar";
import DefaultFooter from "../../components/footers/DefaultFooter";
import SitesHeader from "../../components/headers/SitesHeader"

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
      <DefaultNavBar />
        <div className="wrapper">
          <SitesHeader />
          
          <div class="container section">
          <div className="separator separator-primary"></div>
            {/* Grid row */}
            <Row>

              {/* Grid column */}
              <Col className="md-4">

                {/* Section: Sidebar */}
                <section>

                  {/* Section: Categories */}
                  <section>

                    <h5>Categories</h5>

                    <div class="text-muted small text-uppercase mb-5">
                      <p class="mb-3"><a href="#" class="card-link-secondary">Dresses</a></p>
                      <p class="mb-3"><a href="#" class="card-link-secondary">Tops, Tees &amp; Blouses</a></p>
                      <p class="mb-3"><a href="#" class="card-link-secondary">Sweaters</a></p>
                      <input id="customer-rating-2" class="filter-option" type="checkbox" rating="2" />
                    </div>

                  </section>
                  {/*Section: Categories */}

                  {/*Section: Filters */}
                  <section class="filters">
                    <h5>Filters</h5>

                    {/*Section: Condition */}
                    <section filter="condition" class="mb-4">
                      <h6 class="font-weight-bold mb-3">Condition</h6>

                      <div class="form-check pl-0 mb-3">
                      <Label check>
                      <input id="customer-rating-2" class="filter-option" type="checkbox" rating="2" />
                      </Label>
                        <input type="checkbox" class="filter-option form-check-input filled-in" condition="new" id="new" />
                        <label class="form-check-label small text-uppercase card-link-secondary" for="new">New</label>
                      </div>
                      <div class="form-check pl-0 mb-3">
                        <input condition="used" type="checkbox" class="filter-option form-check-input filled-in" id="used" />
                        <label class="form-check-label small text-uppercase card-link-secondary" for="used">Used</label>
                      </div>
                      <div class="form-check pl-0 mb-3">
                        <input condition="collectible" type="checkbox" class="filter-option form-check-input filled-in" id="collectible" />
                        <label class="form-check-label small text-uppercase card-link-secondary" for="collectible">Collectible</label>
                      </div>
                      <div class="form-check pl-0 mb-3 pb-1">
                        <input condition="renewed" type="checkbox" class="filter-option form-check-input filled-in" id="renewed" />
                        <label class="form-check-label small text-uppercase card-link-secondary" for="renewed">Renewed</label>
                      </div>
                    </section>
                    {/*Section: Condition */}

                    {/*Section: Average */}
                    <section filter="rating">
                      <h6 class="font-weight-bold mb-3">Avg. Customer Review</h6>

                      <label for="customer-rating-4" class="z-depth-0 py-0">
                        <ul class="rating waves-light mb-0 waves-effect waves-light">
                          <li>
                            <BsStar className="text-primary"/>
                          </li>
                          <li>
                            <BsStar className="text-primary"/>
                          </li>
                          <li>
                            <BsStar className="text-primary"/>
                          </li>
                          <li>
                            <BsStar className="text-primary"/>
                          </li>
                          <li>
                            <BsStar className="text-primary"/>
                          </li>
                          <li>
                            <p class="small text-uppercase card-link-secondary px-2">
                              &amp; Up
                            </p>
                          </li>
                        </ul>
                        <input id="customer-rating-4" class="filter-option" type="checkbox" rating="4" />
                      </label>
                      <br />
                      <label for="customer-rating-3" class="z-depth-0 py-0">
                        <ul class="rating waves-light mb-0 waves-effect waves-light">
                          <li>
                            <BsStar className="text-primary"/>
                          </li>
                          <li>
                            <BsStar className="text-primary"/>
                          </li>
                          <li>
                            <BsStar className="text-primary"/>
                          </li>
                          <li>
                            <BsStarFill className="text-primary" />
                          </li>
                          <li>
                            <BsStarFill className="text-primary" />
                          </li>
                          <li>
                            <p class="small text-uppercase card-link-secondary px-2">
                              &amp; Up
                            </p>
                          </li>
                        </ul>
                        <input id="customer-rating-3" class="filter-option" type="checkbox" rating="3" />
                      </label>
                      <br />
                      <label for="customer-rating-2" class="z-depth-0 py-0">
                        <ul class="rating waves-light mb-0 waves-effect waves-light">
                          <li>
                            <BsStar className="text-primary"/>
                          </li>
                          <li>
                            <BsStar className="text-primary"/>
                          </li>
                          <li>
                            <BsStarFill className="text-primary" />
                          </li>
                          <li>
                            <BsStarFill className="text-primary" />
                          </li>
                          <li>
                            <BsStarFill className="text-primary" />
                          </li>
                          <li>
                            <p class="small text-uppercase card-link-secondary px-2">
                              &amp; Up
                            </p>
                          </li>
                        </ul>
                        <input id="customer-rating-2" class="filter-option" type="checkbox" rating="2" />
                      </label>
                      <br />
                      <label for="customer-rating-1" class="z-depth-0 py-0">
                        <ul class="rating waves-light mb-0 waves-effect waves-light">
                          <li>
                            <BsStar className="text-primary"/>
                          </li>
                          <li>
                            <BsStarFill className="text-primary" />
                          </li>
                          <li>
                            <BsStarFill className="text-primary" />
                          </li>
                          <li>
                            <BsStarFill className="text-primary" />
                          </li>
                          <li>
                            <BsStarFill className="text-primary" />
                          </li>
                          <li>
                            <p class="small text-uppercase card-link-secondary px-2">
                              &amp; Up
                            </p>
                          </li>
                        </ul>
                        <input id="customer-rating-1" class="filter-option" type="checkbox" rating="1" />
                      </label>
                    </section>
                    {/*Section: Average */}

                    {/*Section: Price */}
                    <section class="mb-4" filter="price">
                      <h6 class="font-weight-bold mb-3">Price</h6>

                      <div class="form-check pl-0 mb-3">
                        <input price="0-25" type="radio" class="filter-option form-check-input" id="under25" name="materialExampleRadios" />
                        <label class="form-check-label small text-uppercase card-link-secondary" for="under25">Under $25</label>
                      </div>
                      <div class="form-check pl-0 mb-3">
                        <input price="25-50" type="radio" class="filter-option form-check-input" id="2550" name="materialExampleRadios" />
                        <label class="form-check-label small text-uppercase card-link-secondary" for="2550">$25 to $50</label>
                      </div>
                      <div class="form-check pl-0 mb-3">
                        <input price="50-100" type="radio" class="filter-option form-check-input" id="50100" name="materialExampleRadios" />
                        <label class="form-check-label small text-uppercase card-link-secondary" for="50100">$50 to $100</label>
                      </div>
                      <div class="form-check pl-0 mb-3">
                        <input price="100-200" type="radio" class="filter-option form-check-input" id="100200" name="materialExampleRadios" />
                        <label class="form-check-label small text-uppercase card-link-secondary" for="100200">$100 to $200</label>
                      </div>
                      <div class="form-check pl-0 mb-3">
                        <input price="200-*" type="radio" class="filter-option form-check-input" id="200above" name="materialExampleRadios" />
                        <label class="form-check-label small text-uppercase card-link-secondary" for="200above">$200 &amp; Above</label>
                      </div>
                    </section>
                    {/*Section: Price */}

                    
                  </section>
                  {/*Section: Filters */}

                </section>
                {/*Section: Sidebar */}

                </Col>
              {/*Grid column*/}

              {/*Grid column*/}
              <div class="col-md-8 mb-4">

                {/*Section: Block Content */}
                <section class="mb-3">
                  </section>
                  </div>
            </Row>
          </div>
          <DefaultFooter />
        </div>
    </>
  );
}

export default TouristSiteList;
