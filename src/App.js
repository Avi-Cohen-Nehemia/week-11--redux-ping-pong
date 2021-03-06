import React from "react";
import Player1 from "./components/Player/Player1";
import Player2 from "./components/Player/Player2";
import Winner from "./components/Winner";
import Reset from "./components/Reset";
import Header from "./components/Header";
import GamesTable from "./components/GamesTable";
import { Router, Route, } from "react-router-dom";
import history from "./history";
import Form from "./components/Form";

const App = () => (
    <Router history={ history }>
      
      <Route exact path="/" component={ Form } />

      <Route exact path="/game">
        <Header />

        <div className="row mb-4">
          <Player1 />
          <Player2 />
        </div>

        <Winner />
        <hr/>

        <Reset />
        <hr/>

        <GamesTable />
      </Route>

    </Router>
);

export default App;