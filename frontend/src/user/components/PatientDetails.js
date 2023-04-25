import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import AppointmentItem from './AppointmentItem';
import Button from '../../shared/components/FormElements/Button';


const PatientDetails = props => {


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
     
          <div id="last-users">
            <h1 className="font-bold py-4 uppercase">Last 24h users</h1>
            <div className="overflow-x-scroll">
              <table className="w-full whitespace-nowrap">
                <thead className="bg-black/60">
                  <th className="text-left py-3 px-2 rounded-l-lg">Name</th>
                  <th className="text-left py-3 px-2">Email</th>
                  <th className="text-left py-3 px-2">Appointment Date</th>
                  <th className="text-left py-3 px-2">Total Appointments</th>
                  <th className="text-left py-3 px-2 rounded-r-lg">Actions</th>
                </thead>
                {props.items.map(appointment => (
                  <AppointmentItem
                    key={appointment.id}
                    id={appointment.id}
                    date={appointment.date}
                    patientId={appointment.patient_id}
                    // departmentId={appointment.department_id}
                    title={appointment.title}
                  // appointmentCount={appointment.patient_id.reduce}
                  // onDelete={props.onDeleteAppointment}
                  />
                ))}
              </table>
            </div>
          </div>
     
    


    </>
  );
};

export default PatientDetails;
