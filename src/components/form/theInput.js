import React from 'react';

function TheInput(props) {
  const handleChange = e => {
    props.onChange(e.target.value)
  }

  return (
    <div className="form-group">
      <label>
        {props.label}
      </label>
      <input
        type={props.type || 'text'}
        className="form-control"
        onChange={handleChange}
        value={props.value}
      />
    </div>
  );
}

export default TheInput;
