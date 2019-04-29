import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';

class PostListItem extends Component {
  shouldComponentUpdate(nextProps) {
    console.log(this.props, nextProps);
    return this.props.title !== nextProps.title || this.props.id !== nextProps.id;
  }

  render () {
    return (
      <Col lg={6} sm={12}>
        <h5>{this.props.title}</h5>
        <span>{this.props.body}</span>
      </Col>
    )
  }
}
export default PostListItem