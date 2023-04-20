// import React, { useEffect, useState } from 'react';
import React, { useContext } from 'react';

import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import UserSidebar from '../components/UserSidebar';



const Entertainment = props => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    return (
        <>
            <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-4">
                {isLoading && (
                    <div classNameName="center">
                        <LoadingSpinner />
                    </div>
                )}
                <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
                    <UserSidebar />
                    <div id="content" className="bg-white/10 col-span-9 rounded-lg p-6">
                        <div id="last-incomes">
                            <h1 className="font-bold py-4 uppercase">Games</h1>
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

export default Entertainment;
