import React from 'react'
import PropTypes from 'prop-types'

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
  )
}

TheRadio.propTypes = {
  label: PropTypes.String,
  name: PropTypes.String,
  checked: PropTypes.bool,
  value: PropTypes.node,
  onChange: PropTypes.func,
}

export default TheRadio
