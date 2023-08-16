import React from 'react'
import PrimaryButton from '../buttons/PrimaryButton'

export default function CtaSection() {
  return (
    <div className="border-2 max-w-[1025px] m-auto mt-5">
      <h3>Experience the Difference:</h3>
      <p>
        Are you ready to take your business to new heights? At Inox Creative, we
        specialize in providing state-of-the-art machines that are designed to
        revolutionize your industry. Boost your production capabilities and
        streamline your operations with our advanced machines.{' '}
      </p>
      <PrimaryButton href="/contact">Contact us</PrimaryButton>
    </div>
  )
}
