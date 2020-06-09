import React from "react";
import Player1 from "./components/Player/Player1";
import Player2 from "./components/Player/Player2";
import Winner from "./components/Winner";
import Reset from "./components/Reset";
import Header from "./components/Header";

const App = ({ handleIncrement1, handleIncrement2, handleReset, winner }) => (
    <React.Fragment>
        {/* header */}
        <Header/>

        {/* scores */}
        <div className="row mb-4">
          <Player1 handleClick={ handleIncrement1 }/>
          <Player2 handleClick={ handleIncrement2 }/>
        </div>

        {/* winner message */}
        <Winner winner={ winner }/>
        <hr/>

        {/* reset button */}
        <Reset handleClick={ handleReset }/>
    </React.Fragment>
);

export default App;