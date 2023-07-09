'use strict'

export const generateBlobImagePath = (e) => {
  const fileData = e.target.files[0]
  return URL.createObjectURL(fileData)
}
