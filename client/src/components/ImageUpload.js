import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ImageUpload.css';

function ImageUpload() {
    const [image, setImage] = useState(null);
    const [item, setItem] = useState("");

    const itemDescriptions = {
      "glass": "recycle it"
    }

    const identifyItem = item_image => {
      // algorithm to identify image category using machine learning

      // once item is identified, setItem to identified item
      setItem("glass");
    }
  
    const handleDrop = acceptedFiles => {
      setImage(acceptedFiles[0]);
      // once image is set, identify it
      identifyItem(image);
    };
  
    const renderImage = item => {
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

    const renderItemInfo = () => {
      return (
        <div>
          <h3>{item}</h3>
          <p>{itemDescriptions[item]}</p>
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
          <>
            <ImageGallery
              items={images}
              showNav={false}
              showPlayButton={false}
              showFullscreenButton={false}
              renderItem={renderImage}
            />
            {renderItemInfo()}
          </>
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