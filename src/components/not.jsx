import React from 'react';

const Not = (props) => {
  return (
    <div className="read card">
      <div className="txt">
        <img src={props.img} alt="pic" />

        <div className="klam">
          <div className="name"><pre>{props.profileName} </pre></div>
          <div className="order">{props.order}</div>
        </div>
      </div>
      <br />
      <div className="t2">
        <div className="time">{props.ago}</div>
      </div>
    </div>
  );
}

export default Not;
