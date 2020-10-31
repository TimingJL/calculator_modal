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
  dark: {
    color: {
      primary: "#323334",
      primaryBackground: "#000001",
    },
    calculator: {
      button: {
        numbers: {
          background: "#323334",
          color: "#fff",
        },
        arithmeticOperator: {
          background: "#FCA00B",
          color: "#fff",
        },
        otherOperator: {
          background: "#afafaf",
          color: "#000000",
        },
      },
      background: "#000001",
    },
  },
  blue: {
    color: {
      primary: "#f98c2d",
      primaryBackground: "white",
    },
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

const blueTheme = createMuiTheme({
  ...sharedProperty,
  ...customTheme.blue,
  palette: {},
});

const darkTheme = createMuiTheme({
  ...sharedProperty,
  ...customTheme.dark,
  palette: {
    type: "dark",
  },
});

export { blueTheme, darkTheme };
