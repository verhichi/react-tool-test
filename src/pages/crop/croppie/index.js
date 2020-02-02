import React, { useRef, useState, useEffect } from 'react'
import './croppie.css'
import CroppieJS from 'croppie'
import 'croppie/croppie.css'

import TheInput from 'components/form/theInput'

function Croppie() {
  const croppie = useRef(null)
  const [url, setUrl] = useState('')

  const setCroppie = () => {
    croppie.current && croppie.current.destroy()
    croppie.current = new CroppieJS(document.querySelector('.v-croppie'), {
      viewport: {
        width: 100,
        height: 100,
        type: 'circle',
      },
      boundary: {
        width: 300,
        height: 300,
      },
    })
    croppie.current.bind({ url })
  }

  useEffect(() => {
    setCroppie()
  }, [])

  const handleUrlChange = value => {
    setUrl(value)
    croppie.current.bind({ url: value })
  }

  return (
    <div>
      <TheInput label="Image URL" value={url} onChange={handleUrlChange} />
      <div className="v-croppie"></div>
    </div>
  )
}

export default Croppie
