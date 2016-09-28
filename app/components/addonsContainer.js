import React, { Component } from 'react';
import { GenericPress } from './addons/presses';

class AddonsContainer extends Component {
  constructor() {
    super();
    
  }

  componentDidMount() {
  }
  
  render() {
    const multipliers = { 'simple press': { simplePress: 2, cost: 50 },
                          'advanced press': { advancedPress: 4, cost: 500 },
                          'sweet publishing deal': { publishingDeal: 100, cost: 2000 }
    };
  
    const genericPress = (name) => {
      const multiplierToUse = multipliers[name][Object.keys(multipliers[name])[0]];
      const addonCost = multipliers[name][Object.keys(multipliers[name])[1]];
      
      var checkStyle = this.props.clicks > addonCost / 1.75 ? 'show' : 'hide';
      var canPurchase = this.props.clicks < addonCost ? 'greyed' : '';

      return <GenericPress name={name} 
                           amount={multiplierToUse} 
                           cost={addonCost}
                           style={`addon ${checkStyle} ${canPurchase}`}
                           handleAddon={this.props.handleAddon.bind(this, multipliers[name])} />
    }

    return <div id="addonsContainer">
              <header className="containerHeader">
                <h2>Multipliers</h2>
              </header>
              { genericPress('simple press') }
              { genericPress('advanced press') }
              { genericPress('sweet publishing deal') }
           </div>
  }
}

export default AddonsContainer;