import React, { Component } from 'react';

const MainContainer = ({children}) => {
    return <div id="mainContainer">
             <header>
               <h1>Vinyl Clicker</h1>
             </header>
            <div id="appContainer">
              {children}
            </div>
          </div>
}

export default MainContainer;