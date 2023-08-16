'use client'

import Logo from './Logo'
import { FaBars, FaTimes } from 'react-icons/fa'

import { useState } from 'react'
import NavItems from './NavItems'

type NavigationMenuProps = {
  menuItems?: string[]
}
export default function NavigationMenu({ menuItems }: NavigationMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className=" border-red-500 bg-dark-blue">
      <div className="w-full max-w-xxl  flex  justify-around md:justify-center pt-8 pb-4 gap-3">
        <Logo />
        <div className="flex align-center justify-center">
          <div className="flex items-center md:hidden">
            {!isOpen && (
              <FaBars width={80} height={80} onClick={toggleIsOpen} />
            )}
            {isOpen && (
              <FaTimes width={80} height={80} onClick={toggleIsOpen} />
            )}
          </div>
          <NavItems />
        </div>
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <NavItems className="flex  md:hidden flex-col py-4 h-[100vh]" />
        </div>
      )}
    </div>
  )
}
