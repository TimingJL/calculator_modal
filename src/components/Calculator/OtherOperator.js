import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularButton from "./CircularButton";

const useStyles = makeStyles(() => ({
  root: {
    gridArea: "other",

    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(1, 1fr)",
  },
}));

const OtherOperator = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {["a", "b", "c"].map((item) => (
        <CircularButton
          key={item}
          text={item}
          background="#afafaf"
          color="black"
        />
      ))}
    </div>
  );
};

export default OtherOperator;
