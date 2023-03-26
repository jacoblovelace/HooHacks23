import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ImageUpload.css';

function ImageUpload() {
    const [image, setImage] = useState(null);
  
    const handleDrop = acceptedFiles => {
      setImage(acceptedFiles[0]);
    };
  
    const renderImage = (item) => {
      return (
        <div className="image-wrapper">
          <img
            src={item.original}
            alt={item.originalAlt}
            className="custom-image"
          />
        </div>
      );
    }
  
    let images = [];
    if (image) {
      images = [
        {
          original: URL.createObjectURL(image),
          thumbnail: false,
        }
      ];
    }
  
    return (
        <div>
        {image ? (
          <ImageGallery
            items={images}
            showNav={false}
            showPlayButton={false}
            showFullscreenButton={false}
            renderItem={renderImage}
          />
        ) : (
          <Dropzone onDrop={handleDrop}>
            {({getRootProps, getInputProps}) => (
              <div {...getRootProps()}>
                <div className="photo_upload">
                  <div>
                    <span>Click here or drag n' drop to upload image</span>
                    <input {...getInputProps()} />
                  </div>
                </div>
              </div>
            )}
          </Dropzone>
        )}
      </div>
    );
  }

export default ImageUpload;