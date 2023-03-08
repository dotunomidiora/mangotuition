import { CheckIcon } from '@heroicons/react/24/solid'
import React from 'react'

const WhatWeOffer = () => {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto px-2'>
            <h2 className='text-5xl font-bold text-center'>What We Offer</h2>
            <p className='text-2xl py-8 text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id ipsam, harum labore quis ab molestiae molestias reprehenderit corporis deleniti dolorum, itaque temporibus soluta nesciunt velit. Laborum magni repudiandae ullam.</p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
              <div className='flex'>
                <div>
                  <CheckIcon className='w-7 mr-4 text-green-700' />
                  </div>
                  <div>
                    <h3 className='font-bold text-lg'>Should Have Tried</h3>
                    <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nisi harum commodi pariatur quam deleniti accusamus veniam eaque aliquid vero, rerum aliquam? Eos, dignissimos sunt voluptatum qui suscipit nulla tempora?</p>
                  </div>
                </div>
                <div className='flex'>
                <div>
                  <CheckIcon className='w-7 mr-4 text-green-700' />
                  </div>
                  <div>
                    <h3 className='font-bold text-lg'>Should Have Tried</h3>
                    <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nisi harum commodi pariatur quam deleniti accusamus veniam eaque aliquid vero, rerum aliquam? Eos, dignissimos sunt voluptatum qui suscipit nulla tempora?</p>
                  </div>
                </div>
                <div className='flex'>
                <div>
                  <CheckIcon className='w-7 mr-4 text-green-700' />
                  </div>
                  <div>
                    <h3 className='font-bold text-lg'>Should Have Tried</h3>
                    <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nisi harum commodi pariatur quam deleniti accusamus veniam eaque aliquid vero, rerum aliquam? Eos, dignissimos sunt voluptatum qui suscipit nulla tempora?</p>
                  </div>
                </div>
                <div className='flex'>
                <div>
                  <CheckIcon className='w-7 mr-4 text-green-700' />
                  </div>
                  <div>
                    <h3 className='font-bold text-lg'>Should Have Tried</h3>
                    <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nisi harum commodi pariatur quam deleniti accusamus veniam eaque aliquid vero, rerum aliquam? Eos, dignissimos sunt voluptatum qui suscipit nulla tempora?</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeOffer