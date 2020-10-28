import React from "react";
import MainPage from "containers/MainPage";
import { Provider } from "react-redux";
import store from "store";

const App = () => (
  <Provider store={store}>
    <MainPage />
  </Provider>
);

export default App;
