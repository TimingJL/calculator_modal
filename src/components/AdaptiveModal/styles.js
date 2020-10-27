import Dialog from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/core/styles";

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

export { BottomSheetModal, DraggableModal };
