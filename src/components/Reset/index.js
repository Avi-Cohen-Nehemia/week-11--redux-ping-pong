import { connect } from "react-redux";
import Reset from "./Reset";
import { postGameSameSettings } from "../../data/actions/api";

const mapDispatchToProps = (dispatch) => {
    return {
        handleReset: () => dispatch(postGameSameSettings()),
    };
};

export default connect(null, mapDispatchToProps)(Reset);