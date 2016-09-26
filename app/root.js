import React, { Component } from 'react';
import { 
  VinylContainer, 
  ScoringContainer, 
  AddonsContainer,
  MainContainer } from './components'


class RootComponent extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleAddon = this.handleAddon.bind(this);
    this.state = { clicks: 0, 
                   currentIncrement: 1 }
  
    
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + this.state.currentIncrement });
  }

  handleAddon(event) {
    const addonType = event.target.value;
    console.log(event.currentTarget)
  }
  render() {
    return (
      <MainContainer>
        <VinylContainer onClick={this.handleClick} clicks={this.state.clicks}/>
        <ScoringContainer />
        <AddonsContainer clicks={this.state.clicks} handleAddon={this.handleAddon} />
      </MainContainer>
    )
  }
}

export default RootComponent;