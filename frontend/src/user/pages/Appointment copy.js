import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AppointmentList from '../components/AppointmentList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const Appointment = () => {
  const [loadedAppointments, setLoadedAppointments] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const userId = useParams().userId;
  console.log(userId)

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const responseData = await sendRequest(
         // this works if i put it in the browser the appropriate appts show for the user stated
          // nothing being returned to the UI
          `http://localhost:5000/api/appointments/user/${userId}`
        );
        setLoadedAppointments(responseData.appointment);
      } catch (err) { }
    };
    fetchAppointments();
    console.log(fetchAppointments())

  }, [sendRequest, userId]);
  // const appointmentDeletedHandler = deletedAppointmentId => {
  //   setLoadedAppointments(prevAppointments =>
  //     prevAppointments.filter(appointment => appointment.id !== deletedAppointmentId)
  //   );
  // };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedAppointments && (
        <main>
          <AppointmentList items={loadedAppointments} />
        </main>
      )}
    </React.Fragment>
  );
};

export default Appointment;
