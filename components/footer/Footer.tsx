import React from 'react'
import { navigationItems } from '../navigation-menu/navigationItems'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

export default function Footer({ className }: { className: string }) {
  return (
    <div className="mt-10 p-4 bg-stone-800 text-stone-300">
      <nav className="mt-4 flex justify-center items-center gap-x-4 text-lg">
        {navigationItems.map((item, index) => (
          <Link href={item.href} key={index}>
            <div
              className={`py-1 px-2 ${
                index !== navigationItems.length - 1
                  ? 'border-r border-stone-500'
                  : ''
              }`}
            >
              <h2 className="px-4">{item.name}</h2>
            </div>
          </Link>
        ))}
      </nav>
      <div className="mt-4 flex flex-col justify-center items-center gap-x-4 text-lg">
        <Link href="/privacy-policy">
          <div className=" border-stone-500 py-1 px-2">Privacy policy</div>
        </Link>
        <p>Copyright © Inox Creative 2015 - 2023</p>
      </div>
    </div>
  )
}
