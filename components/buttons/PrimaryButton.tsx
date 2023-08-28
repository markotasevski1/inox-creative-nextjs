import NextLink from 'next/link'
import { twMerge } from 'tailwind-merge'
type ButtonProps = {
  onClick?: () => void
  children?: React.ReactNode
  href?: string
  className?: string
}
export default function PrimaryButton({
  onClick,
  children,
  href,
  className,
}: ButtonProps) {
  return (
    <>
      {href ? (
        <NextLink href={href || '/'}>
          <button
            onClick={onClick}
            className={twMerge(
              'bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-3/5 flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400',
              className
            )}
          >
            {children}
          </button>
        </NextLink>
      ) : (
        <button
          onClick={onClick}
          className={twMerge(
            'bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-3/5 flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400',
            className
          )}
        >
          {children}
        </button>
      )}
    </>
  )
}
