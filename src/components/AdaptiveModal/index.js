/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import Paper from "@material-ui/core/Paper";
import {
  SlideUpTransition,
  ZoomInTransition,
} from "components/TransitionComponents";
import { BottomSheetModal, DraggableModal } from "./styles";

const DRAGGABLE_DIALOG_TITLE_ID = "draggable-dialog-title";
const KEY_BOTTOM_SHEET = "bottom-sheet";
const KEY_DRAGGABLE_MODAL = "draggable-modal";

const DraggableComponent = (props) => (
  <Draggable
    handle={`#${DRAGGABLE_DIALOG_TITLE_ID}`}
    cancel={'[class*="MuiDialogContent-root"]'}
  >
    <Paper {...props} />
  </Draggable>
);

const PaperComponent = (props) => <Paper {...props} />;

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
