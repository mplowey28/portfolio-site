import { BrowserRouter as Router } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Home from './pages'

const GlobalStyles = createGlobalStyle`
  html {
    --color-text: #18A2D9;
    --color-background: black;
    --color-highlight: #FFF;
  }

  h1 {
  font-size: 2.5rem;
  color: #f7f7f6;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top: 40px;
  }
  }
`

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Home />
    </Router>
  )
}

export default App
