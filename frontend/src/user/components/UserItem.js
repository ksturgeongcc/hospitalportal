import React from 'react';
// import { Link } from 'react-router-dom';
import './UserItem.css';
import UserTable from '../../shared/components/UIElements/UserTable';

const UserItem = props => {
  return (
    <>
    {/* <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={`http://localhost:5000/${props.image}`} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name} jjj</h2>
            <h2>{props.email}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </Card>
    </li> */}
      <UserTable>  
        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
            <div>
              <h2 className="font-medium text-gray-800 dark:text-white ">{props.name}</h2>
            </div>
        </td>
        <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
            <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                Patient
            </div>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
            <div>
            <p className="text-gray-500 dark:text-gray-400"> {
              props.appointmentCount === 0 ? 'No appointments set'
                : props.appointmentCount === 1 ? props.appointmentCount + ' appointment'
                  : props.appointmentCount + ' appointments'}</p>
            </div>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
            <div className="flex items-center">
              <p className="text-gray-500 dark:text-gray-400">{props.guardian}</p>

            </div>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
            <div className="flex items-center">
              <p className="text-gray-500 dark:text-gray-400">{props.email}</p>
            </div>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
            <button className="px-1 py-1 text-white rounded-lg dark:text-gray-300 hover:bg-gray-100">
               View / Edit
            </button>
        </td>
                            
</UserTable>

    

    </>
  );
};

export default UserItem;
