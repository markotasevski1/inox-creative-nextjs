import React from 'react'
import NextImage from '../miscellaneous/NextImage'
import Image from '../../assets/slika2.jpg'
export default function ThreeImages() {
  return (
    <div className="relative">
      <div className="flex mt-10 items-baseline justify-center gap-1 relative top-5 ">
        <NextImage
          src={Image}
          alt="slika2"
          width={240}
          height={150}
          className="box-styling-black rounded border-1"
        />
        <NextImage
          src={Image}
          alt="slika2"
          width={300}
          height={190}
          className="box-styling-black rounded border-1"
        />
        <NextImage
          src={Image}
          alt="slika2"
          width={240}
          height={150}
          className="box-styling-black rounded border-1"
        />
      </div>
    </div>
  )
}
