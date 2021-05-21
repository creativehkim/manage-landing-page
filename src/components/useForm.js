import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [value, setValue] = useState({
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValue({
      ...value,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(value));
    setIsSubmitting(true);

    console.log('error')
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },

    [errors]
  );

  return { handleChange, handleSubmit, value, errors };
};

export default useForm;