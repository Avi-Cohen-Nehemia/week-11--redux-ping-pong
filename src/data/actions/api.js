import axios from "../../axios";
import { saveGameData } from "./state";

export const postGame = (data) => {
    return (dispatch) => {
        axios.post("/games",{
            player_1: data.player1Name ? data.player1Name : "Player 1",
            player_2: data.player2Name ? data.player2Name : "Player 2",
            winning_score: data.winningScore ? data.winningScore : 21,
            change_serve: data.alternateEvery ? data.alternateEvery : 5
        }).then(({ data }) => {
            dispatch(saveGameData(data.data));
        })
    }
}

export const patchScore = (player) => {
    return (dispatch, getState) => {
        const id = getState().id;

        axios.patch(`games/${id}/score`, {
            player: player
        }).then(({ data }) => {
            dispatch(saveGameData(data.data));
        });
    };
}

export const postGameSameSettings = (data) => {
    return (dispatch, getState) => {
        axios.post("/games",{
            player_1: getState().player1Name,
            player_2: getState().player2Name,
            winning_score: getState().winningScore,
            change_serve: getState().alternateEvery
        }).then(({ data }) => {
            dispatch(saveGameData(data.data));
        })
    }
}