import React from "react";


function TradeCard(props) {
  return (
    /*<div className="trade">
      <h1 className="trade-name">{props.name}</h1>
      <h2 className="trade-title">{props.title}</h2>
      <p className="description">{props.description}</p>
    </div>*/
    <div className="trade">
      <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          {/* You could add an emoji field in your data later! */}
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>
        <strong>{props.title}</strong>
      </dd>
      <dd>
        {props.description}
      </dd>
    </div>
  );
}

export default TradeCard;