import ImageCld from '@/components/ImageCld'
import UploadButton from '@/components/UploadButton'
import { v2 as cloudinary } from 'cloudinary'
import Link from 'next/link'

interface CloudinaryResource {
  public_id: string
  secure_url: string
  filename: string
  display_name: string
}
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const Home = async () => {
  const { resources } = await cloudinary.search
    .max_results()
    .expression()
    .execute()

  return (
    <main className='flex min-h-screen flex-col items-center justify-start px-24 max-lg:px-4 py-8'>
      <UploadButton />
      <div className='w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4  place-items-center'>
        {resources.map((item: CloudinaryResource) => {
          return (
            <Link
              href={`/link?id=${item.public_id}&alt=${item.display_name}`}
              className=''
              key={item.public_id}
            >
              <ImageCld
                src={item.secure_url}
                alt={item.public_id}
              />
            </Link>
          )
        })}
      </div>
    </main>
  )
}

export default Home
