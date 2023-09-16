import ThreeImages from './ThreeImages'
import HeroSectionHeader from './HeroSectionHeader'
export default function HeroSection() {
  return (
    <div className="flex m-auto background-linear-blue">
      <div className="max-w-[1500px] border-2 m-auto  h-min-[349px]  relative">
        <HeroSectionHeader />
        <ThreeImages />
      </div>
    </div>
  )
}
