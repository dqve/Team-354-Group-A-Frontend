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
            <h1 className="title">Easy Tourism at your Fingertips</h1>
            <div className="text-center">
                <FormGroup>
                  <Row>
                  <Col lg="2"></Col>
                    <Col lg="7">
                  <Input
                    defaultValue=""
                    placeholder="Do you have a place in mind?"
                    type="text"
                    onChange={(e) => setDest(e.target.value)}
                  ></Input>
                  </Col>
                  <Col lg="1">
                  {/*<Button className="btn-round" color="info" type="button" size="md" style={{margin: "0px"}} onClick = {changeDest}>
                Search
              </Button>*/}
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
              <Col lg="1"></Col>
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
