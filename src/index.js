import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./data/store";
import { Provider } from "react-redux";

let state = store.getState();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App
        score={ state }
        handleIncrement1={ () => store.dispatch({type: "INCREMENTPLAYER1"}) }
        handleIncrement2={ () => store.dispatch({type: "INCREMENTPLAYER2"}) }
        handleReset={ () => store.dispatch({type: "RESET"}) }
        server={ state.server }
        winner={ state.winner }
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();