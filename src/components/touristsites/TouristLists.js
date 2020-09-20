import React from "react"
import { Row, Col } from "reactstrap"
import Filters from "./Filters"
import BreadCrumb from "../breadcrumbs/index"
import TouristStream from "./TouristStream"

const TouristLists = () => {
  return (
    <div className="container">
      <BreadCrumb links={[{ name: "Tourist Site", link: "/tourist-sites" }]} />
      <section>
        <Row>
          <Col md="2">
            <Filters />
          </Col>
          <Col md="10">
            <TouristStream />
          </Col>
        </Row>
      </section>
    </div>
  )
}

export default TouristLists