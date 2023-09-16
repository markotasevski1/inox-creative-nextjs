'use client'
import React from 'react'
import { Button } from '../buttons/Button'
import strings from '../../data/strings.json'
import animateCtaTitle from '../../animation/animation.js'
import { useEffect } from 'react'
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
  useEffect(() => {
    // Call the animation function after the component is mounted
    animateCtaTitle()
  }, [])
  return (
    <div className="bg-slight-dark-blue ">
      <div className="cta-title pt-10 max-w-7xl  m-auto   flex flex-col gap-6  pb-4">
        <h2 className="w-4/5 m-auto text-center font-medium text-4xl">
          {title}
        </h2>
        <p className="w-4/5  m-auto text-center max-w-4xl">{description}</p>

        <div className="m-auto w-fit ">
          <Button href={ctaButtonHref} color="sky">
            Contact us
          </Button>
        </div>
      </div>
    </div>
  )
}
