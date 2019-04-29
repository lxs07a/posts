import React, { Component } from 'react';
import PostListItem from './PostListItem.jsx';
import Row from 'react-bootstrap/Row';

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
    <Row>
          {posts}
    </Row>
  )
}
}

export default PostList;