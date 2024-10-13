import React from 'react'

import { BsGrid3X3 } from 'react-icons/bs'
const ProfileTabs = () => {
  return (
    <div className='w-full border-t-2 border-gray-400'>
      <span className='flex justify-center items-center text-white font-medium mt-2 gap-1 cursor-pointer'><BsGrid3X3 /> Posts</span>
    </div>
  )
}

export default ProfileTabs