import React, { Component } from 'react'

class VinylRecord extends Component {
  constructor() {
    super();
  }

  render() {
    return <div onClick={this.props.onClick} id="vinylRecord"></div>
  }
}

class ClickCounter extends Component {
  constructor() {
    super();
  }
  
  render() {
    return <div id="clickCounter">
              <span>{this.props.clicks}</span>
            </div>
  }
}

class VinylContainer extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
  }
  render() {
    return <div id="vinylContainer">
            <ClickCounter clicks={this.props.clicks} />
            <VinylRecord onClick={this.props.onClick} />
          </div>
  }
}

export default VinylContainer;