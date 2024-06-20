import React from "react";
import "./Videoplayer.css";
import Video1 from "./../../Assests/Video1.mp4";
import Like from "../../Assests/Like.png";
import Dislike from "../../Assests/Dislike.png";
import Share from "../../Assests/Share.png";
import Save from "../../Assests/Save.png";
import Youtuber from "../../Assests/Youtuber.png";
import Comment from "../../Assests/Comment.jpg";

const Videoplayer = () => {
  return (
    <div className="playvideo">
      <video src={Video1} controls autoplay muted></video>
      <h3>Best way to earn Money</h3>
      <div className="videoinfo">
        <p>1m views &bull; 1 day ago</p>
        <div>
          <span>
            <img src={Like} alt="" />
            100k
          </span>
          <span>
            <img src={Dislike} alt="" />
            10k
          </span>
          <span>
            <img src={Share} alt="" />
            Share
          </span>
          <span>
            <img src={Save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="youtuber">
        <img src={Youtuber} alt="" />
        <div>
          <p>Anssh19</p>
          <span>1M subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="videodescription">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ut.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
          exercitationem culpa laboriosam dicta, optio similique?
        </p>
        <hr />
        <h4>10k commnets</h4>
        <div className="comments">
          <img src={Comment} alt="" />
          <div>
            <h3>
              Om patel<span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
              quam?
            </p>
            <div className="comment-action">
              <img src={Like} alt="" />
              <span>100</span>
              <img src={Dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={Comment} alt="" />
          <div>
            <h3>
              Om patel<span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
              quam?
            </p>
            <div className="comment-action">
              <img src={Like} alt="" />
              <span>100</span>
              <img src={Dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={Comment} alt="" />
          <div>
            <h3>
              Om patel<span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
              quam?
            </p>
            <div className="comment-action">
              <img src={Like} alt="" />
              <span>100</span>
              <img src={Dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={Comment} alt="" />
          <div>
            <h3>
              Om patel<span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
              quam?
            </p>
            <div className="comment-action">
              <img src={Like} alt="" />
              <span>100</span>
              <img src={Dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={Comment} alt="" />
          <div>
            <h3>
              Om patel<span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
              quam?
            </p>
            <div className="comment-action">
              <img src={Like} alt="" />
              <span>100</span>
              <img src={Dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={Comment} alt="" />
          <div>
            <h3>
              Om patel<span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
              quam?
            </p>
            <div className="comment-action">
              <img src={Like} alt="" />
              <span>100</span>
              <img src={Dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videoplayer;
