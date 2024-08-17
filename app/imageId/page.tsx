'use client'

import { CldImage } from 'next-cloudinary'
const ImageId = () => {
  return (
    <div>
       <CldImage
        width={640}
        height={360}
        alt="jazz band playing"
        src="samples/people/jazz"
        crop="fill"
        // remove="woman with raised hands"
        replace={["saxophone", "holding a cat "]}
    
        
        overlays={[{
          text: {
            color: 'white',
            fontFamily: 'Source Sans Pro',
            fontSize: 80,
            fontWeight: 'bold',
            text: 'Text...'
          }
        }]}
      />
    </div>
  )
}

export default ImageId
