import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Calculator from "components/Calculator";
import AdaptiveModal from "components/AdaptiveModal";
import { isMobile } from "react-device-detect";

const MainPage = ({ value }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const variant = isMobile ? "bottom-sheet" : "draggable-modal";
  const handleOnModalOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);
  const handleOnModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div>
      <Button color="primary" onClick={handleOnModalOpen}>
        Open
      </Button>
      <AdaptiveModal
        variant={variant}
        open={isModalOpen}
        handleClose={handleOnModalClose}
        content={<Calculator fullWidth={isMobile} value={value} />}
      />
    </div>
  );
};

MainPage.propTypes = {
  value: PropTypes.number,
};

MainPage.defaultProps = {
  value: 0,
};

const mapStateToProps = (state) => {
  const { value } = state.calculatorReducer;
  return {
    value,
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
