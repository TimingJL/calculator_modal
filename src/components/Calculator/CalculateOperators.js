import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  DivideIcon,
  TimesIcon,
  MinusIcon,
  PlusIcon,
  EqualsIcon,
} from "components/Icons";
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
      {[DivideIcon, TimesIcon, MinusIcon, PlusIcon, EqualsIcon].map((Icon) => (
        <CircularButton
          key={Icon}
          content={<Icon />}
          background="#3091fd"
          color="#fff"
        />
      ))}
    </div>
  );
};

export default CalculateOperators;
