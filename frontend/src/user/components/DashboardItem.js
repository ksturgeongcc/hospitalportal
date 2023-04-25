import React, { useState, useContext } from 'react';
import { AuthContext } from '../../shared/context/auth-context';

const DashboardItem = props => {
  const auth = useContext(AuthContext);
  return (
    <>
      <div className="bg-black/60 p-6 rounded-lg">
        <div className="flex flex-row space-x-4 items-center">
          <div>
            <p className="text-teal-300 text-sm font-medium uppercase leading-4">{props.title}</p>
            <p className="text-teal-300 text-sm font-medium uppercase leading-4">{props.date}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardItem;
