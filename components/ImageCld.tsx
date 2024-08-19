'use client'

import { CldImage } from 'next-cloudinary'
const ImageCld = ({ alt, src }: { alt: string; src: string }) => {
  return (
    <div>
      <CldImage
        width={400}
        height={250}
        alt={alt}
        src={src}
        crop='fill'
      />
    </div>
  )
}

export default ImageCld
