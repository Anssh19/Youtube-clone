import React from 'react'
import "./Home.css"
import SideBar from "./../../SideBar/SideBar"
import Feed from '../../Feed/Feed'

const Home = ({sidebar}) => {
  return (
    <div style={{
      display:"flex"
    }}>
      <SideBar sidebar={sidebar}/>
      <div className={`container ${sidebar?"":'Main-container'}`}>
        <Feed/>
      </div>
    </div>
  )
}

export default Home
