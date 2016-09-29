import React, { Component } from 'react'

class VinylRecord extends Component {
  constructor(props) {
    super(props);
    
  }

componentDidMount() {

  // detta syftar till att lägga till 'animate'-klassen och ta bort den när animationen
  // har körts, så att det blir en animation per klick (om man inte klickar sjuukt fort)
  const element = document.getElementById("vinylRecord");
  const transitionEvents = ['webkitAnimationEnd', 'mozAnimationEnd', 'oAnimationEnd', 'oanimationend', 'animationend'];
  element.addEventListener('click', function() {
    if (element.classList) {
      element.classList.add("animate");
    } else {
      element.className += " " + "animate";
    }
    for (let i = 0; i < transitionEvents.length; i++) {
      element.addEventListener(transitionEvents[i], () => { element.classList.remove('animate') });
    }
  });
}

  render() {

    // renderar vinylskivan som det ska klickas på
    return <div onClick={this.props.onClick} id="vinylRecord"></div>
  }
}

class ClickCounter extends Component {
  constructor() {
    super();
  }

  render() {

    // Renderar klick-countern, med locale-känslig formatering.
    // Listar även antalet klick per klick och autoklick per sekund. 
    return <div id="clickCounter">
              <span>{this.props.clicks.toLocaleString(this.props.locale)}</span>
              <div>
                <p>Records per click: <span className="incrementInfo">{this.props.currentIncrement}</span></p>
                <p>Records per second: <span className="incrementInfo">{this.props.autoClicks}</span></p>
              </div>
            </div>
  }
}

class VinylContainer extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
  }
  // Detta är containern för vinylskivan och klick-countern.
  render() {
    return <div id="vinylContainer">
            <ClickCounter {...this.props}/>
            <VinylRecord onClick={this.props.onClick} />
          </div>
  }
}

export default VinylContainer;