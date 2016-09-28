import React, { Component } from 'react';

export const SimplePress = (props) => {
    return <div className="addon">
              <p>This simple press will give you twice as many records per click.</p>
              <button onClick={props.handleAddon}>Buy</button>
           </div>
}

export const AdvancedPress = (props) => {
    return <div className="addon">
              <p>This advanced press will give you four times as many records per click.</p>
              <button onClick={props.handleAddon}>Buy</button>
           </div>
}

export const GenericPress = (props) => {
  return <div className={props.style}>
              <p>This {props.name} will give you {props.amount} times as many records per click.</p>
              <p>Price: {props.cost}</p>
              <button onClick={props.handleAddon}>Buy</button>
           </div>
}