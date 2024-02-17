import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";

import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      
      <Routes/>
    </ThemeProvider>
  );
};