import React, { useEffect, useState } from "react";
import ContentList from "../components/ContentList";
import ContentInput from "../components/ContentInput";

const RdContent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(); //execute to get the API
  }, []); //set to [] to be non-change data

  const getPosts = () => {
    console.log("hello getPosts");
    const request = fetch("https://www.reddit.com/r/javascript.json")
      .then((res) => res.json()) //get the json,res can be banana
      .then((res) => res.data.children)  // get the data by layer,res can be banana
      .then((posts) => setPosts(posts)); // update the data 

    console.log(request);
  };

  const addComment = (submittedComment) => {
    submittedComment.id = Date.now();
    const updatedComments = [...posts, submittedComment];
    setPosts(updatedComments);
  };

  return (
      <div>
        <h2>Post Something ...</h2>
        <ContentInput onPostSubmit={(comment) => addComment(comment)} />
        <br />
        <br />

      <h2>Post List</h2>
      <ContentList posts = {posts} />

    </div>
  );
};

export default RdContent;
