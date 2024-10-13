import React from 'react'

const PostHeader = () => {
  return (
    <div className='flex justify-between items-center mb-2'>
      <div className='flex items-center gap-3'>
        <img src="./post.jpg" className='w-6 md:w-9 rounded-[50%] ' alt="" />
        <span className='text-black text-[11px] md:text-[16px] font-medium'>its_me_hossein</span>
        <span className='text-gray-500 text-[11px] md:text-[16px] font-medium'> .1w</span>
      </div>
      <div>
        <button className='text-[#4cb5f7] hover:text-black duration-500 text-[11px] md:text-[16px] font-medium hover:text-[]'>Unfollow</button>
      </div>
    </div>
  )
}

export default PostHeader