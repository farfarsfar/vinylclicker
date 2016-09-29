import React, { Component } from 'react';
import { GenericPress } from './addons/presses';

class AddonsContainer extends Component {
  constructor() {
    super();
    
  }

  componentDidMount() {
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.clicks !== nextProps.clicks)
  }

  render() {
    // lista över möjliga addons
    const multipliers = { simplePress: { name: 'simple press', increment: 2, cost: 50, autoClicks: 1 },
                          advancedPress: { name: 'advanced press', increment: 10, cost: 500, autoClicks: 4 },
                          publishingDeal: { name: 'sweet publishing deal', increment: 20, cost: 2000, autoClicks: 50 },
                          celebrityEndorsement: { name: 'celebrity endorsement', increment: 0, cost: 4999.99, autoClicks: 150 },
                          grammyGrandSlam: { name: 'Grammy Grand Slam', increment: 0, cost: 10000, autoClicks: 400 },
                          intergalacticStardom: { name: 'intergalactic stardom', increment: 1000, cost: 100000, autoClicks: 3000 } 
    };
    // skapar en komponent med addon utifrån objektet ovan
    const genericPress = (name, addonCount) => {
      const currentAddon = name.name;
      const clickAmount = name.increment;
      const autoClicks = name.autoClicks;
      // kollar hur många som redan finns av aktuell addon
      const currentAddonCount = !!addonCount[currentAddon] ? addonCount[currentAddon] : 0;
      // beräknar hur mycket aktuell addon ska öka i pris, beräknat på hur många som redan är köpta
      const addonCostShouldMultiply = () => {
        if (currentAddonCount > 0) {
          return Math.round((name.cost * 1.133 + (currentAddonCount * currentAddonCount) * 1.837) * 100 ) / 100
        } else {
          return name.cost
        }
      }
      // ser till att beskrivningen är grå och oklickbar innan det finns tillräckligt med klick för att köpa
      var checkStyle = this.props.clicks > addonCostShouldMultiply() / 1.75 ? 'show' : 'hide';
      var canPurchase = this.props.clicks < addonCostShouldMultiply() ? 'greyed' : '';
      // ser till att det bara går att köpa 20st av varje addon
      const shouldRender = currentAddonCount < 20;

     if (!!shouldRender) { 
       // handleAddon binds till this och name, för att skicka tillbaka aktuell addon till
       // root.js. Osäker på om detta är ett bra sätt, men det funkar.
       return <GenericPress name={name.name} 
                            amount={clickAmount}
                            autoClicks={autoClicks}
                            cost={addonCostShouldMultiply()}
                            style={`addon ${checkStyle} ${canPurchase}`}
                            handleAddon={this.props.handleAddon.bind(this, name)} />
      } else {
        return null
      }
    }
    // Hade ingen lust att göra en loop för att rendera addons, funkar eftersom de
    // är relativt få.
    return <div id="addonsContainer">
              <header className="containerHeader">
                <h2>Multipliers</h2>
              </header>
              { genericPress(multipliers.simplePress, this.props.addonCount) }
              { genericPress(multipliers.advancedPress, this.props.addonCount) }
              { genericPress(multipliers.publishingDeal, this.props.addonCount) }
              { genericPress(multipliers.celebrityEndorsement, this.props.addonCount) }
              { genericPress(multipliers.grammyGrandSlam, this.props.addonCount) }
              { genericPress(multipliers.intergalacticStardom, this.props.addonCount) }
           </div>
  }
}

export default AddonsContainer;