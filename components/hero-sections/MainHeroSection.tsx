'use client'
import NextLink from 'next/link'
// @ts-ignore
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'
import PrimaryButton from '../buttons/PrimaryButton'

export function MainHeroSection() {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Handy', 'Mandy', 'Candy', 'More Strings'], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
    })

    // Destropying
    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <div className="relative max-w-5xl border-2 mx-auto pt-20 sm:pt-24 lg:pt-32">
      <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
        Rapidly build modern websites without ever leaving your HTML.
      </h1>
      <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
        A utility-first CSS framework packed with classes like{' '}
        <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
          flex
        </code>
        ,{' '}
        <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
          pt-4
        </code>
        ,{' '}
        <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
          text-center
        </code>{' '}
        and{' '}
        <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
          rotate-90
        </code>{' '}
        that can be composed to build any design, directly in your markup.
      </p>
      <span ref={el}></span>
      <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
        <PrimaryButton>Get started</PrimaryButton>
      </div>
    </div>
  )
}
