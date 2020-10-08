import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import IndexCarousel from "../../components/carousels/IndexCarousel"
import TouristSites from "./TouristSites"
import QrScanner from "../qrscanner";

function LandingPage(props) {
  const {Destination} = props
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const idanre = "../../assets/img/tourist/tourism-1_idanre_hills.jpg"
  const freeStyle = {
    position: "relative",
    left: "-5%",
  }
  const leftFreeStyle = {
    position: "relative",
    left: "17.5%",
    backgroundImage: "url(" + require("../../assets/img/qr_tourist_3.jpg") + ")",
  }
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
      {/* <DefaultNavBar getModal={setModal}/> */}
      <div className="wrapper">
        {/* <DefaultHeader getDestination={setDestination}/> */}

        <div className="section section-about-us">
          <QrScanner modal={modal} setModal={setModal}/>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Wonders await you!</h2>
                <h5 className="description">
                Enjoy the best possible experience as a tourist, using the E-Tourism app. 
                Enjoy cheap rates, cozy accomodations and learn about every attraction by simply scanning a QR-Code.
                Explore The World's most exciting tourist sites Today.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview content-center text-center">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={ window.innerWidth > 768 ? leftFreeStyle : {backgroundImage: "url(" + require("../../assets/img/qr_tourist_3.jpg") + ")",} }>
                    <p className="blockquote blockquote-info">
                    “Tourism is a a journey of discovery and wonder, The trill of the unknown comes with utter satisfaction.”<br></br>
                      <br></br>
                      <small>-Lailah Gifty Akita</small>
                    </p>
                  </div>
                </Col>
                <Col md="5" sm="12" >
                  <div
                    className="image-container imageright" id="carousel" style={window.innerWidth > 768 ? freeStyle : {}}
                  >
                    <IndexCarousel/>
                  </div>
                  <div className="content-center text-center" style={window.innerWidth > 768 ? freeStyle : {}}>
                    <br/>
                    <h3>
                      Scan a QR Code for enhanced discovery
                    </h3>
                    
                    <img
                        id="scan_qr"
                        alt="..."
                        className="img-fluid img-raised"
                        src={require("../../assets/img/tourist/qr_code.png")}
                        onClick={() => setModal(true)}
                      ></img>
                      <UncontrolledTooltip target="#scan_qr">
                      Click to scan QR Code
                    </UncontrolledTooltip>
                      </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container id="destinations">
                  <h2 className="title">Suggested Destinations{Destination ? ` in ${Destination}` : ``}</h2>
            <TouristSites siteImage={idanre} destination={Destination}/>
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Do you need specific assistance?</h2>
            <p className="description">We are happy to help, your convinience is important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <DefaultFooter /> */}
      </div>
    </>
  );
}

export default LandingPage;
