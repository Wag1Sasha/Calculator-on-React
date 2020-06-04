import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import Row from "./components/Row";
import { AppContext, reducer, appState } from "./context/context";

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, appState);
  // console.log("appstate = ", appState);
  // console.log("state = ", state);
  return (
    <AppContext.Provider value={{ dispatch, state }}>
      <div className="app">
        <h1>Calculator</h1>
        <div className="calc-wrapper">
          <Input value={state.value} />
          {state.layout.map((v) => (
            <Row row={v} />
          ))}
          <div className="row">
            <ClearButton name="Clear" />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}
