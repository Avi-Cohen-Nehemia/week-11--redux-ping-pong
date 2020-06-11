import { connect } from "react-redux";
import GamesTable from "./GamesTable";

const mapStateToProps = (state) => {
    return {
        games: state.games,
        player1Name: state.player1Name,
        player2Name: state.player2Name
    };
};

export default connect(mapStateToProps)(GamesTable);