import initialState from "./initialState";

const player1 = (state) => ({
    ...state,
    player1: state.player1 + 1
})

const player2 = (state) => ({
    ...state,
    player2: state.player2 + 1
})

const aim = (state) => state.winningScore;
const total = (state) => state.player1 + state.player2;
const standOff = (state, number) => total(state) >= (number * 2 - 2);
const serverPlayer1 = (state) => state.serverPlayer1;

const normalServe = (state) => {
    return total(state) % state.alternateEvery === 0 ? !serverPlayer1(state) : serverPlayer1(state);
}

// are both players 1 point away from winning
const standOffServe = (state) => {
    return total(state) % 2 === 0 ? !serverPlayer1(state) : serverPlayer1(state);
}

// determain how many points per serve
const server = (state) => {
    return {
        ...state,
        serverPlayer1: standOff(state, aim(state)) ? standOffServe(state) : normalServe(state),
    }
}

// is there a difference of 2 between points
const scoreGap = (state) => {
    return Math.abs(state.player1 - state.player2) >= 2;
}

// has the minimum winning score been reached
const winningScore = (state) => {
    return state.player1 >= aim(state) || state.player2 >= aim(state);
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
const saveGameData = (state, { player_1, player_2, winning_score, change_serve, id }) => {
    return {
        ...state,
        gameID: id,
        player1Name: player_1.name ? player_1.name : "Player 1",
        player2Name: player_2.name ? player_2.name : "Player 2",
        player1: player_1.score,
        player2: player_2.score,
        winningScore: winning_score ? winning_score : 21,
        alternateEvery: change_serve ? change_serve : 5,
    };
}

const reducer = (state, action) => {
  
    switch (action.type) {
        case "SAVE_GAME_DATA": return saveGameData(state, action);
        case "INCREMENTPLAYER1": return history(winner(server(player1(state))));     
        case "INCREMENTPLAYER2": return history(winner(server(player2(state))));
        case "RESET": return {
            ...initialState,
            player1Name: state.player1Name,
            player2Name: state.player2Name,
            winningScore: state.winningScore,
            alternateEvery: state.alternateEvery,
            games: state.games
        }
        default: return state;
    }
};

export default reducer;