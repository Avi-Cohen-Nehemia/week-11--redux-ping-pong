import initialState from "./initialState";

const reducer = (state, action) => {
    let player1 = state.player1;
    let player2 = state.player2;
    let total = player1 + player2;
    let server = state.server;
  
    switch (action.type) {
        case "INCREMENTPLAYER1": return{
            ...state,
            player1: player1 + 1,
            server: (total + 1) % 5 === 0 ? !server : server,
            winner: (player1 + 1) === 21 ? "1" : ""
        };
        case "INCREMENTPLAYER2": return{
            ...state,
            player2: player2 + 1,
            server: (total + 1) % 5 === 0 ? !server : server,
            winner: (player2 + 1) === 21 ? "2" : ""
        };
        case "RESET": return initialState;
        default: return state;
    }
};

export default reducer;