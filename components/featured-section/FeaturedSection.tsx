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
    <div className=" max-w-[1200px] m-auto flex align-middle md:flex-row justify-evenly mt-6">
      <ContentFeaturedSeciton />

      <ImageWrapper
        className="w-1/2  flex  items-center justify-center"
        src={Slika6.src}
        alt="test"
        width={370}
        height={100}
      />
    </div>
  )
}
