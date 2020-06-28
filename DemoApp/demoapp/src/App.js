import React from 'react';
import './App.css';
import Colours from'./Colours.js'

function App() {
  return (
    <div className='App'>

    {/* <Colours></Colours> */}

    <Colours carColour= 'Red' bikeColour= 'Blue' cycleColour= 'Orange' />
    
    </div>
  
  );
}

export default App; 