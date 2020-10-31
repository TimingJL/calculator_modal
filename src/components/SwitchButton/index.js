import React from "react";
import PropTypes from "prop-types";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";

const StyledFormControlLabel = withStyles((theme) => {
  const { palette } = theme;
  return {
    root: {
      color: palette.text.primary,
    },
  };
})(FormControlLabel);

const SwitchButton = ({ label, isDarkMode, handleChange }) => {
  return (
    <FormGroup row>
      <StyledFormControlLabel
        control={
          <Switch
            color="primary"
            checked={isDarkMode}
            onChange={handleChange}
            name="modeSwitch"
          />
        }
        label={label}
      />
    </FormGroup>
  );
};

SwitchButton.propTypes = {
  label: PropTypes.string,
};

SwitchButton.defaultProps = {
  label: "",
};

export default SwitchButton;
