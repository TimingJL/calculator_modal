import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PlusMinusIcon, PercentageIcon } from "components/Icons";
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
      <CircularButton
        content="AC"
        background="#afafaf"
        color="black"
        fontSize={28}
      />
      <CircularButton
        content={<PlusMinusIcon />}
        background="#afafaf"
        color="black"
      />
      <CircularButton
        content={<PercentageIcon />}
        background="#afafaf"
        color="black"
      />
    </div>
  );
};

export default OtherOperator;
