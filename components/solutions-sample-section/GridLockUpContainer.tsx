import { twMerge } from 'tailwind-merge'

interface Overhangs {
  sm: string
  md: string
  lg: string
}

const overhangs: Overhangs = {
  sm: 'top-0 xl:top-8',
  md: 'top-0 xl:top-14',
  lg: 'top-0 xl:top-18',
}

interface GridLockupProps {
  element: React.ReactNode
  className?: string
  overhang?: keyof Overhangs
}

export function GridLockup({
  element,
  className,
  overhang = 'sm',
}: GridLockupProps) {
  return (
    <div
      className={twMerge(
        'max-w-[1100px] m-auto', // Align content to the right
        'top-0 inset-x-0 bg-gradient-to-b from-[#0c1120] border-2',
        overhangs['md'],
        className
      )}
    >
      <div className="mr-10 w-[30.5rem] h-[30.5rem] border-2 max-w-[1300px] m-auto">
        {element}
      </div>
    </div>
  )
}
