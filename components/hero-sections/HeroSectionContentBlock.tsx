import React from 'react'
import { Button } from '../buttons/Button'

export default function HeroSectionContentBlock() {
  return (
    <div className="relative h-80 box-styling-hero-section  top-24 bg-slate-950 text-slate-900 rounded-md">
      <div className=" bg-slate-100 h-full  rounded-md flex flex-col items-center text-center gap-2">
        <h3 className="text-cyan-700 mt-8 text-lg">What It Is</h3>
        <h1 className="text-gray-800  leading-none text-4xl font-semibold max-w-[700px]">
          Access and Integrate Satellite Imagery and Data Using Planet Platform
        </h1>
        <h2 className="text-gray-700 mt-4 max-w-[700px] ">
          Planet Platform is an entirely automated, cloud-based imagery and
          analytics platform that provides access to the comprehensive, daily
          dataset captured by the PlanetScope and SkySat constellations.
        </h2>
        <div className="flex gap-4 mt-4">
          <Button href="/">Find out</Button>
          <Button href="/">Hellow</Button>
        </div>
      </div>
    </div>
  )
}
