import React, { useEffect, useState } from 'react';

import PatientDetails from '../components/PatientDetails';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import Aside from '../components/Aside';

const Dashboard = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPatient, setLoadedPatient] = useState();

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/patient'
        );

        setLoadedPatient(responseData.users);
      } catch (err) {}
    };
    fetchPatient();
  }, [sendRequest]);

    return (
      
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
          )}
          <div className="dashboard">
            <Aside />
            <div className="appointment">
            {!isLoading && loadedPatient && <PatientDetails items={loadedPatient} />}

            </div>
        </div>

    </React.Fragment>
  );
};

export default Dashboard;
