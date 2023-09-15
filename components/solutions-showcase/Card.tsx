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
    <div className="w-[287px] box-styling rounded-t-xl bg-white text-gray-900 col">
      <NextLink href={solutionHref}>
        <div className=" rounded-t-xl">
          <div className="w-[287px] h-[243px] rounded-t-xl relative">
            <NextImage
              src={solutionImage}
              alt={'solution'}
              fill
              className="rounded-t-xl"
            />
          </div>

          <div className="flex  flex-col gap-2 p-4">
            <h4 className="text-2xl font-medium">{solutionTitle}</h4>
            <p>{solutionDescription}</p>
          </div>
        </div>
      </NextLink>
    </div>
  )
}
