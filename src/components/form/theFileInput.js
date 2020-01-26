import React, { useState } from 'react';

function TheFileInput(props) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    const file = e.target.files[0]
    console.log(file)

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setText(file.name)
      props.onChange(reader.result)
    }
  }

  return (
    <div className="custom-file">
      <div>{props.label}</div>
      <input type="file" className="custom-file-input" onChange={handleChange}/>
      <label className="custom-file-label">{text || 'Select File'}</label>
    </div>
  );
}

export default TheFileInput;
