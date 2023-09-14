import React from 'react'
import { Button } from '../buttons/Button'
import strings from '../../data/strings.json'

interface CtaSectionProps {
  ctaTitle?: string
  ctaDescription?: string
  ctaButtonType?: string
  ctaButtonHref: string
}

export default function CtaSection({
  ctaTitle,
  ctaDescription,
  ctaButtonType,
  ctaButtonHref,
}: CtaSectionProps) {
  const title = ctaTitle || strings.CtaTitle
  const description = ctaDescription || strings.CtaDescription

  return (
    <div className=" border-2 max-w-[1300px] m-auto mt-5 flex flex-col gap-6">
      <h2 className="w-4/5 m-auto text-center font-bold text-5xl">{title}</h2>
      <p className="w-4/5  m-auto text-center max-w-4xl">{description}</p>

      <div className="m-auto w-fit ">
        <Button href={ctaButtonHref} color="sky">
          Contact us
        </Button>
      </div>
    </div>
  )
}
