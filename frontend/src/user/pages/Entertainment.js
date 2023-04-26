import React, { useEffect, useState } from 'react';
import UserSidebar from '../components/UserSidebar';
import './Dashboard.css';

const Entertainment = () => {
    return (
        <>
            <div className="antialiased bg-black w-full main-content text-slate-300 relative py-4">
                <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 dashboard px-2">
                    <UserSidebar />
                    <div id="content" className="bg-white/10 col-span-9 rounded-lg p-6 content">
                        <div id="last-incomes">
                            <h1 className="font-bold py-4 uppercase">Online Games</h1>
                            <div id="stats" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" ></div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" ></div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" ></div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" ></div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" ></div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" ></div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" ></div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" ></div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" ></div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" ></div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" ></div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" ></div>
                            </div>
                        </div>
                        <div id="last-incomes">
                            <h1 className="font-bold py-4 uppercase">Learning</h1>
                            <div id="stats" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" ></div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" ></div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" ></div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" ></div>
                           </div>
                        </div>
                        <div id="last-incomes">
                            <h1 className="font-bold py-4 uppercase">Movies</h1>
                            <div id="stats" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" ></div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" ></div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" ></div>
                                <div className="bg-black/60 to-white/5 rounded-lg fruitslice" ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Entertainment;
