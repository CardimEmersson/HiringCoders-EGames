import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: none;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  html {
    background: var(--black);
  }

  .container-body {
    padding: 0 1rem;
  }

  :root {
    --orange: #f37020;
    --orange-hover: #cf5e19;
    --black: #1e1e1e;
    --gray: #363636;
    --gray-light: #4a4a4a;
    --white: #fff;
    --green: #32cd32;
  }

`;

export { Global };
