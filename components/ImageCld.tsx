'use client'

import { CldImage } from 'next-cloudinary'
const ImageCld = ({ alt, src}:{alt:string, src:string}) => {
  return (
    <div>
       <CldImage
        width={400}
        height={250}
        alt={alt}
        src={src}    
        crop="fill"    
        // overlays={[{
        //   text: {
        //     color: 'white',
        //     fontFamily: 'Source Sans Pro',
        //     fontSize: 80,
        //     fontWeight: 'bold',
        //     text: `${alt}`
        //   }
        // }]}
      />
    </div>
  )
}

export default ImageCld
