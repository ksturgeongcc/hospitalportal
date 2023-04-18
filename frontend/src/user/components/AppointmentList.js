import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import AppointmentItem from './AppointmentItem';
import Button from '../../shared/components/FormElements/Button';
import './AppointmentList.css';

const AppointmentList = props => {
  console.log('coming from lisr')

  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Information found. Maybe check back tomorrow.</h2>
          <h2>You can check out the fun zone while we update your information</h2>
          <Button to="/appointment/new">Share</Button>
        </Card>
      </div>
    );
  }

  return (
    <>
      <p>apptlist</p>
      <ul className="place-list">
        {props.items.map(appointment => (
          <AppointmentItem
            key={appointment.id}
            id={appointment.id}
            date={appointment.date}
            patientId={appointment.patient_id}
            // departmentId={appointment.department_id}
            title={appointment.title}
            // onDelete={props.onDeleteAppointment}
          />
        ))}
      </ul>
    </>
  );
};

export default AppointmentList;
