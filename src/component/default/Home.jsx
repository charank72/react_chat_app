import React from 'react'
import ChatContainer from '../chat/ChatContainer'
import './home.scss'
// import env from 'react-dotenv'
import env from 'react-dotenv'
function Home(props) {
  return (
  <div className='app-body'>
     <ChatContainer/>
     {/* <h1>{env.API_KEY}</h1> */}
  </div>
  )
}

export default Home