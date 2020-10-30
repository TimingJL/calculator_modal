import React, { useState } from "react";
import MainPage from "containers/MainPage";
import { Provider } from "react-redux";
import store from "store";
import { ThemeProvider } from "@material-ui/core/styles";
import { blueTheme } from "theme";

const App = () => {
  const defaultThemeMode = "blue";
  const [themeMode] = useState(defaultThemeMode);
  const theme = {
    blue: blueTheme,
  };
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme[themeMode]}>
        <MainPage />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
