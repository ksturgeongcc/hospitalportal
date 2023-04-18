import React from 'react';
// import { Link } from 'react-router-dom';


const PatientData = props => {
  return (
    <>
      
  
          <div className="user-item__info">
            <h2>Hi {props.name} you are coming to the hospital with {props.guardian}</h2>
            <h2>{props.email}</h2>
            <h2></h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        
      </>
  );
};

export default PatientData;
