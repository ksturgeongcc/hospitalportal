import React, { useEffect, useState } from 'react';

import PatientDetails from '../components/PatientDetails';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
// import Aside from '../components/Aside';
import UserSidebar from '../components/UserSidebar';

const Department = () => {
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
                <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 px-2 dashboard">
                    <UserSidebar />
                    <div id="content" className="bg-white/10 col-span-9 rounded-lg p-6 content">
                        <div id="24h">
                            <h1 className="font-bold py-4 uppercase">Department Details</h1>
                            <div id="stats" className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-black/60 to-white/5 p-6 rounded-lg">
                                    <div className="flex flex-row space-x-4 items-center">
                                        <div id="stats-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 text-white">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                        <p className="text-teal-300 text-sm font-medium uppercase leading-4">Doctor Jeckyl</p>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-black/60 p-6 rounded-lg">
                                    <div className="flex flex-row space-x-4 items-center">
                                        <div id="stats-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 text-white">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>

                                        </div>
                                        <div>
                                            <p className="text-teal-300 text-sm font-medium uppercase leading-4">Staff Nurse: Mary Ratchet</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-black/60 p-6 rounded-lg">
                                    <div className="flex flex-row space-x-4 items-center">
                                        <div id="stats-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 text-white">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                            </svg>

                                        </div>
                                        <div>
                                            <p className="text-blue-300 text-sm font-medium uppercase leading-4">Hospital Map</p>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="last-incomes">
                            <h1 className="font-bold py-4 uppercase">X-Ray</h1>
                            <div id="stats" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                <div className="bg-black/60 to-white/5 rounded-lg">
                                    <div className="flex flex-row items-center">
                                        <div className="text-3xl p-4">💰</div>
                                        <div className="p-2">
                                            <p className="text-xl font-bold">348$</p>
                                            <p className="text-gray-500 font-medium">Amber Gates</p>
                                            <p className="text-gray-500 text-sm">24 Nov 2022</p>
                                        </div>
                                    </div>
                                    <div className="border-t border-white/5 p-4">
                                        <a href="#" className="inline-flex space-x-2 items-center text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                            </svg>
                                            <span>Info</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="bg-black/60 to-white/5 rounded-lg">
                                    <div className="flex flex-row items-center">
                                        <div className="text-3xl p-4">💰</div>
                                        <div className="p-2">
                                            <p className="text-xl font-bold">68$</p>
                                            <p className="text-gray-500 font-medium">Maia Kipper</p>
                                            <p className="text-gray-500 text-sm">23 Nov 2022</p>
                                        </div>
                                    </div>
                                    <div className="border-t border-white/5 p-4">
                                        <a href="#" className="inline-flex space-x-2 items-center text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                            </svg>
                                            <span>Info</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="bg-black/60 to-white/5 rounded-lg">
                                    <div className="flex flex-row items-center">
                                        <div className="text-3xl p-4">💰</div>
                                        <div className="p-2">
                                            <p className="text-xl font-bold">12$</p>
                                            <p className="text-gray-500 font-medium">Oprah Milles</p>
                                            <p className="text-gray-500 text-sm">23 Nov 2022</p>
                                        </div>
                                    </div>
                                    <div className="border-t border-white/5 p-4">
                                        <a href="#" className="inline-flex space-x-2 items-center text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                            </svg>
                                            <span>Info</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="bg-black/60 to-white/5 rounded-lg">
                                    <div className="flex flex-row items-center">
                                        <div className="text-3xl p-4">💰</div>
                                        <div className="p-2">
                                            <p className="text-xl font-bold">105$</p>
                                            <p className="text-gray-500 font-medium">Jonny Nite</p>
                                            <p className="text-gray-500 text-sm">23 Nov 2022</p>
                                        </div>
                                    </div>
                                    <div className="border-t border-white/5 p-4">
                                        <a href="#" className="inline-flex space-x-2 items-center text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                            </svg>
                                            <span>Info</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="bg-black/60 to-white/5 rounded-lg">
                                    <div className="flex flex-row items-center">
                                        <div className="text-3xl p-4">💰</div>
                                        <div className="p-2">
                                            <p className="text-xl font-bold">52$</p>
                                            <p className="text-gray-500 font-medium">Megane Baile</p>
                                            <p className="text-gray-500 text-sm">22 Nov 2022</p>
                                        </div>
                                    </div>
                                    <div className="border-t border-white/5 p-4">
                                        <a href="#" className="inline-flex space-x-2 items-center text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                            </svg>
                                            <span>Info</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="bg-black/60 to-white/5 rounded-lg">
                                    <div className="flex flex-row items-center">
                                        <div className="text-3xl p-4">💰</div>
                                        <div className="p-2">
                                            <p className="text-xl font-bold">28$</p>
                                            <p className="text-gray-500 font-medium">Tony Ankel</p>
                                            <p className="text-gray-500 text-sm">22 Nov 2022</p>
                                        </div>
                                    </div>
                                    <div className="border-t border-white/5 p-4">
                                        <a href="#" className="inline-flex space-x-2 items-center text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                            </svg>
                                            <span>Info</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </>
    );
};

export default Department;
