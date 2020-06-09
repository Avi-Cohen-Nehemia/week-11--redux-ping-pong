import { connect } from "react-redux";
import GamesTable from "./GamesTable";

const mapStateToProps = (state) => {
    return {
        games: state.games,
    };
};

export default connect(mapStateToProps)(GamesTable);