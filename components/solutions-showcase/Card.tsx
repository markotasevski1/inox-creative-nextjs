import NextLink from 'next/link'

import NextImage from '../miscellaneous/NextImage'
import { StaticImport } from '@/types/types'
type CardProps = {
  solutionTitle?: string
  solutionDescription?: string
  solutionImage: string | StaticImport
  solutionHref?: string
}
export default function Card({
  solutionTitle = 'test',
  solutionDescription = 'test',
  solutionImage = 'test',
  solutionHref = 'test',
}: CardProps) {
  return (
    <div className="w-30% border-2">
      <NextLink href={solutionHref}>
        <div>
          <NextImage
            src={solutionImage}
            alt={'solution'}
            width={100}
            height={100}
          />
          <h4>{solutionTitle}</h4>
          <p>{solutionDescription}</p>
        </div>
      </NextLink>
    </div>
  )
}
