import React, { useState, useEffect, useRef } from 'react';
import CropperJS from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import './cropper.css'
import TheButton from 'components/form/theButton';
import TheInput from 'components/form/theInput';
import TheFileInput from 'components/form/theFileInput';
import TheRadio from 'components/form/theRadio';

function Cropper() {
  const cropper = useRef(null);
  const [uploadType, setUploadType] = useState('url');
  const [url, setUrl] = useState('');
  const [croppedUrl, setCroppedUrl] = useState('');

  useEffect(() => {
    cropper.current = new CropperJS(document.querySelector('.v-cropper'), {
      aspectRatio: 1,
      zoomable: false
    });
  }, []);

  const handleUploadTypeChange = (e) => {
    setUploadType(e.target.value);
  }

  const handleUrlChange = (e) => {
    setUrl(e)
    cropper.current.replace(e)
  }

  const handleClick = (e) => {
    const croppedImg = cropper.current.getCroppedCanvas()
    setCroppedUrl(getRoundedCanvas(croppedImg).toDataURL('image/png'));
  }

  return (
    <div>
      <div>
        <h3>Upload Type</h3>
        <TheRadio label="URL" name="uploadType" value="url" checked={uploadType === 'url'} onChange={handleUploadTypeChange}/>
        <TheRadio label="File" name="uploadType" value="file" checked={uploadType === 'file'} onChange={handleUploadTypeChange}/>
      </div>
      <div>
        {uploadType === 'url'
          ? <TheInput label="Image URL" value={url} onChange={handleUrlChange}/>
          : <TheFileInput label="Image File" value={url} onChange={handleUrlChange}/>
        }
      </div>
      <img className="v-cropper" src={url} alt="cropperjs"/>
      <TheButton
        className="btn-outline-primary d-block my-3"
        onClick={handleClick}
      >
        CROP
      </TheButton>
      <img src={croppedUrl} alt="yay" />

      <a className="btn btn-primary d-block" download="cropped.png" href={croppedUrl}>
        DOWNLOAD CROPPED IMAGE
      </a>
    </div>
  );
}

function getRoundedCanvas(sourceCanvas) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const width = sourceCanvas.width;
  const height = sourceCanvas.height;

  canvas.width = width;
  canvas.height = height;
  context.imageSmoothingEnabled = true;
  context.drawImage(sourceCanvas, 0, 0, width, height);
  context.globalCompositeOperation = 'destination-in';
  context.beginPath();
  context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
  context.fill();
  return canvas;
};

export default Cropper;
