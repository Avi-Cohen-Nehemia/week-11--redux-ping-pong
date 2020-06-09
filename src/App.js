import React from "react";

const App = ({ score, handleIncrement1, handleIncrement2, handleReset, server, winner }) => (
    <React.Fragment>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        {/* scores */}
        <div className="row mb-4">
            <div className="col-md-6 mt-4">
                <div className={ "card text-center" + (server ? " bg-dark text-white" : "" )}>
                    <h5 className="card-header">Player 1</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ score.player1 }</p>
                    </div>
                    <div className="card-footer">
                        <button
                          disabled={ winner ? true : false }
                          className={ "form-control btn btn-success" + (winner ? " disabled" : "") }
                          onClick={ handleIncrement1 }
                        >
                          +
                        </button>
                    </div>
                </div>
            </div>

            <div className="col-md-6 mt-4">
                <div className={ "card text-center" + (!server ? " bg-dark text-white" : "" )}>
                    <h5 className="card-header">Player 2</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ score.player2 }</p>
                    </div>
                    <div className="card-footer">
                        <button
                          disabled={ winner ? true : false }
                          className={ "form-control btn btn-success" + (winner ? " disabled" : "") }
                          onClick={ handleIncrement2 }
                        >
                          +
                        </button>
                    </div>
                </div>
            </div>
        </div>

        { /* winner message */}
        { winner ?
          <h2 className="alert alert-success">Player { winner } wins!</h2>
        : null
        }
        <hr />

        { /* reset button */}
        <button
          className="btn btn-danger"
          onClick={ handleReset }
        >
          Reset
        </button>
    </React.Fragment>
);

export default App;