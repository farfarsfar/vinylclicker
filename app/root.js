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
    this.autoClick = this.autoClick.bind(this);
    this.autoTitle = this.autoTitle.bind(this);
    this.state = { clicks: 0, 
                   currentIncrement: 1,
                   autoClicks: 0,
                   addons: {}
                  }  
  }

  handleClick() {
    // inkrementerar this.state.clicks för varje klick. Sätter även
    // document.title för varje klick.
    this.setState({ clicks: this.state.clicks + this.state.currentIncrement }, 
                    () => { window.document.title = Math.round(this.state.clicks) });
   }
  
  autoTitle() {
    // sätter document.title en gång i sekunden, för att få med auto-klick.
    window.document.title = Math.round(this.state.clicks);
  }

  autoClick () {
    // autoklickar 10ggr/sekund, för att få mer fart på räknaren
    this.setState({ clicks: this.state.clicks + this.state.autoClicks / 10 })
  }

  determineLocale() {
    // läser (någotsånär) av användarens locale
    return navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage)
  }
  handleAddon(event) {
    // Får tillbaka köpta addons från AddonsContainer.
    // Här nedan listas aktuell addons egenskaper:
    const addonName = event.name;
    const newIncrement = event.increment;
    const multiplierCost = event.cost;
    const multiplierAutoClicks = event.autoClicks;
  
    // kollar nuvarande mängd av aktuell addon
    const current = !!this.state.addons[addonName] ? this.state.addons[addonName] : 0;
    //lägger till +1 av aktuell addon till addons-objektet i this.state
    var toAdd = update(this.state.addons, {
      [addonName]: {$set: current + 1}
    });
    this.setState({ addons: toAdd, clicks: this.state.clicks - multiplierCost });
    // lägger till aktuell addons bonus i this.state.currentIncrement, samt auto-klick i
    // this.state.autoClicks
    this.setState({ currentIncrement: this.state.currentIncrement + newIncrement,
                    autoClicks: this.state.autoClicks + multiplierAutoClicks
                  })
  }
  
  componentDidMount() {
    // kolla så att timern bara läggs till en gång
      const clickTimer = setInterval( this.autoClick, 100);
      const titleTimer = setInterval( this.autoTitle, 1000)
      this.setState({ clickTimer: clickTimer, titleTimer: titleTimer })
    
  }
  
  componentWillUnmount() {
    // bra practice att ta bort timers, även om denna komponent inte kommer att unmount:a
    clearInterval(this.state.clickTimer);
    clearInterval(this.state.autoTitle)
  }
  render() {
   // rundar av clicks, så att det inte blir en massa decimaler i klick-countern
   const roundedClicks = Math.round(this.state.clicks)
    return (
      <MainContainer>
        <VinylContainer onClick={this.handleClick} 
                        clicks={roundedClicks} 
                        locale={this.determineLocale()}
                        autoClicks={this.state.autoClicks}
                        currentIncrement={this.state.currentIncrement}/>
        <ScoringContainer toDisplay={this.state.addons} />
        <AddonsContainer clicks={this.state.clicks} addonCount={this.state.addons} handleAddon={this.handleAddon} />
      </MainContainer>
    )
  }
}

export default RootComponent;