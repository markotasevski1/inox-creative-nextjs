import React from 'react'
import NextImage from '../miscellaneous/NextImage'

export default function PartnersSection() {
  //@ts-ignore
  const images: any = require.context(
    '../../assets/partners',
    false,
    /\.(jpg)$/
  )

  const imageList = Array.from(
    new Set(images.keys().map((imagePath: string) => images(imagePath).default))
  )

  return (
    <div className="">
      <div className="max-w-[1300px] border-2 m-auto mt-10">
        <div className=" flex flex-col items-center justify-center text-3xl">
          <h2>Our Partnership</h2>
          <p className="text-sm">
            We are pleased to work with hundreds of partners. Those who work
            with us globally include:
          </p>
        </div>
        <div className="p-4 flex items-center justify-center gap-x-20  overflow-scroll ">
          {imageList.map(
            //@ts-ignore
            (image: string, index: number) =>
              image && (
                <NextImage
                  key={index}
                  src={image || ''}
                  alt={`Image ${index + 1}`}
                  width={190}
                  height={190}
                />
              )
          )}
        </div>
      </div>
    </div>
  )
}
