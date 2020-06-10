import initialState from "./initialState";

const player1 = (state) => ({
    ...state,
    player1: state.player1 + 1
})

const player2 = (state) => ({
    ...state,
    player2: state.player2 + 1
})

const server = (state) => {
    const total = state.player1 + state.player2;
    const serverPlayer1 = state.serverPlayer1;
    const alternateServer = total <= 40 ? (total % 5 === 0 ? !serverPlayer1 : serverPlayer1) : (total % 2 === 0 ? !serverPlayer1 : serverPlayer1)

    return {
        ...state,
        serverPlayer1: alternateServer,
    }
}

const winner = (state) => {
    const player1 = state.player1;
    const player2 = state.player2;

    return {
        ...state,
        winner: player1 >= 21 && player2 <= player1 - 2 ? "1" : "",
        // winner: (player2 + 1) >= 21 && player1 <= player2 - 1 ? "2" : "",
    }
}

const history = (state) => {

    return state.winner === "" ? state : {
        ...state,
        games: [...state.games, {
            player_1: {
                score: state.player1,
                won: state.winner === "1"
            },

            player_2: {
                score: state.player2,
                won: state.winner === "2"
            }
        }]
    }
}

const reducer = (state, action) => {
  
    switch (action.type) {
        case "INCREMENTPLAYER1": return history(winner(server(player1(state))));     
        case "INCREMENTPLAYER2": return history(winner(server(player2(state))));
        case "RESET": return initialState;

        default: return state;
    }
};

export default reducer;