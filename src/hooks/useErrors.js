import { useState } from "react";

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  function setError(fieldName, errorMessage) {
    const errorAlreadyExists = errors.find((err) => err.field === fieldName);

    if (errorAlreadyExists) {
      return;
    }

    setErrors((prevState) => [
      ...prevState,
      { field: fieldName, message: errorMessage },
    ]);
  }

  function removeError(fieldName) {
    setErrors((prevState) =>
      prevState.filter((err) => err.field !== fieldName)
    );
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((err) => err.field === fieldName)?.message;
  }

  return { setError, removeError, getErrorMessageByFieldName };
}
