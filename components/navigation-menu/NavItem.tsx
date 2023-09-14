import Link from 'next/link'

type NavItemProps = {
  name: string
  href: string
}
export default function NavItem({ name, href }: NavItemProps) {
  return (
    <Link href={href}>
      <ul className="flex flex-col items-center justify-center w-full h-fit text-2xl font-semibold">
        <li>{name}</li>
      </ul>
    </Link>
  )
}
