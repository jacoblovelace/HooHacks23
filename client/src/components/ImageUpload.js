import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import ImageGallery from 'react-image-gallery';

function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleDrop = acceptedFiles => {
    setImage(acceptedFiles[0]);
  };

  let images = [];
  if (image) {
    images = [
      {
        original: URL.createObjectURL(image),
        thumbnail: URL.createObjectURL(image),
        // any other details you want to display
      }
    ];
  }

  return (
    <div>
      <Dropzone onDrop={handleDrop}>
        {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
                <div className="photo_upload">
                    <div>
                        <span>Upload image here</span>
                        <button>Upload</button>
                    </div>
                </div>
                <input {...getInputProps()} />
                <p>Drag 'n' drop an image here, or click to select an image</p>
            </div>
        )}
      </Dropzone>
      <ImageGallery items={images} />
    </div>
  );
}

export default ImageUpload;