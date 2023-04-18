import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './AppointmentForm.css';

const UpdateAppointment = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedAppointment, setLoadedAppointment] = useState();
  const appointmentId = useParams().appointmentId;
  const history = useHistory();

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      date: {
        value: '',
        isValid: false
      }
    },
    false
  );

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/appointments/${appointmentId}`
        );
        setLoadedAppointment(responseData.appointment);
        setFormData(
          {
            title: {
              value: responseData.appointment.title,
              isValid: true
            },
            date: {
              value: responseData.appointment.date,
              isValid: true
            }
          },
          true
        );
      } catch (err) {}
    };
    fetchAppointment();
  }, [sendRequest, appointmentId, setFormData]);

  const appointment = async event => {
    event.preventDefault();
    try {
      await sendRequest(
        `http://localhost:5000/api/appointments/${appointmentId}`,
        'PATCH',
        JSON.stringify({
          title: formState.inputs.title.value,
          date: formState.inputs.date.value
        }),
        {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token
        }
      );
      history.push('/' + auth.userId + '/appointments');
    } catch (err) {}
  };

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!loadedAppointment && !error) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find appointment!</h2>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && loadedAppointment && (
        <form className="place-form" onSubmit={appointmentUpdateSubmitHandler}>
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            initialValue={loadedAppointment.title}
            initialValid={true}
          />
          <Input
            id="date"
            element="textarea"
            label="Date"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid date (min. 5 characters)."
            onInput={inputHandler}
            initialValue={loadedAppointment.date}
            initialValid={true}
          />
          <Button type="submit" disabled={!formState.isValid}>
            UPDATE appointment
          </Button>
        </form>
      )}
    </React.Fragment>
  );
};

export default UpdateAppointment;
