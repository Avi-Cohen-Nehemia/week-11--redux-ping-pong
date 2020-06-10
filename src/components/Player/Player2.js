import { connect } from "react-redux";
import Player from "./Player";
import { handleIncrement2 } from "../../data/actions";

const mapStateToProps = (state) => {
    return {
        playerName: state.player2Name ? state.player2Name : "Player 1",
        server: !state.serverPlayer1,
        winner: state.winner,
        score: state.player2
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => dispatch(handleIncrement2()),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Player);