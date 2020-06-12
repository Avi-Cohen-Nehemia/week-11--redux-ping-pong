import initialState from "./initialState";

/*
const player1 = (state) => ({
    ...state,
    player_1: {
        score: state.player_1.score + 1
    }
})

const player2 = (state) => ({
    ...state,
    player_2: {
        score: state.player_2.score + 1
    }
})

const aim = (state) => state.winning_score;
const total = (state) => state.player_1.score + state.player_2.score;
const standOff = (state, number) => total(state) >= (number * 2 - 2);
const serverPlayer1 = (state) => state.player_1.seving;

const normalServe = (state) => {
    return total(state) % state.change_serve === 0 ? !serverPlayer1(state) : serverPlayer1(state);
}

// are both players 1 point away from winning
const standOffServe = (state) => {
    return total(state) % 2 === 0 ? !serverPlayer1(state) : serverPlayer1(state);
}

// determain how many points per serve
const server = (state) => {
    return {
        ...state,
        player_1: {
            serving: standOff(state, aim(state)) ? standOffServe(state) : normalServe(state),
        } 
    }
}

// is there a difference of 2 points between the players
const scoreGap = (state) => {
    return Math.abs(state.player_1.score - state.player_2.score) >= 2;
}

// has the minimum winning score been reached
const winningScore = (state) => {
    return state.player_1.score >= aim(state) || state.player_2.score >= aim(state);
}

// work out if the game has finished and who won
const gameCompleted = (state) => {
    return !(winningScore(state) && scoreGap(state)) ? state : {
        ...state,
        complete: true,
        player_1: {
            won: state.player_1.score > state.player_2.score,
        },
        player_2: {
            won: state.player_1.score < state.player_2.score
        }
    }
}

const history = (state) => {
    return !state.complete ? state : {
        ...state,
        games: [...state.games, {
            player_1: {
                score: state.player_1.score,
                won: state.player_1.score > state.player_2.score
            },

            player_2: {
                score: state.player_2.score,
                won: state.player_1.score < state.player_2.score
            }
        }]
    }
}
*/

// saving the data from the form and setting default
// values in case the inputs were left empty
const saveGameData = (state, { player_1, player_2, winning_score, change_serve, id }) => {
    return {
        ...state,
        id: id,
        player1Name: player_1.name ? player_1.name : "Player 1",
        player2Name: player_2.name ? player_2.name : "Player 2",
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
        // case "INCREMENTPLAYER1": return history(gameCompleted(server(player1(state))));     
        // case "INCREMENTPLAYER2": return history(gameCompleted(server(player2(state))));
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