import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import ProfileHeader from '../../components/Profile/ProfileHeader'
import ProfileTabs from '../../components/Profile/ProfileTabs'
import ProfilePosts from '../../components/Profile/ProfilePosts'

const ProfilePage = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='ml-28 md:ml-64 mt-6 container px-16'>
        <ProfileHeader/>
        <ProfileTabs/>
        <ProfilePosts/>
      </div>
    </div>
  )
}

export default ProfilePage