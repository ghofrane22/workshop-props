import React from "react";
import { Card, Button } from "react-bootstrap";
const Players = ({ player }) => {
  const { name, jerseyNumber, team, nationality } = player;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Text>{name}</Card.Text>
        <Card.Text>{jerseyNumber}</Card.Text>
        <Card.Text>{team}</Card.Text>
        <Card.Text>{nationality}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Players;
