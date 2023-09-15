import NextImage from '../miscellaneous/NextImage'
import InoxLogoImage from '../../assets/LogoWhite.png'
interface LogoProps {
  className?: string
}
export default function Logo({ className }: LogoProps) {
  return (
    <NextImage
      src={InoxLogoImage}
      alt={'inox creative logo'}
      className={className}
      width={180}
      height={180}
    />
  )
}
