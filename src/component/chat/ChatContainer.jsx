import React from 'react'
import ChatWindow from './ChatWindow'
import Sidebar from './Sidebar'
import './css/ChatContainer.scss'
function ChatContainer() {
  return (
    <div className='chat-container'>
      <Sidebar/>
      <ChatWindow/>
    </div>
  )
}

export default ChatContainer