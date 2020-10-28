import React from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import Paper from "@material-ui/core/Paper";
import {
  SlideUpTransition,
  ZoomInTransition,
} from "components/TransitionComponents";
import { makeStyles } from "@material-ui/core/styles";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import { BottomSheetModal, DraggableModal } from "./styles";

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
  },
  draggableTitle: {
    width: "100%",
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  draggableIcon: {
    cursor: "move",
  },
}));

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

const AdaptiveModal = ({ variant, open, handleClose, content }) => {
  const classes = useStyles();
  const modalMapping = {
    [KEY_BOTTOM_SHEET]: {
      modal: BottomSheetModal,
      transitionComponent: SlideUpTransition,
      paperComponent: PaperComponent,
    },
    [KEY_DRAGGABLE_MODAL]: {
      modal: DraggableModal,
      transitionComponent: ZoomInTransition,
      paperComponent: DraggableComponent,
    },
  };
  const selectedMode =
    modalMapping[variant] || modalMapping[KEY_DRAGGABLE_MODAL];
  const Modal = selectedMode.modal;
  const { transitionComponent, paperComponent } = selectedMode;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      TransitionComponent={transitionComponent}
      PaperComponent={paperComponent}
    >
      {variant === KEY_DRAGGABLE_MODAL && (
        <div className={classes.draggableTitle}>
          <DragHandleIcon
            id={DRAGGABLE_DIALOG_TITLE_ID}
            className={classes.draggableIcon}
          />
        </div>
      )}
      {content}
    </Modal>
  );
};

AdaptiveModal.propTypes = {
  variant: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  content: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
  ]),
};

AdaptiveModal.defaultProps = {
  variant: KEY_DRAGGABLE_MODAL,
  open: false,
  handleClose: () => {},
  content: null,
};

export default AdaptiveModal;
