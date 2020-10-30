import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CircularButton from "./CircularButton";

const useStyles = makeStyles(() => ({
  root: {
    gridArea: "numbers",

    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    gridTemplateAreas: `
      "integer integer integer"
      "integer integer integer"
      "integer integer integer"
      "zero zero decimalPoint"
    `,
  },
  integer: {
    gridArea: "integer",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
  },
  zero: {
    gridArea: "zero",
  },
  decimalPoint: {
    gridArea: "decimalPoint",
  },
}));

const Numbers = ({ handleOnClick }) => {
  const classes = useStyles();
  const {
    calculator: {
      button: { numbers },
    },
  } = useTheme();
  return (
    <div className={classes.root}>
      <div className={classes.integer}>
        {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((item) => (
          <CircularButton
            key={item}
            content={item}
            background={numbers.background}
            color={numbers.color}
            handleOnClick={() => handleOnClick(item, "number")}
          />
        ))}
      </div>
      <div className={classes.zero}>
        <CircularButton
          content={0}
          background={numbers.background}
          color={numbers.color}
          justifyContent="flex-start"
          handleOnClick={() => handleOnClick(0, "number")}
        />
      </div>
      <div className={classes.decimalPoint}>
        <CircularButton
          content="."
          background={numbers.background}
          color={numbers.color}
          handleOnClick={() => handleOnClick(".", "decimalPoint")}
        />
      </div>
    </div>
  );
};

Numbers.propTypes = {
  handleOnClick: PropTypes.func,
};

Numbers.defaultProps = {
  handleOnClick: () => {},
};

export default Numbers;
