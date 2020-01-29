import React from 'react'
import PropTypes from 'prop-types'

function TheButton(props) {
  return (
    <button className={`btn ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

TheButton.propTypes = {
  label: PropTypes.String,
  className: PropTypes.String,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default TheButton
