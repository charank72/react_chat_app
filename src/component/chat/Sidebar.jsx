import React from 'react'
import HeaderMenu from './HeaderMenu'
import SearchUser from './SearchUser'
import UserList from './UserList'
import './css/sidebar.scss'

function Sidebar() {
  return (
    <div className='left-side'>
      <HeaderMenu/>
      <SearchUser/>
      <UserList/>
    </div>
  )
}

export default Sidebar