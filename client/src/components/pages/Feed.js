import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
// TODO (step2): import SingleStory
import SingleStory from "../modules/SingleStory.js";
// TODO (step4): import NewStory
// TODO (step6): remove SingleStory import, import Card

const Feed = () => {
  // TODO (step1): define state to hold stories
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // TODO (step1): implement a GET call to retrieve stories,
    // and assign it to state
    get("/api/stories").then((storyObjs) => {
      setStories(storyObjs);
    });
  }, []);

  return <div>
    {JSON.stringify(stories)}
  </div>;
  // TODO (step1): render the raw stories data from state
  // TODO (step2): render a SingleStory with hardcoded props

  // TODO (step3): map the state to SingleStory components
  // TODO (step4): add in the NewStory component
  // TODO (step6): use Card instead of SingleStory
};

export default Feed;
