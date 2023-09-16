import gsap from 'gsap' // Make sure GSAP is installed and properly configured in your project
//TODO finish the animation correct way
const animateCtaTitle = () => {
  gsap.from('.cta-title-todo', { duration: 2, x: -300 })
}

export default animateCtaTitle
