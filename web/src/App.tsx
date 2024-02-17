import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";

import { Routes } from "./routes";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes/>
    </ThemeProvider>
  );
};