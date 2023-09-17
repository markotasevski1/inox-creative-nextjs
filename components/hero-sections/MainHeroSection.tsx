import { Button } from '../buttons/Button'
import HeroSectionHeader from './HeroSectionHeader'
import HeroSectionContentBlock from './HeroSectionContentBlock'
type MainHeroSectionProps = {
  hasContentBlock: boolean
}
export function MainHeroSection({
  hasContentBlock = false,
}: MainHeroSectionProps) {
  const marginBottomClass = hasContentBlock ? 'mb-40' : 'pb-40'
  return (
    <div className={` border-2 ${marginBottomClass}`}>
      <div className="relative max-w-4xl   mx-auto pt-20 sm:pt-24 lg:pt-32 max-h-[610px] ">
        <HeroSectionHeader />
        {hasContentBlock && <HeroSectionContentBlock />}
      </div>
    </div>
  )
}
