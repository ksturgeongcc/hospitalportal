import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
// import './AppointmentItem.css';
// import appointment from '../../../../backend/models/appointment';


const AppointmentItem = props => {
  // const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  // const [showConfirmModal, setShowConfirmModal] = useState(false);
  // const showDeleteWarningHandler = () => {
  //   setShowConfirmModal(true);
  // };

  // const cancelDeleteHandler = () => {
  //   setShowConfirmModal(false);
  // };

  // const confirmDeleteHandler = async () => {
  //   setShowConfirmModal(false);
  //   try {
  //     await sendRequest(
  //       `http://localhost:5000/api/appointments/${props.id}`,
  //       'DELETE',
  //       null,
  //       {
  //         Authorization: 'Bearer ' + auth.token
  //       }
  //     );
  //     props.onDelete(props.id);
  //   } catch (err) { }
  // };

  return (
    <>
      {/* <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />

        <Modal
          show={showConfirmModal}
          onCancel={cancelDeleteHandler}
          header="Are you sure?"
          footerClassName="place-item__modal-actions"
          footer={
            <React.Fragment>
              <Button inverse onClick={cancelDeleteHandler}>
                CANCEL
              </Button>
              <Button danger onClick={confirmDeleteHandler}>
                DELETE
              </Button>
            </React.Fragment>
          }
        >
          <p>
            Do you want to proceed and delete this appointment? Please note that it
            can't be undone thereafter.
          </p>
        </Modal>
        <li className="place-item">
          <Card className="place-item__content">
            {isLoading && <LoadingSpinner asOverlay />}
            <div className="place-item__image">

            </div>
            <div className="place-item__info">
              <h2>{props.title}</h2>
              {/* when using props here we are getting the data from the place collection */}
      {/* <h3>{props.date}</h3>
            </div>
            <div className="place-item__actions">
              <Button inverse>
                VIEW ON MAP
              </Button>
              {auth.userId === props.patientId && (
                <Button to={`/appointments/${props.id}`}>EDIT</Button>
              )}

              {auth.userId === props.patientId && (
                <Button danger onClick={showDeleteWarningHandler}>
                  DELETE
                </Button>
              )}
            </div>
          </Card>
        </li>
      </React.Fragment> */}


      <tr className="border-b border-gray-700">
        <td className="py-3 px-2 font-bold">
          <div className="inline-flex space-x-3 items-center">
            <span><img className="rounded-full w-8 h-8" src="https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg" alt="" /></span>
            <span>{props.title}</span>
          </div>
        </td>
        <td className="py-3 px-2">{props.email}</td>
        <td className="py-3 px-2">{props.date}</td>
        {/* <td className="py-3 px-2">{appointmentCount}</td> */}
        <td className="py-3 px-2">
          <div className="inline-flex items-center space-x-3">
            <a href="" title="Edit" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            </a>
            <a href="" title="Edit password" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            </a>
            <a href="" title="Suspend user" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
            </a>
          </div>
        </td>
      </tr>



    </>
  );

};

export default AppointmentItem;
