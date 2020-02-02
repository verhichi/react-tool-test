import React from 'react'

interface TheButtonProps {
  className: string
  children: string
  onClick: () => void
}

function TheButton(props: TheButtonProps) {
  return (
    <button className={`btn ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default TheButton
