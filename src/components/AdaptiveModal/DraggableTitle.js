import React, { memo } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import DragHandleIcon from "@material-ui/icons/DragHandle";

const useStyles = makeStyles(() => ({
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

const DraggableTitle = ({ titleId, isDraggable }) => {
  const classes = useStyles();
  return (
    <>
      {isDraggable && (
        <div className={classes.draggableTitle}>
          <DragHandleIcon id={titleId} className={classes.draggableIcon} />
        </div>
      )}
    </>
  );
};

DraggableTitle.propTypes = {
  titleId: PropTypes.string,
  isDraggable: PropTypes.bool,
};

DraggableTitle.defaultProps = {
  titleId: "",
  isDraggable: false,
};

export default memo(DraggableTitle);
