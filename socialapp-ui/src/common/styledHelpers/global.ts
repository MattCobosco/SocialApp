import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { colorPalette } from "./colorPalette";
export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    font-size: 16px;
    }
  html {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${colorPalette.grey80};
  }
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #root {
    width: 1920px;
  }
`;