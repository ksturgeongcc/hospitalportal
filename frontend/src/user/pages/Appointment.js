import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AppointmentList from '../components/AppointmentList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import UserSidebar from '../components/UserSidebar';

const Appointment = () => {
  const [loadedAppointments, setLoadedAppointments] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const userId = useParams().userId;

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/appointments/user/${userId}`
        );
        setLoadedAppointments(responseData.appointments);
      } catch (err) { }
    };
    fetchAppointments();
  }, [sendRequest, userId]);

  const appointmentDeletedHandler = deletedAppointmentId => {
    setLoadedAppointments(prevAppointments =>
      prevAppointments.filter(appointment => appointment.id !== deletedAppointmentId)
    );
  };
  

  return (
    <>
      <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
        <div className="antialiased bg-black w-full main-content text-slate-300 relative py-4">
          <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
            <UserSidebar />

            {!isLoading && loadedAppointments && (

              <AppointmentList items={loadedAppointments} onDeleteAppointment={appointmentDeletedHandler} />

            )}
          </div>
        </div>
      </React.Fragment>
    </>
  );
};

export default Appointment;
