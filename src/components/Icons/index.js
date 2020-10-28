/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import plusMinusImagePath from "./plus_minus.png";

const DivideIcon = (props) => (
  <SvgIcon {...props}>
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fal"
      data-icon="divide"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      className="svg-inline--fa fa-divide fa-w-12 fa-2x"
    >
      <path
        fill="currentColor"
        d="M376 232H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h368c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8zM192 336c-26.46 0-48 21.54-48 48s21.54 48 48 48 48-21.54 48-48-21.54-48-48-48zm0-160c26.46 0 48-21.54 48-48s-21.54-48-48-48-48 21.54-48 48 21.54 48 48 48z"
        className=""
      />
    </svg>
  </SvgIcon>
);

const TimesIcon = (props) => (
  <SvgIcon {...props}>
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fal"
      data-icon="times"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      className="svg-inline--fa fa-times fa-w-10 fa-3x"
    >
      <path
        fill="currentColor"
        d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
        className=""
      />
    </svg>
  </SvgIcon>
);

const MinusIcon = (props) => (
  <SvgIcon {...props}>
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fal"
      data-icon="minus"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      className="svg-inline--fa fa-minus fa-w-12 fa-3x"
    >
      <path
        fill="currentColor"
        d="M376 232H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h368c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"
        className=""
      />
    </svg>
  </SvgIcon>
);

const PlusIcon = (props) => (
  <SvgIcon {...props}>
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fal"
      data-icon="plus"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      className="svg-inline--fa fa-plus fa-w-12 fa-3x"
    >
      <path
        fill="currentColor"
        d="M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"
        className=""
      />
    </svg>
  </SvgIcon>
);

const EqualsIcon = (props) => (
  <SvgIcon {...props}>
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fal"
      data-icon="equals"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      className="svg-inline--fa fa-equals fa-w-12 fa-3x"
    >
      <path
        fill="currentColor"
        d="M376 304H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h368c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8zm0-144H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h368c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"
        className=""
      />
    </svg>
  </SvgIcon>
);

const PercentageIcon = (props) => (
  <SvgIcon {...props}>
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fal"
      data-icon="percentage"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      className="svg-inline--fa fa-percentage fa-w-10 fa-3x"
    >
      <path
        fill="currentColor"
        d="M317.66 132.28c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L296.5 153.44l21.16-21.16zM64 224c16.38 0 32.76-6.25 45.25-18.74 24.99-24.99 24.99-65.52 0-90.51C96.76 102.25 80.38 96 64 96s-32.76 6.25-45.26 18.75c-24.99 24.99-24.99 65.52 0 90.51C31.24 217.75 47.62 224 64 224zm-22.62-86.63C47.42 131.33 55.45 128 64 128s16.58 3.33 22.63 9.37c12.48 12.48 12.47 32.78 0 45.25C80.59 188.67 72.55 192 64 192c-8.55 0-16.58-3.33-22.62-9.37-12.48-12.48-12.48-32.78 0-45.26zM256 288c-16.38 0-32.76 6.25-45.26 18.75-24.99 24.99-24.99 65.52 0 90.51C223.24 409.75 239.62 416 256 416s32.76-6.25 45.25-18.74c24.99-24.99 24.99-65.52 0-90.51C288.76 294.25 272.38 288 256 288zm22.63 86.63c-6.04 6.04-14.08 9.37-22.63 9.37-8.55 0-16.58-3.33-22.62-9.37-12.48-12.48-12.48-32.78 0-45.26 6.04-6.04 14.08-9.37 22.62-9.37 8.55 0 16.58 3.33 22.63 9.37 12.48 12.48 12.47 32.78 0 45.26z"
        className=""
      />
    </svg>
  </SvgIcon>
);

const plusMinusStyles = {
  width: 24,
  height: 24,
};

const PlusMinusIcon = (props) => (
  <img src={plusMinusImagePath} alt="" style={plusMinusStyles} {...props} />
);

export {
  DivideIcon,
  TimesIcon,
  MinusIcon,
  PlusIcon,
  EqualsIcon,
  PercentageIcon,
  PlusMinusIcon,
};
