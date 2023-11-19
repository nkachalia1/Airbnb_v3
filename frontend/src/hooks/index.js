import { useState } from 'react';

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
}

export function useSubmit({ createListing, onSuccess }) {
    const [errors, setErrors] = useState(null);

    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        const createdListing = createListing();
        const response = await createdListing();

        // Check for error in response (customize based on your response structure)
        if (response && response.error) {
          setErrors(response.error);
        } else {
          setErrors(null);
          onSuccess(); // Call the success callback
        }
      } catch (error) {
        setErrors(error.message || 'Something went wrong');
      }
    };

    return [errors, onSubmit];
}
