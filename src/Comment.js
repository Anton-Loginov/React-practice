import React from 'react';

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

export default Comment