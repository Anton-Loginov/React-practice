import React from 'react';
import PropTypes from 'prop-types';

function Comment({comment}) {
  return(
    <div className={'comment__container'}>
      <p className={'comment__text'}>
        {comment.text}
        <span className={'comment__user'}>
          {comment.user}
        </span>
      </p>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape = ({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired
};

export default Comment