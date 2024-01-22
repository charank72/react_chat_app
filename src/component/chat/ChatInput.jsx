import React from 'react'
import { useContext } from 'react';
import { useRef } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import './css/chatInput.scss'
function ChatInput() {


  const context=useContext(AuthContext)
  const fname=useRef();

  const handler=()=>{
    context.click(fname.current.value)
  }
  return (
    <div className='chat-input'>
      {/* <div className='plus-icons'>
        <i class="bi bi-emoji-smile"></i>
        <i class="bi bi-paperclip"></i>
      </div>
      <div>
        <input type="text" placeholder='Type a message' autoFocus/>
      </div>
      <div className='inp-icons'>
        <i class="bi bi-mic"></i>
      </div> */}
      <div className="plus-icon">
        <i className='bi bi-plus'></i>
      </div>
      <div className="input-box">
        <i className="bi bi-emoji-smile"></i>
        <input type="text" name="" id="" ref={fname} />
      </div>
      <div className="send-icon">
        <i onClick={handler} className="bi bi-send"></i>
      </div>
    </div>
  )
}

export default ChatInput