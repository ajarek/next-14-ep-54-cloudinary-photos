'use client'

import { CldImage } from 'next-cloudinary'
import Link from 'next/link'

import { notFound } from 'next/navigation'
import { useState } from 'react'

const ImageIdPage = ({
  searchParams,
}: {
  searchParams: { id: string; alt: string }
}) => {
  const { id, alt } = searchParams
  const [err, setErr] = useState(false)
  if (!id || !alt) {
    notFound()
  }
  const imageError = () => {
    setErr(true)
  }
  return (
    <div className='flex justify-center items-center px-24 py-8'>
      {err ? (
        <main className='  min-h-[calc(100vh-64px)] w-full flex flex-col items-center justify-center '>
          <>
            <h2 className='text-3xl'>There was a problem.</h2>
            <p>We could not find the page you were looking for.</p>
            <p>
              Go back to the{' '}
              <Link
                className='underline text-green-700 text-xl'
                href='/'
              >
                Home
              </Link>
              .
            </p>
          </>
        </main>
      ) : (
        <CldImage
          width={800}
          height={500}
          alt={alt}
          src={id}
          crop='fill'
          onError={imageError}
          overlays={[
           
            {
              position: {
                x: 0,
                y: 15,
                gravity: 'south',
              },
              text: {
                color: 'red',
                fontFamily: 'Source Sans Pro',
                fontSize: 80,
                fontWeight: '',
                text: `${alt}`,
              },
            },
          ]}
        />
      )}
    </div>
  )
}

export default ImageIdPage
