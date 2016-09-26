import React, { Component } from 'react';

export const SimplePress = (props) => {
    return <div className="addon" onClick={props.handleAddon} >
              <p>This simple press will give you twice as many records per click.</p>
           </div>
}

export const AdvancedPress = () => {
    return <div className="addon">
              <p>This advanced press will give you four times as many records per click.</p>
           </div>
}