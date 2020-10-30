/* eslint-disable import/prefer-default-export */
import { createMuiTheme } from "@material-ui/core/styles";

const sharedProperty = {
  calculator: {},
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
