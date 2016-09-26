import React, { Component } from 'react';
import { 
  VinylContainer, 
  ScoringContainer, 
  AddonsContainer,
  MainContainer } from './components'


class RootComponent extends Component {
  render() {
    return (
      <MainContainer>
        <VinylContainer />
        <ScoringContainer />
        <AddonsContainer />
      </MainContainer>
    )
  }
}

export default RootComponent;