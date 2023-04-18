import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
//importing form elements
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
// import ImageUpload from '../../shared/components/FormElements/ImageUpload';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './AppointmentForm.css';

const NewAppointment = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      date: {
        value: '',
        isValid: false
      },
    },
    false
  );

  const history = useHistory();

  const appointmentSubmitHandler = async event => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', formState.inputs.title.value);
      formData.append('date', formState.inputs.date.value);
    
      await sendRequest('http://localhost:5000/api/appointments', 'POST', formData, {
        Authorization: 'Bearer ' + auth.token
      });
      history.push('/');
    } catch (err) {}
  };

  return (
    <>
    {/* <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="appointment-form" onSubmit={appointmentSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input
          id="title"
          element="input"
          type="text"
          label="title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
        />
        <Input
          id="date"
          element="textarea"
          label="date"
          validators={[VALIDATOR_MINLENGTH(4)]}
          errorText="Please enter a valid date (at least 4 characters)."
          onInput={inputHandler}
        />
        
        
        <Button type="submit">
          ADD appointment
        </Button>
      </form>
    </React.Fragment> */}
    <div className="container mt-60 h-90">
			<div className="flex justify-center px-6 my-12">
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					<div
						className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"></div>
					<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Update Patient</h3>
              <form onSubmit={appointmentSubmitHandler}>
                {isLoading && <LoadingSpinner asOverlay />}
              <div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="title">
									Patient Name
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="title"
                  type="text"
                  element="input"
                  label="title"
                  validators={[VALIDATOR_REQUIRE()]}
                  placeholder=""
                  onInput={inputHandler}

								/>
                </div>
              <div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="address">
									Address
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="address"
                  type="textarea"
                  element="input"
                  label="address"
                  validators={[VALIDATOR_REQUIRE()]}
                  placeholder=""
                  onInput={inputHandler}

								/>
                </div>
                <div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="guardian">
										Guardian
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="guardian"
                    element="input"
                    type="text"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a a guardian name."
                    onInput={inputHandler}
                    />
              
                  </div>
                  <div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="guardian">
										Guardian Tel
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="guardian"
                    element="input"
                    type="text"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a a guardian name."
                    onInput={inputHandler}
                    />
              
                  </div>
                  
        
							</div>
               
						
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Register Account
								</button>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="#"
								>
									Forgot Password?
								</a>
							</div>
							<div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./index.html"
								>
									Already have an account? Login!
								</a>
							</div>
						</form>
            </div>
            
          </div>
          
        </div>
        
      </div>
      
    </>
  );
};

export default NewAppointment;
