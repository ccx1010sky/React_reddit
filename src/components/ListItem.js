import React from 'react'

const ListItem = ({ post }) => {
  const user_link= `https://www.reddit.com/user/${post.data.author}/`;

  return (
    <div>

      <p className="username">
        Posted by <br />
        <a className="username" href={user_link}>
          u/{post.data.author}
        </a>
      </p>

      <h2 className="caption">{post.data.title}</h2>

      <div className="post">
        <img className="picture" src={post.data.url} width="100px" />
      </div>
    </div>
  );
};

export default ListItem;