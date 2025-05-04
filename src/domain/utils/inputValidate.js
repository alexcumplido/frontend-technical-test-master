import { validate } from "../clientValidator.js";

export const validateInput = (inputValue, setErrorMessage) => {
  if (validate(inputValue)) {
    setErrorMessage(false);
    return true;
  } else {
    setErrorMessage(true);
    return false;
  }
};
