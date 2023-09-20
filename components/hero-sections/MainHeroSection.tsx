import { Button } from '../buttons/Button'
import HeroSectionHeader from './HeroSectionHeader'
import HeroSectionContentBlock from './HeroSectionContentBlock'
type MainHeroSectionProps = {
  hasContentBlock: boolean
}
export function MainHeroSection({
  hasContentBlock = false,
}: MainHeroSectionProps) {
  const marginBottomClass = hasContentBlock ? 'mb-60' : 'pb-40'
  return (
    <div className={` border-2 ${marginBottomClass}`}>
      <div className=" relative max-w-6xl   mx-auto mt-12   lg:pt-10 min-h-[610px]">
        <HeroSectionHeader />
        {hasContentBlock && <HeroSectionContentBlock />}
      </div>
    </div>
  )
}
