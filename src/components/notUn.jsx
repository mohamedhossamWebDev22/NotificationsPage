import React from "react";

const NotUn = (props) => {

  const clck = () =>{
    alert('Sorry, ERROR !! \n oops I forget to tell you i got lazy ;)');
  }

  return (
    <div onClick={clck} className="unRead card">
      <div className="txt">
        <img src={props.img} alt="pic" />

        <div className="klam">
          <div className="name"><pre>{props.profileName} </pre></div>
          <div className="order">{props.order}</div>
        </div>
        <div className="unread-mark">
          <i className="fa-solid fa-circle" style={{ color: "#f65351" }} />
        </div>
      </div>
      <br />
      <div className="time">{props.ago}</div>
    </div>
  );
};

export default NotUn;
