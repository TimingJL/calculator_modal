import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";

const AdaptiveModal = ({ variant, open, handleClose }) => (
  <div>
    <Dialog
      open={open}
      onClose={handleClose}
      // PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      {variant}
    </Dialog>
  </div>
);

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
