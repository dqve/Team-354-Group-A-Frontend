import React from "react";
import { Button } from "reactstrap";

import Ratings from "../../components/pageassets/rating"


function Filters () {
    
    return(
        <>
            {/* Section: Sidebar */}
            <h4 className=" mb-3">Filters</h4>
            {/* Section: Categories */}
            <section>
                <h6 className="font-weight-bold mb-3">Categories</h6>
                <p ><Button color="link" className="buttonStyles" style={{padding: 0, margin: 0, color: "#f96332"}}>Adventure Tourism</Button></p>
                <p ><Button color="link" className="buttonStyles" style={{padding: 0, margin: 0, color: "#f96332"}}>Atomic Tourism</Button></p>
                <p ><Button color="link" className="buttonStyles" style={{padding: 0, margin: 0, color: "#f96332"}}>Cultural Tourism</Button></p>
                <p ><Button color="link" className="buttonStyles" style={{padding: 0, margin: 0, color: "#f96332"}}>Expert Picks</Button></p>
            </section>
            {/*Section: Categories */}

            {/*Section: Ratings */}
            <section>
                <h6 className="font-weight-bold mb-3">Ratings</h6>

                <label htmlFor="customer-rating-4" className="rating-image z-depth-0 py-0">
                <Ratings className="rating waves-light mb-0 waves-effect waves-light rating-image" index={5}/>
                <input id="customer-rating-4" className="filter-option rating-option" type="checkbox" rating="5" />
                
                </label>
                <br />
                <label htmlFor="customer-rating-4" className="rating-image z-depth-0 py-0">
                <Ratings className="rating waves-light mb-0 waves-effect waves-light rating-image" index={4}/>
                <input id="customer-rating-4" className="filter-option rating-option" type="checkbox" rating="4" />
                
                </label>
                <br />
                <label htmlFor="customer-rating-3" className="rating-image z-depth-0 py-0">
                <Ratings className="rating waves-light mb-0 waves-effect waves-light rating-image" index={3}/>
                <input id="customer-rating-3" className="filter-option rating-option" type="checkbox" rating="3" />
                </label>
                <br />
                <label htmlFor="customer-rating-2" className="rating-image z-depth-0 py-0">
                <Ratings className="rating waves-light mb-0 waves-effect waves-light rating-image" index={2}/>
                <input id="customer-rating-2" className="filter-option rating-option" type="checkbox" rating="2" />
                </label>
                <br />
                <label htmlFor="customer-rating-1" className="rating-image z-depth-0 py-0">
                < Ratings className="rating waves-light mb-0 waves-effect waves-light rating-image" index={1}/>
                <input id="customer-rating-1" className="filter-option rating-option" type="checkbox" rating="1" />
                </label>
                <br /><br />
            </section>
            {/*Section: Ratings */}

            {/*Section: Condition */}
            <section>
                <h6 className="font-weight-bold mb-3">Condition</h6>

                <div className=" pl-0 mb-3">
                <input condition="modern" type="checkbox" className="rating-image filter-option -input filled-in" id="modern" />
                <label className="-label small text-uppercase card-link-secondary" htmlFor="modern">&nbsp; Modern</label>
                </div>
                <div className=" pl-0 mb-3">
                <input condition="historic" type="checkbox" className="rating-image filter-option -input filled-in" id="historic" />
                <label className="-label small text-uppercase card-link-secondary" htmlFor="historic">&nbsp; Historic</label>
                </div>
                <div className=" pl-0 mb-3">
                <input condition="leisure" type="checkbox" className="rating-image filter-option -input filled-in" id="leisure" />
                <label className="-label small text-uppercase card-link-secondary" htmlFor="leisure">&nbsp; Leisure</label>
                </div>
                <div className=" pl-0 mb-3 pb-1">
                <input condition="informative" type="checkbox" className="rating-image filter-option -input filled-in" id="informative" />
                <label className="-label small text-uppercase card-link-secondary" htmlFor="informative">&nbsp; Informative</label>
                </div>
            </section>
            {/*Section: Condition */}
            {/*Section: Sidebar */}
    
        </>
    )
}
export default Filters