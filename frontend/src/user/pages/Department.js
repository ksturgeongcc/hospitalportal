// // Information required :
// // Department details are required
// // the user that is logged in should have a department identifier in the user table
// // user details AND department details will be shown here


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// import ErrorModal from '../../shared/components/UIElements/ErrorModal';
// import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
// import { useHttpClient } from '../../shared/hooks/http-hook';

// const PatientDetails = () => {
//   const [loadedPatient=  setLoadedPatients] = useState();
//   const { isLoading, error, sendRequest, clearError } = useHttpClient();

//   const userId = useParams().userId;

//   useEffect(() => {
//     const fetchPatients = async () => {
//       try {
//         const responseData = await sendRequest(
//           `http://localhost:5000/api/places/user/${userId}`
//         );
//         setLoadedPlaces(responseData.places);
//       } catch (err) {}
//     };
//     fetchPlaces();
//   }, [sendRequest, userId]);



//   return (
//     <React.Fragment>
//       <ErrorModal error={error} onClear={clearError} />
//       {isLoading && (
//         <div className="center">
//           <LoadingSpinner />
//         </div>
//       )}
//       {!isLoading && loadedPlaces && (
//         <PatientList items={loadedPlaces} />
//       )}
//     </React.Fragment>
//   );
// };

// export default UserPlaces;


// // import React from "react";

// // import './Dashboard.css';
// // import Aside from "../components/Aside";


// // const Department = () => {
// //     return (
// //         <>
// //             <div className="dashboard">
// //                 <Aside />
// //                 <div className="appointment">
// //                     Department
// //                 </div>
// //             </div>
// //         </>
// //     )
// // };
// // export default Department;