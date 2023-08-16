import Link from 'next/link'

type NavItemProps = {
  name: string
  href: string
}
export default function NavItem({ name, href }: NavItemProps) {
  return (
    <Link href={href}>
      <ul className="flex flex-col items-center justify-center w-full h-full">
        <li>{name}</li>
      </ul>
    </Link>
  )
}
