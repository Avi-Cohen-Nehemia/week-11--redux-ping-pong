import React, { Component } from "react";

class Form extends Component {

    constructor(props) {

        super(props);

        this.state = {
            player1Name: props.player1Name,
            player2Name: props.player2Name,
            winningScore: props.winningScore,
            alternateEvery: props.alternateEvery,
        };

        this.handlePlayer1Name = this.handlePlayer1Name.bind(this);
        this.handlePlayer2Name = this.handlePlayer2Name.bind(this);
        this.handleWinningScore = this.handleWinningScore.bind(this);
        this.handleAlternateEvery = this.handleAlternateEvery.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.props.handleSubmit(this.state);
    }

    render() {
        return(
            <>
                <h1 className="mt-4" style={{ color: "#0275d8" }}>PingPong</h1>
                <form className="mt-4" onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <label htmlFor="player1-name"><strong>Player 1 Name</strong></label>
                        <input
                            type="text"
                            className="form-control"
                            value={ this.state.player1Name }
                            onChange={ this.handlePlayer1Name }
                            id="player1-name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="player2-name"><strong>Player 2 Name</strong></label>
                        <input
                            type="text"
                            className="form-control"
                            value={ this.state.player2Name }
                            onChange={ this.handlePlayer2Name }
                            id="player2-name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="winning-score"><strong>Winning Score</strong></label>
                        <input
                            type="number"
                            className="form-control"
                            value={ this.state.winningScore }
                            onChange={ this.handleWinningScore }
                            id="winning-score"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="alternate"><strong>Alternate Every</strong></label>
                        <input
                            type="number"
                            className="form-control"
                            value={ this.state.alternateEvery }
                            onChange={ this.handleAlternateEvery }
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