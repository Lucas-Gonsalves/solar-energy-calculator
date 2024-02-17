import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background: ${props => props.theme.colors["white-100"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area {
    font-size: ${props => props.theme["font-size"].md};
    font-family: ${props => props.theme["font-family"].default};
    font-weight: ${props => props.theme["font-weight"].default};
    color: ${props => props.theme.colors["gray-300"]};
  }
`;