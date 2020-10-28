import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularButton from "./CircularButton";

const useStyles = makeStyles(() => ({
  root: {
    gridArea: "calculateOperators",

    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridTemplateRows: "repeat(5, 1fr)",
  },
}));

const CalculateOperators = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {[1, 2, 3, 4, 5].map((item) => (
        <CircularButton
          key={item}
          text={item}
          background="#3091fd"
          color="#fff"
        />
      ))}
    </div>
  );
};

export default CalculateOperators;
