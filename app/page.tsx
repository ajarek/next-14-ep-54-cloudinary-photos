import ImageCld from '@/components/ImageCld'
import UploadButton from '@/components/UploadButton'
import { v2 as cloudinary } from 'cloudinary'


interface CloudinaryResource {
  public_id: string
  secure_url: string
}
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const Home = async () => {
  const { resources } = await cloudinary.search.expression('').execute()

  return (
    <main className='flex min-h-screen flex-col items-center justify-start px-24 py-8'>
      <UploadButton/>
      <div className='w-full grid grid-cols-3 gap-4  place-items-center'>
        {resources.map((product: CloudinaryResource) => {
          return (
            <div className='' key={product.public_id}>
              <ImageCld
                src={product.secure_url}
                alt={product.public_id}
               
              />
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Home
