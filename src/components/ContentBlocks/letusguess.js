/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import './letusguess.scss'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import features from './data.js'
import MeditatingMan from '../Illustrations/Meditating'


export default function LetUsGuess() {
  return (
    <div className="relative bg-black">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-y-0 right-0 w-1/2" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:px-8 lg:grid lg:grid-cols-2">
        <div className=" py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
          <div className="max-w-lg mx-auto lg:mx-0">
             <h2 className="dincondensed underline tracking-wide 2xl:text-8xl xl:text-7xl text-4xl font-bold">Let Us Guess</h2>
          <MeditatingMan />
            <dl className="mt-12 space-y-10">
            
            </dl>
          </div>
        </div>
        <div className="py-16 px-4 sm:py-24 sm:px-6  lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end">
          <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
            {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute h-12 w-12 flex items-center justify-center  rounded-md">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                  </dt>
                  <dd><span className="ml-16 text-lg leading-6 font-medium text-white roboto">{feature.name}</span><br /><span className="mt-2 ml-16 text-white font-light grotesk">{feature.description}</span></dd>
                </div>
              ))}
       
            
          </div>
        </div>
      </div>
    </div>
  )
}

