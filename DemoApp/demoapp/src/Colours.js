import React from 'react';

function Colours(props) { 

    return (

        <div>
   
       <h1>My car colour is {props.carColour}</h1>
       <h1>My bike colour is {props.bikeColour}</h1>
       <h1>My cycle colour is {props.cycleColour}</h1>

       </div>

    );
}

export default Colours;