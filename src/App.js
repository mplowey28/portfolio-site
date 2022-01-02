import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Home from "./pages";

const GlobalStyles = createGlobalStyle`
  html {
    --color-text: #18A2D9;
    --color-background: black;
    --color-highlight: #00dfff;
  }
`;

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Home />
    </Router>
  );
};

export default App;
