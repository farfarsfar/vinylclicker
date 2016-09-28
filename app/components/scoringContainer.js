import React, { Component } from 'react';

class ScoringContainer extends Component {

  componentDidMount() {
    
  }

  render() {
    const addonsToDisplay = this.props.toDisplay;

    return <div id="scoringContainer">
             <header className="containerHeader">
                <h2>the Vinyl Empire</h2>
              </header>
              {Object.keys(this.props.toDisplay).map((item, i) => 
                <div key={i} className="multiplierThumbnail">
                  <span className="multiplierCount">{this.props.toDisplay[item]}</span>
                    <div className="multiplierName">
                      {item}
                    </div>
                </div>
              )}
            </div>
  }
}

export default ScoringContainer;