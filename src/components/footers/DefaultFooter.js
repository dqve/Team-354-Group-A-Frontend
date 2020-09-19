/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container,
  UncontrolledTooltip,
  NavItem,
  NavLink, } from "reactstrap";
  import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

function DefaultFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
            <a
                href="#"
              >
                E-Tourism
              </a>
            </li>
            <li>
              <a
                href="#"
              >
                About Us
              </a>
              <a
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
            <a
                href="#"
              >
                T and C
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="content-center text-center nav">
          <ul>
            <li>
            <a
                href="#twitter"
                target="_blank"
                id="twitter-tooltip"
              >
                <FaTwitter size="1.5em"/>
              </a>
            </li>
            <li>
              <a
                href="#facebbook"
                target="_blank"
                id="facebook-tooltip"
              >
                <FaFacebookF size="1.5em" />
              </a>
              <a
                href="#instagram"
                target="_blank"
                id="instagram-tooltip"
              >
                <FaInstagram size="1.5em" />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright" id="copyright">
        &copy; {new Date().getFullYear()}, Designed and Developed by{" "}
            <a href="#"> SDG Team 354</a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DefaultFooter;
