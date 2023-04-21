import React, { useEffect, useState } from 'react';

import PatientDetails from '../components/PatientDetails';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
// import Aside from '../components/Aside';
import UserSidebar from '../components/UserSidebar';

const Entertainment = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedPatient, setLoadedPatient] = useState();

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const responseData = await sendRequest(
                    'http://localhost:5000/api/patient'
                );

                setLoadedPatient(responseData.users);
            } catch (err) { }
        };
        fetchPatient();
    }, [sendRequest]);

    return (

        // <React.Fragment>
        //   <ErrorModal error={error} onClear={clearError} />
        //   {isLoading && (
        //     <div classNameName="center">
        //       <LoadingSpinner />
        //     </div>
        //       )}
        //       <div classNameName="dashboard">
        //         <Aside />
        //         <div classNameName="appointment">
        //         {!isLoading && loadedPatient && <PatientDetails items={loadedPatient} />}

        //         </div>
        //     </div>

        // </React.Fragment>
        <>



            <div className="antialiased bg-black w-full main-content text-slate-300 relative py-4">
                <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 dashboard px-2">
                    <UserSidebar />
                    <div id="content" className="bg-white/10 col-span-9 rounded-lg p-6 content">
                        <div id="last-incomes">
                            <h1 className="font-bold py-4 uppercase">Online Games</h1>
                            <div id="stats" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" >
                                 
                                </div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" >
                                 
                                </div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" >
                                 
                                </div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" >
                                 
                                </div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" >
                                 
                                </div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" >
                                 
                                </div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" >
                                 
                                </div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" >
                                 
                                </div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" >
                                 
                                 </div>
                                 <div className="bg-black/60 to-white/5 rounded-lg fruitslice" >
                                  
                                 </div>
                                 <div className="bg-black/60 to-white/5 rounded-lg fruitslice" >
                                  
                                 </div>
                                 <div className="bg-black/60 to-white/5 rounded-lg fruitslice" >
                                  
                                 </div>
                            </div>
                        </div>
                        <div id="last-incomes">
                            <h1 className="font-bold py-4 uppercase">Learning</h1>
                            <div id="stats" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" >
                                 
                                </div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" >
                                 
                                </div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" >
                                 
                                </div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" >
                                 
                                </div>
                           
                            </div>
                        </div>
                        <div id="last-incomes">
                            <h1 className="font-bold py-4 uppercase">Movies</h1>
                            <div id="stats" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" >
                                 
                                </div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" >
                                 
                                </div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" >
                                 
                                </div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" >
                                 
                                </div>
                           
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default Entertainment;
