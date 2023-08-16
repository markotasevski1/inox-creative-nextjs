import CtaSection from '@/components/cta-section/CtaSection'
import DemoCtaSection from '@/components/cta-section/DemoCtaSection'
import FeaturedSection from '@/components/featured-section/FeaturedSection'
import { MainHeroSection } from '@/components/hero-sections/MainHeroSection'
import SolutionsShowcase from '@/components/solutions-showcase/SolutionsShowcase'

export default function Home() {
  return (
    <>
      <MainHeroSection />
      <FeaturedSection />
      <CtaSection />
      <SolutionsShowcase />
      <FeaturedSection />
      <DemoCtaSection />
    </>
  )
}
