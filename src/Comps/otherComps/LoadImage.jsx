import { useRef, useState } from 'react'
import { generateBlobImagePath } from '../../APIs/imageLoad'
import { readImageText } from '../../APIs/tesseract'
import uploadImage from '../../images/uploadImage.png'

const LoadImage = ({ setTextareaRef }) => {
  const handleImageLoad = async (event) => {
    const generatedBlobPath = generateBlobImagePath(event)
    const imageText = await readImageText(generatedBlobPath)
    console.log(imageText)
    setTextareaRef(imageText)
  }

  return (
    <div className="open-image-wrapper">
      <label htmlFor="image-file">
        <img
          src={uploadImage}
          alt="load image"
          style={{ width: '18px', height: '18px' }}
        />
      </label>
      <input
        onChange={(e) => {
          handleImageLoad(e)
        }}
        type="file"
        id="image-file"
        accept="image/*"
      />
    </div>
  )
}

export default LoadImage
