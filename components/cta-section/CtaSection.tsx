import React from 'react'
import PrimaryButton from '../buttons/PrimaryButton'
import strings from '../../data/strings.json'

interface CtaSectionProps {
  ctaTitle?: string
  ctaDescription?: string
  ctaButtonType?: string
  ctaButtonHref?: string
}

export default function CtaSection({
  ctaTitle,
  ctaDescription,
  ctaButtonType,
}: CtaSectionProps) {
  // Determine the content and class names dynamically
  const title = ctaTitle || strings.CtaTitle
  const description = ctaDescription || strings.CtaDescription

  return (
    <div className="border-2 max-w-[1300px] m-auto mt-5">
      <h2 className="w-4/5 border-2 m-auto text-center font-bold text-5xl">
        {title}
      </h2>
      <p className="w-4/5 border-2 m-auto text-center">{description}</p>
      <PrimaryButton href="/contact">Contact us</PrimaryButton>
    </div>
  )
}
