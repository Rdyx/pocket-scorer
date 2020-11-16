import React, { useState } from "react";
import YamsGameTableComponent from "./components/YamsGameTableComponent";
import { Combinaison, Player } from "./YamsTypes";

/**
 * Get combinaison array
 */
function getCombinaisons() {
  return [
    { name: "1", pointsText: "Total de 1", playerPoints: 0 },
    { name: "2", pointsText: "Total de 2", playerPoints: 0 },
    { name: "3", pointsText: "Total de 3", playerPoints: 0 },
    { name: "4", pointsText: "Total de 4", playerPoints: 0 },
    { name: "5", pointsText: "Total de 5", playerPoints: 0 },
    { name: "6", pointsText: "Total de 6", playerPoints: 0 },
    { name: "Brelan", pointsText: "Total", playerPoints: 0 },
    { name: "Carré", pointsText: "Total", playerPoints: 0 },
    { name: "Full house", pointsText: "25", playerPoints: 0 },
    { name: "Petite suite", pointsText: "30", playerPoints: 0 },
    { name: "Grande suite", pointsText: "40", playerPoints: 0 },
    { name: "Yams", pointsText: "50", playerPoints: 0 },
    { name: "Chance", pointsText: "Total", playerPoints: 0 },
    { name: "Total", pointsText: "", playerPoints: 0 },
  ];
}

/**
 * Add a palyer to players' array
 * @param players Player[]
 */
function addPlayer(players: Player[]) {
  const playerName = prompt("Nom du joueur " + (players.length + 1));
  const player = {
    name: playerName || "Joueur " + (players.length + 1),
    score: 0,
    combinaisons: getCombinaisons(),
  };
  players.push(player);
  return [...players];
}

/**
 * Create 2 players by default in dev env
 */
function getPlayers(getCombinaisons: () => Combinaison[]) {
  return process.env.NODE_ENV === "development"
    ? [
        {
          name: "Joueur 1",
          score: 0,
          combinaisons: getCombinaisons(),
        },
        {
          name: "Joueur 2",
          score: 0,
          combinaisons: getCombinaisons(),
        },
      ]
    : [];
}

export default function YamsComponent() {
  const combinaisons = getCombinaisons(); // HTML Table 'draw'

  const playersDefault: Player[] = getPlayers(getCombinaisons);
  let [players, setPlayers] = useState(playersDefault);

  return (
    <>
      <nav className="nav">
        <button className="btn btn-info" onClick={() => setPlayers(addPlayer(players))}>
          Add Player
        </button>
      </nav>
      <YamsGameTableComponent players={players} combinaisons={combinaisons} />
    </>
  );
}
