import React from 'react'
import ContentFeaturedSeciton from './ContentFeaturedSeciton'
import ImageWrapper from '../common/ImageWrapper'
import Slika6 from '../../assets/slika6.jpg'
export default function FeaturedSection() {
  return (
    <div className="border-2 max-w-[1025px] m-auto flex flex-col align-middle md:flex-row justify-evenly mt-6">
      <ContentFeaturedSeciton />
      <ImageWrapper src={Slika6.src} alt="test" width={400} height={50} />
    </div>
  )
}
