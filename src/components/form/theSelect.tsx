import React, { ChangeEvent } from 'react'

interface TheSelectProps {
  value: string
  label: string
  onChange: (value: string) => void
  options: Array<string>
}

function TheSelect(props: TheSelectProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    props.onChange(e.target.value)
  }

  return (
    <div className="form-group">
      <label>{props.label}</label>
      <select
        className="form-control"
        value={props.value}
        onChange={handleChange}
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

export default TheSelect
