import React from "react";
import { Link } from "react-router-dom";
//import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { BiScan } from "react-icons/bi";

// reactstrap components
import {
  Collapse,
  /*DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,*/
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function DefaultNavBar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  
  function changeModal() {
    props.getModal(true)
  }

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if(!props.limit){
        if (
          document.documentElement.scrollTop > 399 ||
          document.body.scrollTop > 399
        ) {
          setNavbarColor("");
        } else if (
          document.documentElement.scrollTop < 400 ||
          document.body.scrollTop < 400
        ) {
          setNavbarColor("navbar-transparent");
        }
      }else{
        if (
          document.documentElement.scrollTop > 199 ||
          document.body.scrollTop > 199
        ) {
          setNavbarColor("");
        } else if (
          document.documentElement.scrollTop < 200 ||
          document.body.scrollTop < 200
        ) {
          setNavbarColor("navbar-transparent");
        }
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
         <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
              to="/landing" tag={Link}
            >
              <img src={require("../../assets/img/Logo.png")} 
              style={{
                maxWidth: "75px"
              }}
              alt="E-Tourism"
              />
              
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Tourism on the go
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink to="/tourist-sites" tag={Link}>
                  Checkout Sites
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/list-of-tourist-sites" tag={Link}>
                  Sites
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  Checkout Hotels
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  Checkout Flights
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={changeModal}
                >Scan QR-Code &nbsp;
                  <BiScan size="2em" />
                </NavLink>
              </NavItem>
             </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default DefaultNavBar