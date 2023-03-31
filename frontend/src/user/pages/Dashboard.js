import React, { useEffect, useState } from 'react';

import UsersList from '../components/UsersList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const Dashboard = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/users'
        );

        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers &&
        <main>
          <UsersList items={loadedUsers} />
        </main>
      }
    </React.Fragment>
  );
};

export default Dashboard;


// <div className="dashboard">
//                 <Aside />
//                 <div className="dashboard-container">
//                     <div className="doctor-wrapper">
//                         <img src={doctor} alt="doctor"></img>
//                     </div>
//                     <div className="dashboard-details">
                        
//                         <h3>Hi Sally, welcome to your portal {user.name}</h3>
//                         <p>You can find out all the informaiton about your appointment.</p>
//                         <p>You can meet the team that will be looking after you</p>
//                         <p>View your appointment details</p>
//                         <p>Or relax and have some fun in the entertainment zone.</p>
                        
//                     </div>
//                 </div>
//             </div>