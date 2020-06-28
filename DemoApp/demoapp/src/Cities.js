import React from 'react';

function Cities(props) { 

    return (

        <div>
   
       <h1>Capital of Pakistan is {props.capitalCity}</h1>
       <h1>Pakistan has 4 major cities {props.majorCities}</h1>
       <h1>Mega city of Pakistan is {props.megaCity}</h1>
       

        </div>

    );
}

export default Cities;