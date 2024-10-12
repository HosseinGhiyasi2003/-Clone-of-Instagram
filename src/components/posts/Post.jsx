import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

const Post = () => {
  return (
    <div className='w-full mt-8'>
      <PostHeader/>
      <img src="./post.jpg" className='rounded-[10px]' alt="" />
      <PostFooter/>
    </div>
  )
}

export default Post