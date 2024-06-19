import React from "react";
import "./SideBar.css";
import Home from "./../../Assests/Home.png";
import Music from "./../../Assests/Music.png";
import Game from "./../../Assests/Game.png";
import Sports from "./../../Assests/Sports.png";
import News from "./../../Assests/News.png";
import Podcast from "./../../Assests/Podcast.png";
import Shorts from "./../../Assests/shorts.png";
import Subscription from "./../../Assests/subscription.png";
import You from "./../../Assests/you.png";
import History from "./../../Assests/history.png";
import sign from "./../../Assests/sign.png";
import Movies from "./../../Assests/movies.png";
import Courses from "./../../Assests/courses.png";
import Live from "./../../Assests/live.png";
import Premium from "./../../Assests/premium.png";
import YMusic from "./../../Assests/youtube music.png";
import YKids from "./../../Assests/Youtube kids.png";
import Settings from "./../../Assests/settings.png";
import Help from "./../../Assests/help.png";
import Feedback from "./../../Assests/feedback.png";

const SideBar = ({ sidebar }) => {
  return (
    <div className={`mainsidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shorcut-links">
        <div className="links">
          <img src={Home} alt="" />
          <p>Home</p>
        </div>
        <div className="links">
          <img src={Shorts} alt="" />
          <p>Shorts</p>
        </div>
        <div className="links">
          <img src={Subscription} alt="" />
          <p>Subscription</p>
        </div>
        {sidebar === true && <hr />}
        <div className="links">
          <img src={You} alt="" />
          <p>You</p>
        </div>
        <div className="links">
          <img src={History} alt="" />
          <p>History</p>
        </div>
        {sidebar === true && <hr />}

        <div className="unlinks">
          <p>Sign in to like videos, comment, and subscribe.</p>
          <div className="signin">
            <button type="button" className="signinbtn">
              <img src={sign} alt="" className="sign" />
              Sign In
            </button>
          </div>
        </div>
        {sidebar === true && <hr />}
        <div className="explore">
          <h4>Explore</h4>
        </div>
        <div className="unlinks">
          <img src={Music} alt="" />
          <p>Music</p>
        </div>
        <div className="unlinks">
          <img src={Game} alt="" />
          <p>Gaming</p>
        </div>
        <div className="unlinks">
          <img src={Podcast} width={50} alt="" />
          <p>Podcasts</p>
        </div>
        <div className="unlinks">
          <img src={Sports} alt="" />
          <p>Sports</p>
        </div>
        <div className="unlinks">
          <img src={News} alt="" />
          <p>News</p>
        </div>
        <div className="unlinks">
          <img src={Movies} alt="" />
          <p>Movies</p>
        </div>
        <div className="unlinks">
          <img src={Courses} alt="" />
          <p>Courses</p>
        </div>
        <div className="unlinks">
          <img src={Live} alt="" />
          <p>Live</p>
        </div>
        {sidebar === true && <hr />}
        <div className="unlinks">
          <img src={Premium} alt="" />
          <p>Youtube Premium</p>
        </div>
        <div className="unlinks">
          <img src={YMusic} alt="" />
          <p>Youtube Music</p>
        </div>
        <div className="unlinks">
          <img src={YKids} alt="" />
          <p>Youtube Kids</p>
        </div>
        {sidebar === true && <hr />}
        <div className="unlinks">
          <img src={Settings} alt="" />
          <p>Settings</p>
        </div>
        <div className="unlinks">
          <img src={Help} alt="" />
          <p>Help</p>
        </div>
        <div className="unlinks">
          <img src={Feedback} alt="" />
          <p>Feedback</p>
        </div>
        {sidebar === true && <hr />}
        <div className="YP">
          <p>
            About Press Copyright Contact us Creators Advertise Developers
            <br></br>
            <br></br>
            Terms PrivacyPolicy & Safety How YouTube works Test new features
            <br></br>
            <br></br>
            @2024 Ansh LLC
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
