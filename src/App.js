import { useState } from "react";
import { ThemeProvider } from "styled-components";

import './App.css';
import Splash from "./components/SplashScreen";


const LightTheme = {
  pageBackground: "#F4F4F4",
  titleColor: "#F6BE00",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "#121212",
  titleColor: "#FFDE00",
  tagLineColor: "lavender"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

function App() {
    const [theme, setTheme] = useState("light")
    return (
      <ThemeProvider theme={themes[theme]}>
        <Splash theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    );
  }

export default App;

