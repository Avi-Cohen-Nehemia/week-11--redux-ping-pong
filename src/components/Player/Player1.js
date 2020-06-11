import { connect } from "react-redux";
import Player from "./Player";
import { patchScore } from "../../data/actions/api";

const mapStateToProps = (state) => {
    return {
        playerName: state.player1Name ? state.player1Name : "Player 1",
        server: state.serverPlayer1,
        winner: state.winner,
        score: state.player1
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => dispatch(patchScore(1)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Player);