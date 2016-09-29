import React, { Component } from 'react';

export const GenericPress = (props) => {

  return <div className={props.style}>
            <div>
              <p>This {props.name} will provide you with {props.autoClicks} records per second.</p>
              {!!props.amount ? <p>It will also give you {props.amount} extra records per click.</p> : null}
              <p>Price: <span>{props.cost}</span></p>
            </div>
              <button onClick={props.handleAddon}>Buy</button>
           </div>
}