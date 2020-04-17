import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";



import PuppyRecipes from "./components/PuppyRecipes";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App () {
  return (
    <div className="App">
      <h1>Pups Favorite Recipes</h1>
      <PuppyRecipes />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);