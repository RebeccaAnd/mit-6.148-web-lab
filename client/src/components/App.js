import React from "react";
import NavBar from "./modules/NavBar.js";
import Profile from "./pages/Profile.js";
// TODO (step0): import Feed
import Feed from "./pages/Feed.js";
// TODO (step5): import Router and NotFound

// To use styles, import the necessary CSS files
import "../utilities.css";
import "./App.css";

/**
 * Define the "App" component as a function.
 */
const App = () => {
  return (
    // <> is like a <div>, but won't show
    // up in the DOM tree
    <>
      <NavBar />
      <div className="App-container">
        {/* <Profile /> */}
        {/* TODO (step0): render Feed instead of Profile */}
        <Feed />
        {/* TODO (step5): use Router to route between pages */}
      </div>
    </>
  );
};

export default App;
