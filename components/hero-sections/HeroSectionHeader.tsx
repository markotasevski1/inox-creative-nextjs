'use client'
import NextLink from 'next/link'
// @ts-ignore
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'
export default function HeroSectionHeader() {
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
    <div className=" max-w-4xl m-auto">
      <h1 className="text-slate-900  font-extrabold text-4xl sm:text-4xl lg:text-6xl tracking-tight text-center dark:text-white ">
        Rapidly build modern websites without ever leaving your HTML.
      </h1>
      <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400 ">
        A utility-first CSS framework packed with classes like{' '}
        <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
          <span ref={el}></span>
        </code>
        that can be composed to build any design, directly in your markup..
      </p>
    </div>
  )
}
