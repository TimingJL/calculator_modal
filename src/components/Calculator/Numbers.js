import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const Numbers = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.integer}>
        {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((item) => (
          <CircularButton
            key={item}
            text={item}
            background="#333333"
            color="#fff"
          />
        ))}
      </div>
      <div className={classes.zero}>
        <CircularButton
          text={0}
          background="#333333"
          color="#fff"
          justifyContent="flex-start"
        />
      </div>
      <div className={classes.decimalPoint}>
        <CircularButton text="." background="#333333" color="#fff" />
      </div>
    </div>
  );
};

export default Numbers;
