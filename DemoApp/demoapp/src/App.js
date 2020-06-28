import React from 'react';
import './App.css';
import Colours from'./Colours.js'
import Cities from'./Cities.js'

function App() {
  return (
    <div className='App'>

    {/* <Colours></Colours> */}

    {/* <Cities></Cities> */}

    <Colours carColour= 'Red' bikeColour= 'Blue' cycleColour= 'Orange' />

    <hr/>
    <hr/>

    <Cities capitalCity= 'Islamabad' majorCities= 'Karachi, Lahore, Peshawar, Quetta' megaCity='Karachi'/>
    
    
        </div>
  
  );
}

export default App; 