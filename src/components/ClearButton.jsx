import React from "react";
import "./ClearButton.css";
import { AppContext } from "../context/context";

export default function ClearButton({ name }) {
  const { state, dispatch } = React.useContext(AppContext);
  return (
    <div
      className="clearButton"
      onClick={() => {
        dispatch({ type: "clear" });
      }}
    >
      {name}
    </div>
  );
}
