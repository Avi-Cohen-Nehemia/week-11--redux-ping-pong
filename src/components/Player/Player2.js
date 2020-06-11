import { connect } from "react-redux";
import Player from "./Player";
import { patchScore } from "../../data/actions/api";

const mapStateToProps = (state) => {
    return {
        playerName: state.player2Name ? state.player2Name : "Player 2",
        server: !state.serverPlayer1,
        winner: state.winner,
        score: state.player2
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => dispatch(patchScore(2)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Player);