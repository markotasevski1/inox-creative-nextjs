import Image from 'next/image'
import { ImageProps } from 'next/image'
export default function NextImage({ src, alt, ...props }: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={props.fill}
      width={props.width}
      height={props.height}
    />
  )
}
