const KEY = "calculator";
const INIT = `${KEY}/init`;

const initialState = {
  value: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT:
      return state;

    default:
      return state;
  }
};
