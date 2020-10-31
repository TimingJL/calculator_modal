/* eslint-disable import/prefer-default-export */
import { createMuiTheme } from "@material-ui/core/styles";

const sharedProperty = {
  color: {
    teachesOrange: "#f98c2d",
  },
  boxShadow: {
    default: "0 1px 6px rgba(32,33,36,.28)",
  },
};

const customTheme = {
  blue: {
    calculator: {
      button: {
        numbers: {
          background: "#333333",
          color: "#fff",
        },
        arithmeticOperator: {
          background: "#3091fd",
          color: "#fff",
        },
        otherOperator: {
          background: "#afafaf",
          color: "#000000",
        },
      },
      background: "linear-gradient(#84baff, #0b0e1c)",
    },
  },
};

export const blueTheme = createMuiTheme({
  ...sharedProperty,
  ...customTheme.blue,
  palette: {},
});
