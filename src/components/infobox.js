import React from "react";
import "./infobox.css";

export default function InfoBox(props) {
  return (
    <div className="infobox">
      <h1 className="infobox-head">{props.text}</h1>
      <p className="infobody">{props.body}</p>
    </div>
  );
}
