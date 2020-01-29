import React, { useRef, useState, useEffect } from 'react'
import './croppie.css'
import CroppieJS from 'croppie/croppie'
import 'croppie/croppie.css'

import TheInput from 'components/form/theInput'

function Croppie() {
  let croppie = useRef(null)
  const [url, setUrl] = useState('url')

  useEffect(() => {
    setCroppie()
  }, [])

  const setCroppie = () => {
    croppie && croppie.destroy()
    croppie = new CroppieJS(document.querySelector('.v-croppie'), {
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
    croppie.bind({ url: this.state.url })
  }

  const handleUrlChange = e => {
    setUrl(e.target.value)
    croppie.bind({ url: e.target.value })
  }

  return (
    <div>
      <TheInput label="Image URL" value={url} onChange={handleUrlChange} />
      <div className="v-croppie"></div>
    </div>
  )
}

export default Croppie
