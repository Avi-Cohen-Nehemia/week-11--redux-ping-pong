import { connect } from "react-redux";
import Player from "./Player";
import { handleIncrement1 } from "../../data/actions";

const mapStateToProps = (state) => {
    return {
        playerName: "Player 1",
        server: state.serverPlayer1,
        winner: state.winner,
        score: state.player1
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => dispatch(handleIncrement1()),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Player);