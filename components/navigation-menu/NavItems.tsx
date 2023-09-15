import { twMerge } from 'tailwind-merge'
import NavItem from './NavItem'
import { navigationItems } from './navigationItems'
type NavItemProps = {
  className?: string
}

export default function NavItems({ className }: NavItemProps) {
  return (
    <nav
      className={twMerge('hidden md:flex gap-4 mt-1 items-center', className)}
    >
      {navigationItems.map((item, index) => (
        <NavItem key={index} name={item.name} href={item.href} />
      ))}
    </nav>
  )
}
