import React from 'react'
import Card from './Card'
import SolutionImage from '../../assets/slika3.jpg'
import { GetFirstNElements } from '../../utils/utilFunctions'

export default function SolutionsShowcase() {
  const solutionsTest = [
    {
      title: 'Product 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: SolutionImage,
      href: '/',
    },
    {
      title: 'Product 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: SolutionImage,
      href: '/',
    },
    {
      title: 'Product 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: SolutionImage,
      href: '/',
    },
    {
      title: 'Product 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: SolutionImage,
      href: '/',
    },
  ]
  const arrayToRender = GetFirstNElements(3, solutionsTest)
  return (
    <div className=" max-w-[1025px] m-auto mt-5 mb-20">
      <h2 className=" mb-[63px] text-5xl text-center font-bold">
        Latest Products
      </h2>
      <div className="flex align-middle justify-between ">
        {arrayToRender.map((solutions: any, index: any) => (
          <Card
            key={index + 'afsdf'}
            solutionImage={solutions.image}
            solutionDescription={solutions.description}
            solutionTitle={solutions.title}
            solutionHref={solutions.href}
          />
        ))}
      </div>
    </div>
  )
}
