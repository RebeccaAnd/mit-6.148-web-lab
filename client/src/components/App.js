import React from "react";
import NavBar from "./modules/NavBar.js";
import Profile from "./pages/Profile.js";
import Feed from "./pages/Feed.js";
// TODO (step5): import Router and NotFound
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";

// To use styles, import the necessary CSS files
import "../utilities.css";
import "./App.css";

/**
 * Define the "App" component as a class.
 */
 const App = () => {
  return (
    // <> is like a <div>, but won't show
    // up in the DOM tree
    <>
      <NavBar />
      <div className="App-container">
        {/* <Profile /> */}
        <Router>
          <Feed path="/" />
          <Profile path="/profile/" />
          <NotFound default />
        </Router>
        {/* TODO (step5): use Router to route between pages */}
        
      </div>
    </>
  );
};

export default App;
