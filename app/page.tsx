'use client'
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start p-24'>
      <CldUploadButton uploadPreset="asikhvci" className='bg-primary text-primary-foreground px-4 py-1 rounded-sm mb-4 hover:bg-primary/40' />
      <CldImage
         width="960"
         height="600"
         src="samples/balloons"
         sizes="100vw"
         alt="Description of my image"
         opacity="40"
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
    </main>
  )
}
