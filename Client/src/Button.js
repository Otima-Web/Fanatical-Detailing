
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['Section', 'other', 'mobile'];

export const Button = ({
  children,
  path,
  type,
  onClick,
  buttonStyle
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <Link to={path} className='btn'>
      <button
        className={`btn ${checkButtonStyle}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
      <div className='bar'></div>
    </Link>
  );
};

