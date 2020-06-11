import initialState from "./initialState";

const player1 = (state) => ({
    ...state,
    player1: state.player1 + 1
})

const player2 = (state) => ({
    ...state,
    player2: state.player2 + 1
})

const standOff = (state, number) => {
    return state.player1 + state.player2 >= (number * 2 - 2);
}

const normalServe = (state) => {
    const total = state.player1 + state.player2;
    const serverPlayer1 = state.serverPlayer1;
    return total % state.alternateEvery === 0 ? !serverPlayer1 : serverPlayer1;
}

const standOffServe = (state) => {
    const total = state.player1 + state.player2;
    const serverPlayer1 = state.serverPlayer1;
    return total % 2 === 0 ? !serverPlayer1 : serverPlayer1;
}

const server = (state) => {
    const aim = state.winningScore;
    const alternateServer = standOff(state, aim) ? standOffServe(state) : normalServe(state);

    return {
        ...state,
        serverPlayer1: alternateServer,
    }
}

// is there a difference of 2 between points
const scoreGap = (state) => {
    return Math.abs(state.player1 - state.player2) >= 2;
}

// has the minimum winning score been reached
const winningScore = (state) => {
    const aim = state.winningScore;
    return state.player1 >= aim || state.player2 >= aim;
}

// work out who's won
const getWinner = (state) => {
    return state.player1 > state.player2 ? state.player1Name : state.player2Name;
}

const winner = (state) => {
    return {
        ...state,
        winner: (winningScore(state) && scoreGap(state)) ? getWinner(state) : ""
    }
}

const history = (state) => {

    return state.winner === "" ? state : {
        ...state,
        games: [...state.games, {
            winner: state.winner,

            player_1: {
                score: state.player1,
                won: state.winner === state.player1Name
            },

            player_2: {
                score: state.player2,
                won: state.winner === state.player2Name
            }
        }]
    }
}

// saving the data from the form and setting default
// values in case the inputs were left empty
const saveSettings = (state, action) => {
    return {
        ...state,
        player1Name: action.data.player1Name ? action.data.player1Name : "Player 1",
        player2Name: action.data.player2Name ? action.data.player1Name : "Player 2",
        winningScore: action.data.winningScore !== "" ? action.data.winningScore : 21,
        alternateEvery: action.data.alternateEvery !== "" ? action.data.alternateEvery : 5
    };
}

const reducer = (state, action) => {
  
    switch (action.type) {
        case "SAVE_SETTINGS": return saveSettings(state, action);
        case "INCREMENTPLAYER1": return history(winner(server(player1(state))));     
        case "INCREMENTPLAYER2": return history(winner(server(player2(state))));
        case "RESET": return {
            ...initialState,
            games: state.games
        }
        default: return state;
    }
};

export default reducer;