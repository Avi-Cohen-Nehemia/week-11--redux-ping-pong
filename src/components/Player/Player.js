import React from "react";

const Player = ({ server, score, winner, playerName, handleClick }) => (
    <div className="col-md-6 mt-4">
        <div className={ "card text-center" + (server ? " bg-dark text-white" : "" )}>
            <h5 className="card-header">{ playerName }</h5>
            <div className="card-body">
                <p className="card-text display-1">{ score }</p>
            </div>
            <div className="card-footer">
                <button
                    disabled={ winner }
                    className={ "form-control btn btn-success" + (winner ? " disabled" : "") }
                    onClick={ handleClick }
                >
                    +
                </button>
            </div>
        </div>
    </div>
);

export default Player;