/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

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
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed and Developed by{" "}
            <a
                href="#"
              >
            SDG Team 354
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DefaultFooter;
