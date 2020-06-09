import initialState from "./initialState";

const reducer = (state, action) => {
    const player1 = state.player1;
    const player2 = state.player2;
    const total = player1 + player2;
    const serverPlayer1 = state.serverPlayer1;
    const winner = state.winner;
    const games = state.games;
    const alternateServer = total <= 40 ? ((total + 1) % 5 === 0 ? !serverPlayer1 : serverPlayer1) : ((total + 1) % 2 === 0 ? !serverPlayer1 : serverPlayer1)
  
    switch (action.type) {
        case "INCREMENTPLAYER1": return{
            ...state,
            player1: player1 + 1,
            serverPlayer1: alternateServer,
            winner: (player1 + 1) >= 21 && player2 <= player1 - 1 ? "1" : "",
        };
        
        case "INCREMENTPLAYER2": return{
            ...state,
            player2: player2 + 1,
            serverPlayer1: alternateServer,
            winner: (player2 + 1) >= 21 && player1 <= player2 - 1 ? "2" : "",
        };

        case "RESET": return {
            ...initialState,
            games: [...games, {
                player_1: {
                    score: player1,
                    won: winner === "1"
                },

                player_2: {
                    score: player2,
                    won: winner === "2"
                }
            }]
        };

        default: return state;
    }
};

export default reducer;