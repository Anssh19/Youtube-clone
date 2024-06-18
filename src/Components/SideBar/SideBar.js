import React from 'react'
import "./SideBar.css"
import Home from './../../Assests/Home.png'
import Music from './../../Assests/Music.png'
import Game from './../../Assests/Game.png'
import Sports from './../../Assests/Sports.png'
import News from './../../Assests/News.png'
import Podcast from './../../Assests/Podcast.png'


const SideBar = () => {
  return (
    <div>
      <div className="mainsidebar">
        <div className="shorcut-links">
          <div className="links">
             <img src={Home} alt="" /><p>Home</p>
          </div>
        <div className="links">
             <img src={Music} alt="" /><p>Music</p>
          </div>
          <div className="links">
             <img src={Game} alt="" /><p>Gaming</p>
          </div>
          <div className="links">
             <img src={Podcast}  width={50} alt="" /><p>Podcasts</p>
          </div>
          <div className="links">
             <img src={Sports} alt="" /><p>Sports</p>
          </div>
          <div className="links">
             <img src={News} alt="" /><p>News</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
