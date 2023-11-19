import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createListing } from '../../store/listings';

const ListingForm = () => {
  const dispatch = useDispatch();

  // State values for form inputs
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [beds, setBeds] = useState('');

  // Errors state
  const [errors, setErrors] = useState([]);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form inputs before submission
    const errorsArray = [];

    if (!title) {
      errorsArray.push('Title is required.');
    }

    if (!price || isNaN(price)) {
      errorsArray.push('Price must be a number.');
    }

    if (!description) {
      errorsArray.push('Description is required.');
    }

    if (!beds || isNaN(beds)) {
      errorsArray.push('Beds must be a number.');
    }

    // If there are errors, setErrors to display them
    if (errorsArray.length > 0) {
      setErrors(errorsArray);
    } else {
      // If no errors, dispatch the action to create listing
      const listingData = {
        title,
        price: parseFloat(price), // Convert to number
        description,
        beds: parseInt(beds), // Convert to number
      };

      try {
        // Dispatch the action and handle response
        const response = await dispatch(createListing(listingData));

        // If successful, redirect to '/'
        if (response.success) {
          window.location.href = '/'; // Redirect to home
        } else {
          // If there's an error, set the errors to display
          setErrors(response.errors || ['Error creating listing']);
        }
      } catch (error) {
        console.error('Error creating listing:', error);
        setErrors(['Error creating listing']);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... (input fields) ... */}
      <button type="submit">Submit</button>

      {/* Display errors if there are any */}
      {errors.length > 0 && (
        <div style={{ color: 'red' }}>
          <h4>Error:</h4>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );

};

export default ListingForm;
