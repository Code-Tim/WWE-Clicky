import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div onClick={() => props.func(props.name)} className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Faction:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.clickCount(props.name)} className="img_container">
        {/* <img alt={props.name} src={props.image} /> */}
      </span>
    </div>
  );
}

export default FriendCard;
