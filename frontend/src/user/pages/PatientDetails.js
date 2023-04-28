import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UsersList from '../components/UsersList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import UserSidebar from '../components/UserSidebar';
// return all user details so that this can be used elsewhere on the site
const PatientDetails = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPatient, setLoadedPatient] = useState();

  const userId = useParams().userId;


  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/user/${userId}`
        );

        setLoadedPatient(responseData.users);
      } catch (err) { }
    };
    fetchPatient();
  }, [sendRequest]);
  return (
    <>
      <React.Fragment>

        <div className="antialiased bg-black w-full main-content text-slate-300 relative py-4">
          <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 dashboard px-2">
            <UserSidebar />
            <div id="content" className="bg-white/10 col-span-9 rounded-lg p-6 content">
              Dashboard user info
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  );
};

export default PatientDetails;
