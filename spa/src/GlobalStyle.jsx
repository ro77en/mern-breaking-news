import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  box-sizing: border-box;
  font-family: NewsReader, Arial;
}

html {
  width: auto;
}

body {
  margin: 0;
  max-width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
}
`;
