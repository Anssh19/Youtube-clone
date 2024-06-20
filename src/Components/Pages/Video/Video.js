import React from 'react'
import './Video.css'
import Videoplayer from '../../Videoplayer/Videoplayer'
import Recvideo from '../../Recvideo/Recvideo'

const Video = () => {
  return (
    <div className='video-container'>
      <Videoplayer/>
      <Recvideo/>
    </div>
  )
}

export default Video
