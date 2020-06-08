import initialState from "./initialState";

const reducer = (state, action) => {
    const player1 = state.player1;
    const player2 = state.player2;
    const total = player1 + player2;
    const server = state.server;
    // const winner = state.winner;
    // const games = state.games;
    const alternateServer = total <= 40 ? ((total + 1) % 5 === 0 ? !server : server) : ((total + 1) % 2 === 0 ? !server : server)
  
    switch (action.type) {
        case "INCREMENTPLAYER1": return{
            ...state,
            player1: player1 + 1,
            server: alternateServer,
            winner: (player1 + 1) >= 21 && player2 <= player1 - 1 ? "1" : "",
        };
        case "INCREMENTPLAYER2": return{
            ...state,
            player2: player2 + 1,
            server: alternateServer,
            winner: (player2 + 1) >= 21 && player1 <= player2 - 1 ? "2" : "",
        };
        case "RESET": return initialState;
        default: return state;
    }
};

export default reducer;