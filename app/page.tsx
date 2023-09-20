import CtaSection from '@/components/cta-section/CtaSection'
import { SolutionsSampleSection } from '@/components/solutions-sample-section/SolutionsSampleSection'
import FeaturedSection from '@/components/featured-section/FeaturedSection'
import Footer from '@/components/footer/Footer'
import { MainHeroSection } from '@/components/hero-sections/MainHeroSection'
import SolutionsShowcase from '@/components/solutions-showcase/SolutionsShowcase'
import PartnersSection from '../components/partners-section/PartnersSection'
export default function Home() {
  return (
    <>
      <MainHeroSection hasContentBlock={true} />
      <FeaturedSection flexDirection="row-reverse" />
      <CtaSection ctaButtonHref="/contact" />
      <SolutionsShowcase />
      <FeaturedSection flexDirection="row" />
      <SolutionsSampleSection />
      <PartnersSection />
    </>
  )
}
