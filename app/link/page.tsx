import { v2 as cloudinary } from 'cloudinary'
import Image from 'next/image'
interface CloudinaryResource {
  public_id: string
  secure_url: string
}
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})
 
const Link = async () => {
  const { resources } = await cloudinary.search
    .expression('')
    .execute()

  return (
    <div className='w-full grid grid-cols-3 gap-4 px-12 py-8 place-items-center'>
      {resources.map((product: CloudinaryResource) => {
        return (
          <div key={product.public_id}>
            <Image
              src={product.secure_url}
              alt={product.public_id}
              width={300}
              height={300}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Link
