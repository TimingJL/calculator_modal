/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/core/styles";
import Draggable from "react-draggable";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import Zoom from "@material-ui/core/Zoom";

const DRAGGABLE_DIALOG_TITLE_ID = "draggable-dialog-title";
const KEY_BOTTOM_SHEET = "bottom-sheet";
const KEY_DRAGGABLE_MODAL = "draggable-modal";

const SlideUpTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ZoomInTransition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

const DraggableComponent = (props) => {
  return (
    <Draggable
      handle={`#${DRAGGABLE_DIALOG_TITLE_ID}`}
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
};

const PaperComponent = (props) => {
  return <Paper {...props} />;
};

const BottomSheetModal = withStyles(() => ({
  paper: {
    margin: 0,
    position: "absolute",
    bottom: 0,
    borderRadius: 0,
    width: "100%",
    height: "50vh",
  },
}))(Dialog);

const DraggableModal = withStyles(() => ({
  paper: {
    margin: 0,
    borderRadius: 0,
  },
}))(Dialog);

const AdaptiveModal = ({ variant, open, handleClose }) => {
  const modalStylesMapping = {
    [KEY_BOTTOM_SHEET]: BottomSheetModal,
    [KEY_DRAGGABLE_MODAL]: DraggableModal,
  };
  const Modal = modalStylesMapping[variant] || DraggableModal;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      TransitionComponent={
        variant === KEY_DRAGGABLE_MODAL ? ZoomInTransition : SlideUpTransition
      }
      PaperComponent={
        variant === KEY_DRAGGABLE_MODAL ? DraggableComponent : PaperComponent
      }
    >
      <div style={{ cursor: "move" }} id={DRAGGABLE_DIALOG_TITLE_ID}>
        {variant}
      </div>
    </Modal>
  );
};

AdaptiveModal.propTypes = {
  variant: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

AdaptiveModal.defaultProps = {
  variant: "draggable-modal",
  open: false,
  handleClose: () => {},
};

export default AdaptiveModal;
