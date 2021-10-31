import React, { Component } from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { store } from "./store";
import Basket from "./components/Basket/Basket";
import Tree from "./components/Tree/Tree";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Tree />
          <Basket />
        </div>
      </Provider>
    );
  }
}

export default App;
