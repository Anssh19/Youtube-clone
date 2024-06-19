import React from "react";
import "./NavBar.css";
import lines from "./../../Assests/3lines.png";
import logo from "./../../Assests/Ylogo.png";
import audio from "./../../Assests/audio.png";
import dots from "./../../Assests/dots.png";
import sign from "./../../Assests/sign.png";
import search from "./../../Assests/search.png"

const NavBar = ({setsidebar}) => {
  return (
    <nav className="navmain">
      <div className="lines">
        <img src={lines} onClick={()=>setsidebar(prev=>prev===false?true:false)} alt="logo" className="line" />
        <img src={logo} alt="" className="logo" />
      </div>

      

      <form className="searchbox" role="search">
        <div className="form-group">
          <input type="text" class="form-control" placeholder="Search"></input>
          <button type="button" class="btn-default">
            <img src={search} alt="" className="search" />
          </button>


          <div className="mic">
           <button type="button" className="speakerbtn">
            <img src={audio} alt="" className="micro" />
          </button>
          </div>
        </div>

      </form>

      

      <div className="signin">
        <img src={dots} alt="" className="dot" />
        <button type="button" class="signinbtn">
          <img src={sign} alt="" className="sign" />
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
