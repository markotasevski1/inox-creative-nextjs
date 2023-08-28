import React, { useEffect, useState } from 'react'
import ContentFeaturedSeciton from './ContentFeaturedSeciton'
import ImageWrapper from '../common/ImageWrapper'
import Slika6 from '../../assets/slika6.jpg'
async function getData() {
  const res = await fetch('http://127.0.0.1:1337/api/machines')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
export default async function FeaturedSection() {
  const data = await getData()
  return (
    <div className="border-2 max-w-[1025px] m-auto flex flex-col align-middle md:flex-row justify-evenly mt-6">
      <ContentFeaturedSeciton />

      <ImageWrapper src={Slika6.src} alt="test" width={400} height={50} />
    </div>
  )
}
