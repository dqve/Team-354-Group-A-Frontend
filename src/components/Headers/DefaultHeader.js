import React from "react";

// reactstrap components

import {  Button, 
          Container,
          Input,
          Row,
          Col,
          FormGroup
        } from "reactstrap";

import { Link } from "react-scroll";
// core components

function DefaultHeader(props) {
  let pageHeader = React.createRef();
  const [dest, setDest] = React.useState("");

  function changeDest() {
    props.getDestination(dest)
    console.log(dest || "kosi")
  }
  
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/tourist/tourism.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h2 className="title" style={window.innerWidth > 425 ? {fontSize: "50px"} : {fontSize: "25px"}}>Easy Tourism at your Fingertips</h2>
            <div className="text-center">
                <FormGroup>
                  <Row>
                  <Col sm="0" md="0" lg="2"></Col>
                    <Col sm="9" md="9" lg="6">
                  <Input
                    defaultValue=""
                    placeholder="Do you have a place in mind?"
                    type="text"
                    onChange={(e) => setDest(e.target.value)}
                  ></Input>
                  </Col>
                  <Col sm="3" md="3" lg="2">
              <Button className="btn-round" color="info" type="button" size="md" style={{margin: "0px"}} onClick = {changeDest}>
              <Link
                  onClick = {changeDest}
                  activeClass="active"
                  to="destinations"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
              > Search
                </Link>
            </Button>
              </Col>
              <Col sm="0" md="0" lg="1"></Col>
              </Row>
                </FormGroup>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default DefaultHeader;
