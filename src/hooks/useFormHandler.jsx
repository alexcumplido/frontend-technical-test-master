// Description: This custom hook handles form submission and input validation. It is still pending of implementation

import { useState } from "react";
import { validate } from "../services/clientValidator";

export const useFormHandler = (onSubmit) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate(inputValue)) {
      setErrorMessage("");
      onSubmit(inputValue);
    } else {
      setErrorMessage("Is Not Valid URL");
    }
  };

  return {
    inputValue,
    setInputValue,
    errorMessage,
    handleSubmit,
  };
};

// Usage example in a App.js:
const { inputValue, setInputValue, errorMessage, handleSubmit } =
  useFormHandler(async (repoUrl) => {
    const results = await getRepoData(repoUrl);
    setResults(results);
  });
