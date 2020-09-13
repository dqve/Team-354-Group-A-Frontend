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

function DefaultNavBar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
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
              href="https://demos.creative-tim.com/now-ui-kit-react/index?ref=nukr-examples-navbar"
              target="_blank"
              id="navbar-brand"
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
                <NavLink to="#" tag={Link}>
                  Checkout Sites
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
                  href="#scan"
                >
                  <p className="">Scan QR-Code &nbsp;</p>
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

export default DefaultNavBar;
