import { twMerge } from 'tailwind-merge'
import NavItem from './NavItem'
type NavItemProps = {
  className?: string
}
export default function NavItems({ className }: NavItemProps) {
  const navigationItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about-us',
    },
    {
      name: 'Solutions',
      href: '/solutions',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
    {
      name: 'Company',
      href: '/company',
    },
  ]
  return (
    <nav
      className={twMerge('hidden md:flex gap-4 mt-0.5 items-center', className)}
    >
      {navigationItems.map((item, index) => (
        <NavItem key={index} name={item.name} href={item.href} />
      ))}
    </nav>
  )
}
