import React from "react";
import LikeCounter from "./LikeCounter";
import "./App.css";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";

function App() {
  return (
    <div>
      <Provider store={Store}>
        <LikeCounter />
      </Provider>
    </div>
  );
}

export default App;