import { connect } from "react-redux";
import Form from "./Form";

const mapStateToProps = (state) => {
    return {
        player1Name: state.player1Name,
        player2Name: state.player2Name,
        winningScore: state.winningScore,
        alternateEvery: state.alternateEvery
    };
};

export default connect(mapStateToProps)(Form);