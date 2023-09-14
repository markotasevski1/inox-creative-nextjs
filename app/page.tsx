import CtaSection from '@/components/cta-section/CtaSection'
import { DemoCtaSection } from '@/components/cta-section/DemoCtaSection'
import FeaturedSection from '@/components/featured-section/FeaturedSection'
import Footer from '@/components/footer/Footer'
import { MainHeroSection } from '@/components/hero-sections/MainHeroSection'
import SolutionsShowcase from '@/components/solutions-showcase/SolutionsShowcase'
import PartnersSection from '../components/partners-section/PartnersSection'
export default function Home() {
  return (
    <>
      <MainHeroSection />
      <FeaturedSection />
      <CtaSection ctaButtonHref="/contact" />
      <SolutionsShowcase />
      <FeaturedSection />
      <DemoCtaSection />
      <PartnersSection />
      <Footer />
    </>
  )
}
