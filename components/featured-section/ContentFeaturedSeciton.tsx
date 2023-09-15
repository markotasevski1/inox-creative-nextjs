import { Button } from '../buttons/Button'

export default function ContentFeaturedSeciton() {
  return (
    <div className="w-5/12 md:w-5/12 m-auto flex items-left flex-col gap-4">
      <h5 className="text-xs">Ready to see the results?</h5>

      <h2 className="text-4xl font-semibold"> Start your revolution</h2>
      <p className="text-2xl tracking-tighter leading-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat unde
        ex minima veniam iste commodi molestias exercitationem quaerat dolorem
        reiciendis.
      </p>
      <div className="pt-2">
        <Button href="/about-us">Get Started</Button>
      </div>
    </div>
  )
}
