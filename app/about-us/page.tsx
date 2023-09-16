import HeroSection from '@/components/second-hero-section/HeroSection'
import CtaSection from '../../components/cta-section/CtaSection'
import RoundedObject from '@/components/three-js-section/RoundedObject'
export default function AboutUs() {
  return (
    <div>
      <HeroSection />
      <CtaSection ctaButtonHref={'/test'} />
      <RoundedObject />
    </div>
  )
}
