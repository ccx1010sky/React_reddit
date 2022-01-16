import React from "react";
import ListItem from "./ListItem.js";

const ContentList = ({ posts }) => {
  const postItems = posts.map((post, index) => {
    return <ListItem post={post} key={index} />;
  });


  return (
    <div>
      {postItems}
    </div>
  );
};

export default ContentList;