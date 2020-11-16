import React from "react";
import { getInputValue, setHTMLElementInnerHtml } from "../../utils";
import { Combinaison, Player } from "../YamsTypes";

interface props {
  players: Player[];
  combinaisons: Combinaison[];
}

/**
 * Calculate player score based on combinaisons player points
 * @param player Player
 */
function calculatePlayerScore(player: Player) {
  let score = 0;
  player.combinaisons.forEach((combinaison) => {
    score += combinaison.playerPoints;
  });
  return score;
}

/**
 * Update total score of a player shown in <td>
 * @param totalTdId string
 * @param player Player
 */
function updatePlayerTotalScore(totalTdId: string, player: Player) {
  setHTMLElementInnerHtml(totalTdId, calculatePlayerScore(player));
}

/**
 * Update a player combinaison score
 * @param player Player
 * @param indexCombinaison number
 * @param inputId string
 * @param totalTdId string
 */
function updatePlayerCombinaison(player: Player, indexCombinaison: number, inputId: string, totalTdId: string) {
  player.combinaisons[indexCombinaison].playerPoints = parseInt(getInputValue(inputId), 10);
  updatePlayerTotalScore(totalTdId, player);
}

/**
 * Draw <th> with players' names in DOM
 * @param players Player[]
 */
function getThForPlayerNames(players: Player[]) {
  return players.map((player, index) => {
    return <th key={index}>{player.name}</th>;
  });
}

/**
 * Draw <td> for each combinaison for each player
 * @param players Player[]
 * @param combinaisonsLength number
 * @param indexCombinaison number
 */
function getPlayerCombinaisonsRows(players: Player[], combinaisonsLength: number, indexCombinaison: number) {
  return players.map((player, indexPlayer) => {
    const inputId = "input" + indexCombinaison + indexPlayer;
    const totalTdId = "total" + indexPlayer;

    if (indexCombinaison === combinaisonsLength - 1) {
      return (
        <td id={totalTdId} key={indexPlayer}>
          {player.score}
        </td>
      );
    }

    return (
      <td key={indexPlayer}>
        <input
          id={inputId}
          type="number"
          placeholder={player.combinaisons[indexCombinaison].playerPoints.toString()}
          onChange={() => updatePlayerCombinaison(player, indexCombinaison, inputId, totalTdId)}
        />
      </td>
    );
  });
}

/**
 * Draw <tr> for each combinaison for each player
 * @param combinaisons Combinaison[]
 * @param players Player[]
 */
function getTableRows(combinaisons: Combinaison[], players: Player[]) {
  const combinaisonsLength = combinaisons.length;

  return combinaisons.map((combinaison, indexCombinaison) => {
    return (
      <tr key={indexCombinaison}>
        <td>
          {combinaison.name} [{combinaison.pointsText}]
        </td>
        {getPlayerCombinaisonsRows(players, combinaisonsLength, indexCombinaison)}
      </tr>
    );
  });
}

export default function YamsGameTableComponent(props: props) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th></th>
          {getThForPlayerNames(props.players)}
        </tr>
      </thead>
      <tbody>{getTableRows(props.combinaisons, props.players)}</tbody>
    </table>
  );
}
