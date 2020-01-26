import React from 'react';

function TheRadio(props) {
  const id = `radio_${props.name}_${props.label}`
  return (
    <div className="custom-control custom-radio">
      <input
        id={id}
        type="radio"
        name={props.name}
        className="custom-control-input"
        checked={props.checked}
        value={props.value}
        onChange={props.onChange}
      />
      <label className="custom-control-label" htmlFor={id}>
        {props.label}
      </label>
    </div>
  );
}

export default TheRadio;
