'use client'

import { CldUploadButton } from 'next-cloudinary'

const UploadButton = () => {
  return (
    <CldUploadButton
      uploadPreset='vtpbn9he'
      className='bg-primary text-primary-foreground px-4 py-1 rounded-sm mb-4 hover:bg-primary/40'
    />
  )
}

export default UploadButton
