import React, { ChangeEvent } from 'react'

interface TheInputProps {
  label: string
  type?: string
  value: string
  onChange: (value: string) => void
}

function TheInput(props: TheInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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

export default TheInput
