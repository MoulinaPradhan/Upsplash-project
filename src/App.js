import React from "react";

import { Heading } from "./components/Heading";
import Trending from "./components/Trending";
import Home from "./components/Home";

import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
  }
`;

function App() {
  return (
    <Router>
      <div>
        <Heading />

        <GlobalStyle />

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return <Home {...props} />;
            }}
          />
          <Route path="/trending" component={Trending} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
