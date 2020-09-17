import React from "react"

// reactstrap components

import { Container } from "reactstrap"

function SitesHeader() {
  let pageHeader = React.createRef()
  
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)"
      }
      window.addEventListener("scroll", updateScroll)
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll)
      }
    }
  })
  return (
    <>
      <div className="page-header page-header-smaller" style={{maxHeight: "200px"}}>
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/tourist/tourism.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center text-center">
          <Container>
            <h3 className="title" style={window.innerWidth > 425 ? {fontSize: "40px"} : {fontSize: "20px"}}>Tourist Sites</h3>
          </Container>
        </div>
      </div>
    </>
  )
}

export default SitesHeader
