import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import DashboardItem from './DashboardItem';
import Button from '../../shared/components/FormElements/Button';


const DashboardList = props => {


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
      <div id="content" className="bg-white/10 col-span-9 rounded-lg p-6 content">
        <div id="24h">
          <h1 className="font-bold py-4 uppercase">Department Details</h1>
          <div id="stats" className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {props.items.map(appointment => (
              <DashboardItem
                key={appointment.id}
                id={appointment.id}
                date={appointment.date}
                patientId={appointment.patient_id}
                title={appointment.title}             
              />
            ))}
          </div>
        </div>
      </div>



    </>
  );
};

export default DashboardList;
