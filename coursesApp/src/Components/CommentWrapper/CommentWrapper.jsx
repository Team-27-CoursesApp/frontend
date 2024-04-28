import React from 'react'
import Comment from '../Comment/Comment'

const CommentWrapper = () => {
  return (
    <div className='comments-wrapper'>
        <h2 className='text-2xl bold mb-2'>Comments</h2>
        <div className='bg-slate-300 p-3'>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    </div>
  )
}

export default CommentWrapper