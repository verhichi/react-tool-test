import React from 'react'
import PropTypes from 'prop-types'

function TheSelect(props) {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <select
        className="form-control"
        value={props.value}
        onChange={props.onChange}
      >
        {props.options.map((value, idx) => (
          <option value={value} key={idx}>
            {value}
          </option>
        ))}
      </select>
    </div>
  )
}

TheSelect.propTypes = {
  label: PropTypes.String,
  value: PropTypes.String,
  onChange: PropTypes.func,
  options: PropTypes.array,
}

export default TheSelect
