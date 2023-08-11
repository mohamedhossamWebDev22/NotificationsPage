import React from 'react';

import { NavLink } from "react-router-dom";

import Not from "../components/not";
import Notun from "../components/notUn";

import av1 from "../assets/images/avatar-mark-webber.webp";
import av2 from "../assets/images/avatar-angela-gray.webp";
import av3 from "../assets/images/avatar-jacob-thompson.webp";
import av4 from "../assets/images/avatar-rizky-hasanuddin.webp";
import av5 from "../assets/images/avatar-kimberly-smith.webp";
import av6 from "../assets/images/avatar-nathan-peterson.webp";
import av7 from "../assets/images/avatar-anna-kim.webp";

import postPic from "../assets/images/image-chess.webp";

const RA = () => {
  return (
    <>
      <div className="content">
        <div className="nav">
          <h1>
            Notifications <span id="num">0</span>
          </h1>
          <NavLink to = '/'>
            <p>Mark all as read</p>
          </NavLink>
        </div>
        <div className="page">
          <Not
            img={av1}
            profileName="Mark Webber"
            order="reacted to your recent post My first tournament today!"
            ago="1m ago"
          />
          <Not
            img={av2}
            profileName="Angela Gray"
            order="followed you"
            ago="5m ago"
          />
          <Not
            img={av3}
            profileName="Jacob Thompson"
            order="has joined your group Chess Club "
            ago="1 day ago"
          />
          <Not
            img={av4}
            profileName="Rizky Hasanuddin"
            order="sent you a private message"
            ago="5 day ago"
          />
          <div className="read card">
            <div className="txt">
              <img src={av5} alt="pic" />

              <div className="klam">
                <div className="name">
                  <pre>Kimberly Smith </pre>
                </div>
                <div className="order">commented on your picture</div>
              </div>
              <div className="unread-mark">
                <img src={postPic} alt="" />
              </div>
            </div>
            <br />
            <div className="time">1 week ago</div>
          </div>
          <Not
            img={av6}
            profileName="Nathan Peterson"
            order="reacted to your recent post 5 end-game strategies to increase your win rate"
            ago="2 weeks ago"
          />
          <Not
            img={av7}
            profileName="Anna Kim"
            order="left the group Chess Club"
            ago="2 weeks ago"
          />
        </div>
      </div>
    </>
  );
}

export default RA;
