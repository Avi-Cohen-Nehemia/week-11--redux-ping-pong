import { connect } from "react-redux";
import Form from "./Form";
import { saveSettings } from "../../data/actions";
import history from "../../history";

const mapStateToProps = (state) => {
    return {
        player1Name: state.player1Name,
        player2Name: state.player2Name,
        winningScore: state.winningScore,
        alternateEvery: state.alternateEvery
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: data => {
            dispatch(saveSettings(data));
            history.push("/game");
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);