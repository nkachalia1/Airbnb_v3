import React from 'react';

export function Input({ label, ...inputProps }) {
  return (
    <label className="input">
      {label}
      <input type="text" {...inputProps} />
    </label>
  );
}

export function TextArea({ label, ...textareaProps }) {
  return (
    <label className="textarea">
      {label}
      <textarea {...textareaProps} />
    </label>
  );
}

export function FormErrors({ errors }) {
  return (
    <div className="form-errors">
      {errors && errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default { Input, TextArea, FormErrors };
