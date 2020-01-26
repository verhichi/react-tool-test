import React from 'react';

function TheButton(props) {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick}
    >
      { props.children }
    </button>
  );
}

export default TheButton;
