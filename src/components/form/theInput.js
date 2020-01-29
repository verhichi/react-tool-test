import React from 'react'
import PropTypes from 'prop-types'

function TheInput(props) {
  const handleChange = e => {
    props.onChange(e.target.value)
  }

  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input
        type={props.type || 'text'}
        className="form-control"
        onChange={handleChange}
        value={props.value}
      />
    </div>
  )
}

TheInput.propTypes = {
  label: PropTypes.String,
  type: PropTypes.String,
  value: PropTypes.node,
  onChange: PropTypes.func,
}

export default TheInput
