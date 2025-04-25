import React from 'react';

function InputBox({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Enter URL"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default InputBox;
