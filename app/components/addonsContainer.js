import React, { Component } from 'react';
import { SimplePress,
         AdvancedPress } from './addons/presses';

class AddonsContainer extends Component {
  constructor() {
    super();
    
  }

  componentDidMount() {
  }
  
  render() {
  
    return <div id="addonsContainer">
              <header className="containerHeader">
                <h2>Multipliers</h2>
              </header>
              {this.props.clicks > 10 ? <SimplePress handleAddon={this.props.handleAddon} /> : null}
              {this.props.clicks > 20 ? <AdvancedPress /> : null}
           </div>
  }
}

export default AddonsContainer;