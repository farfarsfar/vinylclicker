import React, { Component } from 'react';
import { 
  VinylContainer, 
  ScoringContainer, 
  AddonsContainer,
  MainContainer } from './components';
import update from 'react-addons-update';

class RootComponent extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleAddon = this.handleAddon.bind(this);
    this.state = { clicks: 0, 
                   currentIncrement: 1,
                   addons: {} }  
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + this.state.currentIncrement }, 
                    () => { window.document.title = this.state.clicks });
    
  }
  
  handleAddon(event) {
    const newMultiplier = Object.keys(event)[0];
    const multiplierCost = event[Object.keys(event)[1]];
    console.log(multiplierCost)
    // kollar nuvarande mängd av aktuell multiplier
    const current = !!this.state.addons[newMultiplier] ? this.state.addons[newMultiplier] : 0;
    //lägger till +1 av aktuell multiplier till addons-objektet i this.state
    var toAdd = update(this.state.addons, {
      [newMultiplier]: {$set: current + 1}
    });
    this.setState({ addons: toAdd, clicks: this.state.clicks - multiplierCost });
    //lägger till aktuell multipliers bonus i currentIncrement
    this.setState({ currentIncrement: this.state.currentIncrement + event[Object.keys(event)[0]]})
    console.log(this.state)
  }
  
  componentDidMount() {
    
  }
  render() {
    return (
      <MainContainer>
        <VinylContainer onClick={this.handleClick} clicks={this.state.clicks} />
        <ScoringContainer toDisplay={this.state.addons} />
        <AddonsContainer clicks={this.state.clicks} addonCount={this.state.addons} handleAddon={this.handleAddon} />
      </MainContainer>
    )
  }
}

export default RootComponent;