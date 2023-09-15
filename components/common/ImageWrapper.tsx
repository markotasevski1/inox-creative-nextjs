import Image from 'next/image'
import React from 'react'
import ImageProps from 'next/image'
import { twMerge } from 'tailwind-merge'
type ImageProps = {
  src: string
  alt: string
  width?: number | `${number}`
  height?: number | `${number}`
  fill?: boolean
  quality?: number | `${number}`
  objectFit?: string | undefined
  objectPosition?: string | undefined
  priority?: boolean
  className?: string
}
export default function ImageWrapper({ ...props }: ImageProps) {
  return (
    <div className={twMerge(props.className, 'boreder-2 m-auto')}>
      <Image
        src={props.src}
        alt={props.alt}
        fill={props.fill}
        width={props.width}
        height={props.height}
        objectFit={props.objectFit}
        objectPosition={props.objectPosition}
      />
    </div>
  )
}
