import React, { Component } from "react";

class Form extends Component {

    constructor(props) {

        super(props);

        this.state = {
            player1Name: "",
            player2Name: "",
            winningScore: 21,
            alternateEvery: 5,
        };

        this.handlePlayer1Name = this.handlePlayer1Name.bind(this);
        this.handlePlayer2Name = this.handlePlayer2Name.bind(this);
        this.handleWinningScore = this.handleWinningScore.bind(this);
        this.handleAlternateEvery = this.handleAlternateEvery.bind(this);
    }

    handlePlayer1Name(e) {
        this.setState({ player1Name: e.currentTarget.value });
    }

    handlePlayer2Name(e) {
        this.setState({ player2Name: e.currentTarget.value });
    }

    handleWinningScore(e) {
        this.setState({ winningScore: e.currentTarget.value });
    }

    handleAlternateEvery(e) {
        this.setState({ alternateEvery: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <>
                <h1 style={{ color: "#0275d8" }}>PingPong</h1>
                <form className="mt-4" onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <label for="player1-name"><strong>Player 1 Name</strong></label>
                        <input
                            type="text"
                            className="form-control"
                            value={ this.state.player1Name }
                            id="player1-name"
                        />
                    </div>

                    <div className="form-group">
                        <label for="player2-name"><strong>Player 2 Name</strong></label>
                        <input
                            type="text"
                            className="form-control"
                            value={ this.state.player2Name }
                            id="player2-name"
                        />
                    </div>

                    <div className="form-group">
                        <label for="winning-score"><strong>Winning Score</strong></label>
                        <input
                            type="number"
                            className="form-control"
                            value={ this.state.winningScore }
                            id="winning-score"
                        />
                    </div>

                    <div className="form-group">
                        <label for="alternate"><strong>Alternate Every</strong></label>
                        <input
                            type="number"
                            className="form-control"
                            value={ this.state.alternateEvery }
                            id="alternate"
                        />
                    </div>

                    <button
                        className="btn btn-primary"
                    >
                        Start Game!
                    </button>
                </form>
            </>
        );
    }
}

export default Form;