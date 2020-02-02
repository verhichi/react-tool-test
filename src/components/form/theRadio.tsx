import React, { ChangeEvent } from 'react'

interface TheRadioProps {
  label: string
  name: string
  checked: boolean
  value: string
  onChange: (value: string) => void
}

function TheRadio(props: TheRadioProps) {
  const id = `radio_${props.name}_${props.label}`
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value)
  }

  return (
    <div className="custom-control custom-radio">
      <input
        id={id}
        type="radio"
        name={props.name}
        className="custom-control-input"
        checked={props.checked}
        value={props.value}
        onChange={handleChange}
      />
      <label className="custom-control-label" htmlFor={id}>
        {props.label}
      </label>
    </div>
  )
}

export default TheRadio
