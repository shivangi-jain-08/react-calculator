import React from 'react';

const Button = ({ onClick, value, className }) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {value}
    </button>
  );
};

export default Button;
