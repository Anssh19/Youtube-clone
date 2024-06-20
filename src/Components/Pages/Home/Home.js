import React, { useState } from 'react'
import "./Home.css"
import SideBar from "./../../SideBar/SideBar"
import Feed from '../../Feed/Feed'

const Home = ({sidebar}) => {

  const [category , setCategory] = useState(0);


  return (
    <div style={{
      display:"flex"
    }}>
      <SideBar sidebar={sidebar} category={category} setCategory={setCategory}/>
      <div className={`container ${sidebar?"":'Main-container'}`}>
        <Feed category={category}/>
      </div>
    </div>
  )
}

export default Home
