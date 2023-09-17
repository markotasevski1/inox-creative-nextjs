import React, { useEffect, useState } from 'react'
import ContentFeaturedSeciton from './ContentFeaturedSeciton'
import ImageWrapper from '../common/ImageWrapper'
import Slika6 from '../../assets/slika6.jpg'
type FeaturedSection = {
  flexDirection: 'row' | 'row-reverse'
}
export default async function FeaturedSection({
  flexDirection,
}: FeaturedSection) {
  console.log(flexDirection)
  const directionCss = flexDirection === 'row' ? 'flex-row' : 'flex-row-reverse'
  return (
    <div className="">
      <div
        className={` mb-10 max-w-[1050px] ${directionCss} m-auto flex align-middle  justify-evenly mt-6`}
      >
        <ContentFeaturedSeciton />

        <ImageWrapper
          className="w-1/2 pl-32 flex   items-center justify-center "
          src={Slika6.src}
          alt="test"
          width={370}
          height={100}
        />
      </div>
    </div>
  )
}
