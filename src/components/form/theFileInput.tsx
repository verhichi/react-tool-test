import React, { useState, ChangeEvent } from 'react'

interface TheFileInputProps {
  label: string
  onChange: (value: string) => void
}

function TheFileInput(props: TheFileInputProps) {
  const [text, setText] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => {
      setText(file.name)
      props.onChange(reader.result as string)
    }
  }

  return (
    <div className="custom-file">
      <div>{props.label}</div>
      <input
        type="file"
        className="custom-file-input"
        onChange={handleChange}
      />
      <label className="custom-file-label">{text || 'Select File'}</label>
    </div>
  )
}

export default TheFileInput
