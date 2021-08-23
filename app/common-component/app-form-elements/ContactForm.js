import { useState, useContext } from "react";

//Constant
import { CONST } from "../../services/constants";

//Services
import { fetchService } from "../../services/fetchService";

//Validator
import {
  firstNameValidator,
  emailValidator,
  textAreaValidator,
  phoneNumberValidator,
} from "../../services/validationService";

//Context API
import AppContext from "../../AppContext";

const UseContactForm = (
  fromObject,
  errorObj,
  setLoaderTime,
  setRegisterDone,
) => {
  let context = useContext(AppContext);
  //State
  const [inputs, setInputs] = useState(fromObject);
  const [errors, setErrors] = useState(errorObj);
  //Submit Handling
  const handleSubmit = async inputs => {
    let errorObject = {};
    Object.keys(inputs).forEach(input => {
      let error = validator(input, inputs[input]);
      if (error !== undefined) errorObject[input] = error;
      setErrors(err => ({
        ...err,
        [input]: error,
      }));
    });
    if (Object.values(errorObject).filter(err => err === false).length === 0) {
      console.log("Submitted - Values", inputs);
      // Loader start
      context.setAppContext({ ...context.appContext, loader: true });
      // Url
      let url = process.env.BASE_URL + process.env.PATH.CONTACT_US;
      // Body
      let body = {
        FirstName: inputs.firstName,
        LastName: inputs.lastName,
        Email: inputs.email,
        Phone: inputs.phoneNumber,
        Subject: inputs.subject,
        Message: inputs.message,
      };
      // Response
      let response = await fetchService(url, CONST.API_METHOD.POST, body);
      if (response.id) {
        setInputs(fromObject);
        //Loader stops
        context.setAppContext({ ...context.appContext, loader: false });
      } else alert("Oops! Something went wrong");
    }
  };
  // Validator Function
  const validator = (name, value) => {
    switch (name) {
      case "firstName":
        return firstNameValidator(value);
      case "email":
        return emailValidator(value);
      case "phoneNumber":
        return phoneNumberValidator(value);
      case "subject":
        return textAreaValidator(value);
      case "message":
        return textAreaValidator(value);
    }
  };
  // Input Change Handling
  const handleInputChange = e => {
    const { name, value } = e.target;
    let error = validator(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
    setInputs(inputs => ({
      ...inputs,
      [name]: value,
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
    errors,
  };
};

export default UseContactForm;
