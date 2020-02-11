import React, { useState, useEffect, useRef } from 'react'
import CropperJS from 'cropperjs'
import 'cropperjs/dist/cropper.css'
import './cropper.css'
import { getRoundedCanvas } from './getRoundedCanvas'
import TheButton from 'components/form/theButton'
import TheInput from 'components/form/theInput'
import TheFileInput from 'components/form/theFileInput'
import TheRadio from 'components/form/theRadio'

function Cropper() {
  const cropper = useRef<Cropper | null>(null)
  const [uploadType, setUploadType] = useState('url')
  const [url, setUrl] = useState('')
  const [croppedUrl, setCroppedUrl] = useState('')

  useEffect(() => {
    const el: HTMLImageElement = document.querySelector(
      '.v-cropper'
    ) as HTMLImageElement
    cropper.current = new CropperJS(el, {
      aspectRatio: 1,
      zoomable: false,
    })
  }, [])

  const handleUploadTypeChange = (value: string) => {
    setUploadType(value)
  }

  const handleUrlChange = (value: string) => {
    setUrl(value)
    cropper.current?.replace(value)
  }

  const handleClick = () => {
    const croppedImg = cropper.current?.getCroppedCanvas()
    setCroppedUrl(getRoundedCanvas(croppedImg).toDataURL('image/png'))
  }

  return (
    <div>
      <div>
        <h3>Upload Type</h3>
        <TheRadio
          label="URL"
          name="uploadType"
          value="url"
          checked={uploadType === 'url'}
          onChange={handleUploadTypeChange}
        />
        <TheRadio
          label="File"
          name="uploadType"
          value="file"
          checked={uploadType === 'file'}
          onChange={handleUploadTypeChange}
        />
      </div>
      <div>
        {uploadType === 'url' ? (
          <TheInput label="Image URL" value={url} onChange={handleUrlChange} />
        ) : (
          <TheFileInput label="Image File" onChange={handleUrlChange} />
        )}
      </div>
      <img className="v-cropper" src={url} alt="cropperjs" />
      <TheButton
        className="btn-outline-primary d-block my-3"
        onClick={handleClick}
      >
        CROP
      </TheButton>
      <img src={croppedUrl} alt="yay" />

      <a
        className="btn btn-primary d-block"
        download="cropped.png"
        href={croppedUrl}
      >
        DOWNLOAD CROPPED IMAGE
      </a>
    </div>
  )
}

export default Cropper
