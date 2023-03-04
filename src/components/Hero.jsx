import React from 'react'
import {
    ChatBubbleLeftIcon,
    BookOpenIcon,
    PaperAirplaneIcon,
    ShieldCheckIcon,
} from '@heroicons/react/24/solid'

import bgImg from '../assets/teach_hero.png'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Great Tutoring for Kids</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Mango Tutoring</h1>
                <p className='text-2xl'>Welcome.</p>
            </div>
            <div>
                <img className='w-full' src={bgImg} alt="/"></img>
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-w[760px] bottom-[-5%] mx-1 md:left-1/2
            transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl '>
                <p>Section 1</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><ChatBubbleLeftIcon className='h-6 text-orange-600'/> Icon.</p>
                    <p className='flex px-4 py-2 text-slate-500'><BookOpenIcon className='h-6 text-orange-600'/> Icon.</p>
                    <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-orange-600'/>Icon.</p>
                    <p className='flex px-4 py-2 text-slate-500'><ShieldCheckIcon className='h-6 text-orange-600'/>Icon.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero