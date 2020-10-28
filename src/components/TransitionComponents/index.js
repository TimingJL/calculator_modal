import React from "react";
import Slide from "@material-ui/core/Slide";
import Zoom from "@material-ui/core/Zoom";

const SlideUpTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ZoomInTransition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

export { SlideUpTransition, ZoomInTransition };
