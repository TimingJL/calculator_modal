/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/core/styles";
import Draggable from "react-draggable";
import Paper from "@material-ui/core/Paper";
import {
  SlideUpTransition,
  ZoomInTransition,
} from "components/TransitionComponents";

const DRAGGABLE_DIALOG_TITLE_ID = "draggable-dialog-title";
const KEY_BOTTOM_SHEET = "bottom-sheet";
const KEY_DRAGGABLE_MODAL = "draggable-modal";

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
  const modalMapping = {
    [KEY_BOTTOM_SHEET]: {
      modal: BottomSheetModal,
      transition: SlideUpTransition,
      paperComponent: DraggableComponent,
    },
    [KEY_DRAGGABLE_MODAL]: {
      modal: DraggableModal,
      transition: ZoomInTransition,
      paperComponent: PaperComponent,
    },
  };
  const selectedMode =
    modalMapping[variant] || modalMapping[KEY_DRAGGABLE_MODAL];
  const Modal = selectedMode.modal;
  const transitionComponent = selectedMode.transition;
  const { paperComponent } = selectedMode;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      TransitionComponent={transitionComponent}
      PaperComponent={paperComponent}
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
  variant: KEY_DRAGGABLE_MODAL,
  open: false,
  handleClose: () => {},
};

export default AdaptiveModal;
