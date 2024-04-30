import React from 'react'
import Background from "../../assets/background.png";

const Comment = () => {
  return (
    <div className="comment flex mb-3">
            <div className="image">
                <img src={Background} alt="" className='w-12 rounded-lg' />
            </div>
            <div className="comment-details ml-3">
                <p><span><a href="#" className='text-blue-800'>Some name</a></span> This post is great!</p>
                <div>
                    <a href="#" className='text-blue-800'>Remove</a>
                    <a href="#" className='pl-2 text-blue-800'>Reply</a>
                </div>
            </div>
        </div>
  )
}

export default Comment