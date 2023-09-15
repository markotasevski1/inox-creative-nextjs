import HeroSection from '@/components/second-hero-section/HeroSection'
import CtaSection from '../../components/cta-section/CtaSection'
export default function AboutUs() {
  return (
    <div>
      <HeroSection />
      <CtaSection ctaButtonHref={'/test'} />
    </div>
  )
}
