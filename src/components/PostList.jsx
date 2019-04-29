import React, { Component } from 'react';
import PostListItem from './PostListItem.jsx';

class PostList extends Component {

render() {
  var posts = this.props.posts
  .map((post) =>
    <PostListItem 
      title = {post.title}
      body = {post.body}
      key = {post.id}
    />
  )

  return (
      <ul>
          {posts}
      </ul>
  )
}
}

export default PostList;