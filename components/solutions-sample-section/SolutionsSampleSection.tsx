'use client'

/* eslint-disable react/no-unescaped-entities */
import {
  IconContainer,
  Caption,
  BigText,
  Paragraph,
  Link,
  InlineCode,
} from '../common/common'
import { Widont } from '../common/Widnot'
import { GridLockup } from './GridLockUpContainer'
import { Tabs } from './Tabs'
import { Fragment, useState } from 'react'

const tabs = {
  'CSS Grid': (selected: any) => (
    <>
      <path
        d="M5 13a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6ZM5 29a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6ZM19 29a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-6ZM33 29a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-6ZM19 13a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H22a3 3 0 0 1-3-3v-6Z"
        fill="currentColor"
        fillOpacity={selected ? '.1' : '0'}
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  ),
  Transforms: (selected: any) => (
    <>
      <path
        d="M5.632 11.725a3 3 0 0 1 2.554-3.388l3.96-.557a3 3 0 0 1 3.389 2.554l.835 5.941a3 3 0 0 1-2.553 3.388l-3.961.557a3 3 0 0 1-3.389-2.553l-.835-5.942ZM1 29a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-6ZM20 34a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-6ZM36.728 27.026a3 3 0 0 1 3.558-2.31l3.913.831a3 3 0 0 1 2.31 3.558l-1.247 5.87a3 3 0 0 1-3.558 2.31l-3.913-.832a3 3 0 0 1-2.31-3.558l1.247-5.869ZM22.236 9.17a3 3 0 0 1 3.202-2.783l17.956 1.255a3 3 0 0 1 2.784 3.202l-.419 5.986a3 3 0 0 1-3.202 2.783l-17.956-1.255a3 3 0 0 1-2.784-3.202l.419-5.986Z"
        fill="currentColor"
        fillOpacity={selected ? '.1' : '0'}
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  ),
  Filters: (selected: any) => (
    <>
      <path
        d="M31 30c0-7.18-5.82-13-13-13m-5.009 1C8.298 19.961 5 24.596 5 30c0 7.18 5.82 13 13 13 5.404 0 10.039-3.298 12-7.991"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="30"
        cy="18"
        r="13"
        fill="currentColor"
        fillOpacity={selected ? '.1' : '0'}
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m26 30 4-4M21 27l6-6M18 22l4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
}

export function SolutionsSampleSection() {
  const [feature, setFeature] = useState('CSS Grid')

  return (
    <section id="modern-features border-2 relative">
      <div className="mx-auto px-4 sm:px-6 md:px-8 max-w-[1025px] ">
        <Caption className="text-indigo-500 dark:text-indigo-400">
          Modern features
        </Caption>
        <BigText>
          <Widont>Cutting-edge is our comfort zone.</Widont>
        </BigText>
        <Paragraph as="div">
          <p>
            Tailwind is unapologetically modern, and takes advantage of all the
            latest and greatest CSS features to make the developer experience as
            enjoyable as possible.
          </p>
          <p>
            We've got first-class CSS grid support, composable transforms and
            gradients powered by CSS variables, support for modern state
            selectors like <InlineCode>:focus-visible</InlineCode>, and tons
            more.
          </p>
        </Paragraph>
        <Link
          href="/solutions"
          color="indigo"
          darkColor="gray"
          className={undefined}
        >
          Learn more<span className="sr-only">, grid template columns</span>
        </Link>
        <div className="mt-10">
          <Tabs
            tabs={tabs}
            selected={feature}
            onChange={setFeature}
            className="text-indigo-600 dark:text-indigo-400"
            iconClassName="text-indigo-500 dark:text-indigo-400"
          />
        </div>
      </div>
      <GridLockup overhang={'sm'} element={<h1>t1</h1>}></GridLockup>
    </section>
  )
}
//TODO: Inside element render scene with 3d element inside it
