import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import {chatList} from '../content/data'
import './css/userList.scss'
function UserList() {
  const [user,setUser]=useState(false);

  const context=useContext(AuthContext)
  useEffect(()=>{
    // setUser(chatList);
  })

  if(!user){
    return(
      <div className="chat-list">
        <div className="blk no-user">
        <p className='info'>Search for users</p>
        <p className="alert">No user</p>
        {/* <p>{context.currentUser}</p> */}
      </div>
      </div>
    )
  }
  return (
   <div className='chat-list'>
      {
        user && user.map((item,index)=>{
          return (
            <div className={item.unread?"blk unread":"blk"} key={index}>
              <div className="imgbx">
                <img src={item.image} alt="no image"  />
              </div>
              <div className="details">
                <div className="listhead">
                  <h4>{item.name}</h4>
                  <p className="time">{item.chat_time}</p>
                </div>
                <div className="message_p">
                  <p>{item.chat_content}</p>
                </div>
              </div>
            </div>
          )
        })
      }
   </div>
  )
}

export default UserList
