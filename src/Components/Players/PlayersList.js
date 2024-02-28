import React from "react";
import Players from "./Players";

const PlayersList = () => {
  const PlayersList = [
    {
      name: "cristiano",
      team: "test",
      nationality: "Portuguese",
      jerseyNumber: 10,
      age: 33,
      imageUrl: "./players/player1.jpg",
    },
    {
      name: "mesi",
      team: "test",
      nationality: "argentin",
      jerseyNumber: 10,
      age: 33,
      imageUrl: "./players/player2.jpg",
    },
    {
      name: "naymar",
      team: "test",
      nationality: "Brésil",
      jerseyNumber: 10,
      age: 33,
      imageUrl: "./players/player3.jpg",
    },
  ];
  return (
    <div>
      {PlayersList.map((player, index) => {
        return <Players player={player} />;
      })}
    </div>
  );
};

export default PlayersList;
