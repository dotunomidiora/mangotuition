import React from 'react';
import { PhoneIcon, PencilSquareIcon, CalendarIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

import supportImg from '../assets/support.jpg';

const Support = () => {
  return (
    <div className='w-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt='' />
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>What we do</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>How does Mango Tuition work?</h3>
                <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus in accusamus ut ipsa deserunt ullam veritatis delectus quisquam asperiores sunt, nihil, dignissimos, neque expedita! Temporibus expedita consequatur nisi ex id.</p>           
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <PhoneIcon className='w-16 p-4 bg-orange-500 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Introductory Call</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque et, optio voluptates quis hic perspiciatis sunt ducimus, totam at debitis quae nesciunt? Molestias temporibus ad nihil modi quae voluptatum accusantium!</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center font-bold text-orange-600'>STEP ONE</p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <PencilSquareIcon className='w-16 p-4 bg-orange-500 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Assessment test with tutor</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque et, optio voluptates quis hic perspiciatis sunt ducimus, totam at debitis quae nesciunt? Molestias temporibus ad nihil modi quae voluptatum accusantium!</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center font-bold text-orange-600'>STEP TWO</p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <CalendarIcon className='w-16 p-4 bg-orange-500 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>Schedule First Lesson</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque et, optio voluptates quis hic perspiciatis sunt ducimus, totam at debitis quae nesciunt? Molestias temporibus ad nihil modi quae voluptatum accusantium!</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center font-bold text-orange-600'>STEP THREE</p>
                    </div>
                </div>
            </div>          
        </div>
    </div>
  )
}

export default Support