import React, { useState, useCallback } from "react";
import Button from "@material-ui/core/Button";
import Calculator from "components/Calculator";
import AdaptiveModal from "components/AdaptiveModal";
import { isMobile } from "react-device-detect";

const MainPage = () => {
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
        content={<Calculator fullWidth={isMobile} />}
      />
    </div>
  );
};

export default MainPage;
