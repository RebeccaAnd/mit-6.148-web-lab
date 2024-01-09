import React from "react";
import "./CatHappiness.css";

/**
 * Component that renders cat happiness
 * CatHappiness.js -> 来获取传递给它的值
 * Props
 * @param {int} catHappiness is how happy your cat is
 */
const CatHappiness = (props) => {
  return (
    <div className="CatHappiness-container">
      <div className="CatHappiness-story">
        <p className="CatHappiness-storyContent">{props.catHappiness}
          {/* TODO Step 1d: display happiness counter prop here! */}
        </p>
      </div>
    </div>
  );
};

export default CatHappiness;
