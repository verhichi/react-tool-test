import React from 'react';

function TheSelect(props) {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <select
        className="form-control"
        value={props.value}
        onChange={props.onChange}
      >
        {props.options.map(value => <option value={value}>{value}</option>)}
      </select>
    </div>
  );
}

export default TheSelect;
