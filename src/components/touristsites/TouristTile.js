import React from "react"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"

const TouristTile = ({ imgUrl, title, subTitle, content, buttonText }) => (
  <Card>
    <CardImg top width="100%" src={imgUrl} alt="Idanre Hills" />
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subTitle}</CardSubtitle>
      <CardText>{content}</CardText>
      <Button>{buttonText}</Button>
    </CardBody>
  </Card>
)
export default TouristTile;