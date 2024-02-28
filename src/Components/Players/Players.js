import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";
const Players = ({ player }) => {
  const { name, jerseyNumber, team, nationality, imageUrl } = player;
  return (
    <div className="card-player">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Text>{name}</Card.Text>
          <Card.Text>{jerseyNumber}</Card.Text>
          <Card.Text>{team}</Card.Text>
          <Card.Text>{nationality}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Players;
