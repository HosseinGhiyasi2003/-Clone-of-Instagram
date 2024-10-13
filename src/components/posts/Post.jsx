import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import postImg from "../../assets/post.jpg";

const Post = () => {
  return (
    <div className='w-full mt-8'>
      <PostHeader/>
      <img src={postImg} className='rounded-[10px]' alt="" />
      <PostFooter/>
    </div>
  )
}

export default Post