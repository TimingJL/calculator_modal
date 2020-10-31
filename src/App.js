import React, { useState, useCallback, useMemo } from "react";
import MainPage from "containers/MainPage";
import { Provider } from "react-redux";
import store from "store";
import { ThemeProvider } from "@material-ui/core/styles";
import { blueTheme, darkTheme } from "theme";

const App = () => {
  const modes = useMemo(() => ["blue", "dark"], []);
  const defaultThemeMode = modes[0];
  const [themeMode, setThemeMode] = useState(defaultThemeMode);
  const theme = {
    blue: blueTheme,
    dark: darkTheme,
  };

  const handleOnSetThemeMode = useCallback(() => {
    setThemeMode((prevMode) => {
      const currentIndex = modes.indexOf(prevMode);
      const nextIndex = (currentIndex + 1) % modes.length;
      return modes[nextIndex];
    });
  }, [modes]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme[themeMode]}>
        <MainPage
          themeMode={themeMode}
          handleOnSetThemeMode={handleOnSetThemeMode}
        />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
