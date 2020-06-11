import React from "react";

const GamesTable = ({ games, player1Name, player2Name }) => (
    <table className="table mt-3 justify-content-center">
        <thead className="thead-dark">
            <tr>
                <th scope="col">{ `${player1Name}'s score` }</th>
                <th scope="col">{ `${player2Name}'s score` }</th>
                <th scope="col">Winner</th>
            </tr>
        </thead>
        <tbody>
        { games.map((game, index) => (
            <tr key={ index }>
                <td>{ game.player_1.score }</td>
                <td>{ game.player_2.score }</td>
                <td>{ game.winner }</td>
            </tr>
        )) }
        </tbody>
    </table>
);

export default GamesTable;