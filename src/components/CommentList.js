import React, {Component} from 'react';
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Component{
  static defaultProps = {
    comment: [],
  };

  getBody() {
    const {comments, isOpen} = this.props;
    if (!isOpen) return null;

    if (!comments || !comments.length) return <p>No comments yet</p>;

    return(
      <ul>
        {comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
      </ul>
    )
  }
  
  render() {
    const {toggleOpen} = this.props;
    const text = this.props.isOpen ? 'hide comments' : 'show comments';
    return(
      <div>
        <button onClick={toggleOpen}>{text}</button>
        {this.getBody()}
      </div>
    )
  }
}

export default toggleOpen(CommentList);