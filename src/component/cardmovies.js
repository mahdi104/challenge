import React from "react";
import "./style.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Cardmovies = ({ el }) => {
  return (
    <Card className="card">
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>{el.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Date: {el.date}</ListGroupItem>
        <ListGroupItem>{el.type}</ListGroupItem>
        <ListGroupItem>rating: {el.rating}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};
export default Cardmovies;
