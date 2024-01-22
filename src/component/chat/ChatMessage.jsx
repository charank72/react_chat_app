import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { chatMsg } from '../content/data'

function ChatMessage() {
  const [msg,setmsg]=useState(false)

  useEffect(()=>{
    // setmsg(chatMsg)
  },[])

  if(!msg){
    return(
      <div className="chat-box">
        <div className="blk no-msg">
          <p className="alert">No messages</p>
        </div>
      </div>
    )
  }
  return (
    <div className='chat-box'>
      {
        msg && msg.map((item,index)=>{
          return(
            <div className={item.sen?"message sen":"message rec"} key={index}>
              <p>{item.msg} <br /> <span>{item.time}</span></p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ChatMessage