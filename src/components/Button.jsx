import React from "react";
import "./Button.css";
import { AppContext } from "../context/context";

export default function Button({ name, className, type }) {
  const { state, dispatch } = React.useContext(AppContext);
  return (
    <div
      className={className}
      onClick={() => {
        dispatch({ value: name, type });
      }}
    >
      {name}
    </div>
  );
}
