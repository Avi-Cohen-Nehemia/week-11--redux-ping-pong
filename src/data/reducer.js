// creating/updating a game
const saveGameData = (state, { player_1, player_2, winning_score, change_serve, id }) => {
    return {
        ...state,
        gameID: id,
        player1Name: player_1.name,
        player2Name: player_2.name,
        player1: player_1.score,
        player2: player_2.score,
        winningScore: winning_score,
        alternateEvery: change_serve,
        serverPlayer1: player_1.serving,
        winner: player_1.won ? player_1.name : (player_2.won ? player_2.name : "")
    };
}

const reducer = (state, action) => {
  
    switch (action.type) {
        case "SAVE_GAME_DATA": return saveGameData(state, action);
        default: return state;
    }
};

export default reducer;