import React, {Component} from 'react';

class PostListItem extends Component {
  shouldComponentUpdate(nextProps) {
    console.log(this.props, nextProps);
    return this.props.title !== nextProps.title || this.props.id !== nextProps.id;
  }

  render () {
    return (
      <li>
        <h5>{this.props.title}</h5>
        <span>{this.props.body}</span>
      </li>
    )
  }
}
export default PostListItem