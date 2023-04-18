import React from 'react';

import PatientData from './PatientData';
import Card from '../../shared/components/UIElements/Card';
import './PatientDetails.css';

const PatientDetails = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <div className="users-list">
      {props.items.map(user => (
        <PatientData
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          email={user.email}
          guardian={user.guardian}
          placeCount={user.places.length}
        />
      ))}
    </div>
  );
};

export default PatientDetails;
