import React, { Component } from 'react';

// wrapper för komponenterna
const MainContainer = (props) => {
    return <div id="mainContainer">
             <header>
               <h1>Vinyl Clicker</h1>
             </header>
            <div id="appContainer">
              {props.children}
            </div>
          </div>
}

export default MainContainer;