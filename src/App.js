import React from "react";
import Player1 from "./components/Player/Player1";
import Player2 from "./components/Player/Player2";
import Winner from "./components/Winner";
import Reset from "./components/Reset";
import Header from "./components/Header";
import GamesTable from "./components/GamesTable";

const App = () => (
    <React.Fragment>
        {/* header */}
        <Header />

        {/* scores */}
        <div className="row mb-4">
          <Player1 />
          <Player2 />
        </div>

        {/* winner message */}
        <Winner />
        <hr/>

        {/* reset button */}
        <Reset />
        <hr/>

        {/* games record */}
        <GamesTable />
        
    </React.Fragment>
);

export default App;