import React from "react";
import { Row, Col } from "reactstrap";
import idanreImage from "../../assets/img/tourist/tourism-1_idanre_hills.jpg";
import TouristTile from "./TouristTile";

const touristAttraction = [
  {
    imgUrl: idanreImage,
    title: "Idanre Hills",
    subTitle: "Idanre Hills",
    content: "About Idanre Hills.",
    buttonText: "Visit",
  },
  {
    imgUrl: idanreImage,
    title: "Idanre Hills",
    subTitle: "Idanre Hills",
    content: "About Idanre Hills.",
    buttonText: "Visit",
  },
  {
    imgUrl: idanreImage,
    title: "Idanre Hills",
    subTitle: "Idanre Hills",
    content: "About Idanre Hills.",
    buttonText: "Visit",
  },
  {
    imgUrl: idanreImage,
    title: "Idanre Hills",
    subTitle: "Idanre Hills",
    content: "About Idanre Hills.",
    buttonText: "Visit",
  },
  {
    imgUrl: idanreImage,
    title: "Idanre Hills",
    subTitle: "Idanre Hills",
    content: "About Idanre Hills.",
    buttonText: "Visit",
  },
  {
    imgUrl: idanreImage,
    title: "Idanre Hills",
    subTitle: "Idanre Hills",
    content: "About Idanre Hills.",
    buttonText: "Visit",
  },
  {
    imgUrl: idanreImage,
    title: "Idanre Hills",
    subTitle: "Idanre Hills",
    content: "About Idanre Hills.",
    buttonText: "Visit",
  },
  {
    imgUrl: idanreImage,
    title: "Idanre Hills",
    subTitle: "Idanre Hills",
    content: "About Idanre Hills.",
    buttonText: "Visit",
  },
  {
    imgUrl: idanreImage,
    title: "Idanre Hills",
    subTitle: "Idanre Hills",
    content: "About Idanre Hills.",
    buttonText: "Visit",
  },
  {
    imgUrl: idanreImage,
    title: "Idanre Hills",
    subTitle: "Idanre Hills",
    content: "About Idanre Hills.",
    buttonText: "Visit",
  },
  {
    imgUrl: idanreImage,
    title: "Idanre Hills",
    subTitle: "Idanre Hills",
    content: "About Idanre Hills.",
    buttonText: "Visit",
  },
]

const TouristStream = (props) => {
  return (
    <div style={{padding: '30px',}}>
      <Row>
        {touristAttraction.map((tourist) => (
          <Col md="4" sm="12">
            <TouristTile {...tourist} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default TouristStream