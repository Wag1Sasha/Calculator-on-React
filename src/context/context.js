import React from "react";

export const AppContext = React.createContext();
export const appState = {
  layout: [
    [
      {
        name: "7",
        className: "button",
        type: "number",
      },
      {
        name: "8",
        className: "button",
        type: "number",
      },
      {
        name: "9",
        className: "button",
        type: "number",
      },
      {
        name: "/",
        className: "button operator",
        type: "/",
      },
    ],
    [
      {
        name: "4",
        className: "button",
        type: "number",
      },
      {
        name: "5",
        className: "button",
        type: "number",
      },
      {
        name: "6",
        className: "button",
        type: "number",
      },
      {
        name: "*",
        className: "button operator",
        type: "*",
      },
    ],
    [
      {
        name: "1",
        className: "button",
        type: "number",
      },
      {
        name: "2",
        className: "button",
        type: "number",
      },
      {
        name: "3",
        className: "button",
        type: "number",
      },
      {
        name: "+",
        className: "button operator",
        type: "+",
      },
    ],
    [
      {
        name: ".",
        className: "button",
        type: "number",
      },
      {
        name: "0",
        className: "button",
        type: "number",
      },
      {
        name: "=",
        className: "button",
        type: "equal",
      },
      {
        name: "-",
        className: "button operator",
        type: "-",
      },
    ],
  ],
  firstValue: "",
  secondValue: "",
  operator: "",
  result: "",
  value: "",
};

export const reducer = (state, action) => {
  // console.log("this", { ...state, firstValue: action.value });
  const calculate = (a, b, op) => {
    switch (op) {
      case "-":
        return a - b;
      case "+":
        return a + b;
      case "/":
        return a / b;
      case "*":
        return a * b;
    }
  };
  switch (action.type) {
    case "-":
      return {
        ...state,
        operator: "-",
        value: `${state.firstValue} - `,
      };
    case "*":
      return {
        ...state,
        operator: "*",
        value: `${state.firstValue} * `,
      };
    case "+":
      return {
        ...state,
        operator: "+",
        value: `${state.firstValue} + `,
      };
    case "/":
      return {
        ...state,
        operator: "/",
        value: `${state.firstValue} / `,
      };
    case "equal": {
      return {
        ...state,
        firstValue: "",
        secondValue: "",
        value: calculate(
          parseFloat(state.firstValue),
          parseFloat(state.secondValue),
          state.operator
        ),
        operator: "",
      };
    }
    case "number": {
      if (action.value === ".") {
        if (
          state.firstValue.indexOf(".") > -1 ||
          state.secondValue.indexOf(".") > -1
        ) {
          return state;
        }
        if (state.firstValue === "") {
          return { ...state, firstValue: "0.", value: "0." };
        }
        if (state.secondValue === "" && state.firstValue !== "") {
          return {
            ...state,
            secondValue: "0.",
            value: `${state.firstValue} ${state.operator} 0.`,
          };
        }
      }
      if (action.value === "0" && state.firstValue === "") {
        return { ...state, firstValue: "0.", value: "0." };
      }
      if (
        action.value === "0" &&
        state.firstValue !== "" &&
        state.secondValue === ""
      ) {
        return {
          ...state,
          secondValue: "0.",
          value: `${state.firstValue} ${state.operator} 0.`,
        };
      }
      if (action.value === "0" && state.firstValue === "0") {
        return state;
      }
      if (state.operator === "") {
        return {
          ...state,
          firstValue: state.firstValue + action.value,
          value: state.firstValue + action.value,
        };
      } else {
        return {
          ...state,
          secondValue: state.secondValue + action.value,
          value: `${state.firstValue} ${state.operator} ${
            state.secondValue + action.value
          }`,
        };
      }
    }
    case "clear":
      return {
        ...state,
        value: "",
        operator: "",
        firstValue: "",
        secondValue: "",
      };
  }
};
