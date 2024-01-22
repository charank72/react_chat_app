import React from 'react'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

import './css/chatwindow.scss'

function ChatWindow() {
  return (
    <div className='right-side'>
      <ChatHeader/>
      <ChatMessage/>
      <ChatInput/>
    </div>
  )
}

export default ChatWindow
