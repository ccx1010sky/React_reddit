import React, { useEffect, useState } from "react";
import ContentList from "../components/ContentList";
import ContentInput from "../components/ContentInput";

const RdContent = () => {
    
  const [posts, setPosts] = useState([]);

useEffect(() => {
    getPosts()      
}, [])
    
  const getPosts = () => {
      console.log("hello getPosts");
    const request = fetch("https://www.reddit.com/r/javascript.json")
    .then(res => res.json())
    .then(res => res.data)
    .then(posts => setPosts(posts))

   
    console.log(request);
    
  };

  return (
    <div>
      <ContentList />
      <ContentInput />
    </div>
  );
};

export default RdContent;
