import React from 'react';
import {
  Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const TouristSites = (props) => {
  return (
    <div>
    <Row>
      <Col md="4" sm="12" >
        <Card>
            <CardImg top width="100%" src={require("../../assets/img/tourist/tourism-1_idanre_hills.jpg")} alt="Idanre Hills" />
            <CardBody>
            <CardTitle>Idanre Hills</CardTitle>
            <CardSubtitle>Idanre Hills</CardSubtitle>
            <CardText>About Idanre Hills.</CardText>
            <Button>Visit</Button>
            </CardBody>
        </Card>
      </Col>
      <Col md="4" sm="12">
        <Card>
            <CardImg top width="100%" src={require("../../assets/img/tourist/tourism-1_idanre_hills.jpg")} alt="Idanre Hills" />
            <CardBody>
            <CardTitle>Idanre Hills</CardTitle>
            <CardSubtitle>Idanre Hills</CardSubtitle>
            <CardText>About Idanre Hills.</CardText>
            <Button>Visit</Button>
            </CardBody>
        </Card>
      </Col>
      <Col md="4" sm="12">
        <Card>
            <CardImg top width="100%" src={require("../../assets/img/tourist/tourism-1_idanre_hills.jpg")} alt="Idanre Hills" />
            <CardBody>
            <CardTitle>Idanre Hills</CardTitle>
            <CardSubtitle>Idanre Hills</CardSubtitle>
            <CardText>About Idanre Hills.</CardText>
            <Button>Visit</Button>
            </CardBody>
        </Card>
      </Col>
    </Row>
    </div>
  );
};

export default TouristSites;