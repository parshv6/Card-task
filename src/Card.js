import React from "react";
import { Avatar } from "@material-ui/core";
import "./Card.css";

function Card({ info, profile, name, desc }) {
  return (
    <div className="card">
      <p>{info}</p>
      <Avatar src={profile} variant="circle"  />
      <h3>{name}</h3>
      <p className="desc__color">{desc}</p>
    </div>
  );
}

export default Card;
