import React, { Component } from 'react';

class VinylRecord extends Component {
  render() {
    return <div id="vinylRecord"></div>
  }
}

class RootComponent extends Component {
  render() {
    return (
      <div id="vinylContainer">
        <VinylRecord />
      </div>
    )
  }
}

export default RootComponent;