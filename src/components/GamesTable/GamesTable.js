import React from "react";

const GamesTable = ({ games }) => (
    <table className="table mt-3 justify-content-center">
        <thead className="thead-dark">
            <tr>
                <th scope="col">Player 1</th>
                <th scope="col">Player 2</th>
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