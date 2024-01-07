import { Progress } from 'flowbite-react'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const TourRating = () => {
        return (
                <div className="w-full my-8 bg-[#A7282E]">
                        <div className='py-16'>
                                <div className='text-center space-y-4 text-white'>
                                        <p className='uppercase text-xl font-medium'>LIVE, UNEDITED & INDEPENDENT TRAVELLER REVIEWS</p>
                                        <p className='text-3xl font-bold'>Georgia and Armenia Uncovered trip reviews</p>
                                </div>
                                <div className='mt-6 md:mx-24 bg-white rounded py-8'>
                                        <div className='grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-3'>
                                                <div className='px-8'>
                                                        <p className='capitalize text-2xl font-medium'>Over Trip Rating</p>
                                                        <div className="mt-4 flex flex-col justify-between">
                                                                <div className='space-y-4'>
                                                                        <p className='text-6xl font-bold'>4.0</p>
                                                                        <p className='font-bold uppercase'>out of 5</p>
                                                                        <i className='flex gap-2'>
                                                                                <FaStar color="#FFCD05" size="32" />
                                                                                <FaStar color="#FFCD05" size="32" />
                                                                                <FaStar color="#FFCD05" size="32" />
                                                                                <FaStar color="#FFCD05" size="32" />
                                                                                <FaStar color="#DDDD" size="32" />
                                                                        </i>
                                                                </div>
                                                                <div className='flex gap-4'>
                                                                        <p className='flex-1 font-bold text-lg'>Based on 2 independently verified reviews</p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className='px-8 border-x'>
                                                        <p className='capitalize text-2xl font-medium'>Itinerary Rating</p>
                                                        <div className='mt-4 space-y-4'>
                                                                <p className='text-xl font-medium'>Independent scores on the quality of the itinerary and trip</p>
                                                                <div className='grid grid-cols-2 gap-4'>
                                                                        <div className='bg-[#F5F5F5] flex flex-col items-center justify-center'>
                                                                                <span className='text-xl'>4</span>
                                                                                <span className='uppercase'>out of 5</span>
                                                                                <i className='flex gap-2'>
                                                                                        <FaStar color="#FFCD05" size="22" />
                                                                                        <FaStar color="#FFCD05" size="22" />
                                                                                        <FaStar color="#FFCD05" size="22" />
                                                                                        <FaStar color="#FFCD05" size="22" />
                                                                                        <FaStar color="#DDDDD" size="22" />
                                                                                </i>
                                                                        </div>
                                                                        <div className="space-y-3">
                                                                                <div className='flex text-sm gap-3'>
                                                                                        <p className='flex items-center justify-between w-6'><span>5</span><FaStar /></p>
                                                                                        <div className='flex-1 rounded-full overflow-hidden border relative'>
                                                                                                <div className='absolute left-0 top-0 h-full w-[42%] bg-[#FFCD05]'></div>
                                                                                        </div>
                                                                                        <span>3</span>
                                                                                </div>
                                                                                <div className='flex text-sm gap-3'>
                                                                                        <p className='flex items-center justify-between w-6'><span>4</span><FaStar /></p>
                                                                                        <div className='flex-1 rounded-full overflow-hidden border relative'>
                                                                                                <div className='absolute left-0 top-0 h-full w-[82%] bg-[#FFCD05]'></div>
                                                                                        </div>
                                                                                        <span>5</span>
                                                                                </div>
                                                                                <div className='flex text-sm gap-3'>
                                                                                        <p className='flex items-center justify-between w-6'><span>3</span><FaStar /></p>
                                                                                        <div className='flex-1 rounded-full overflow-hidden border relative'>
                                                                                                <div className='absolute left-0 top-0 h-full w-[0%] bg-[#FFCD05]'></div>
                                                                                        </div>
                                                                                        <span>0</span>
                                                                                </div>
                                                                                <div className='flex text-sm gap-3'>
                                                                                        <p className='flex items-center justify-between w-6'><span>2</span><FaStar /></p>
                                                                                        <div className='flex-1 rounded-full overflow-hidden border relative'>
                                                                                                <div className='absolute left-0 top-0 h-full w-[0%] bg-[#FFCD05]'></div>
                                                                                        </div>
                                                                                        <span>3</span>
                                                                                </div>
                                                                                <div className='flex text-sm gap-3'>
                                                                                        <p className='flex items-center justify-between w-6'><span>1</span><FaStar /></p>
                                                                                        <div className='flex-1 rounded-full overflow-hidden border relative'>
                                                                                                <div className='absolute left-0 top-0 h-full w-[0%] bg-[#FFCD05]'></div>
                                                                                        </div>
                                                                                        <span>0</span>
                                                                                </div>
                                                                        </div>

                                                                </div>
                                                        </div>
                                                </div>
                                                <div className='px-8'>
                                                        <p className='capitalize text-2xl font-medium'>Trafalgar Customer Experience</p>
                                                        <div className='mt-4 space-y-4'>
                                                                <p className='text-xl font-medium'>How our customers rate the standard of service delivered across all of tours</p>
                                                                <div className='grid grid-cols-2 gap-4'>
                                                                        <div className='bg-[#F5F5F5] flex flex-col items-center justify-center'>
                                                                                <span className='text-xl'>4</span>
                                                                                <span className='uppercase'>out of 5</span>
                                                                                <i className='flex gap-2'>
                                                                                        <FaStar color="#FFCD05" size="22" />
                                                                                        <FaStar color="#FFCD05" size="22" />
                                                                                        <FaStar color="#FFCD05" size="22" />
                                                                                        <FaStar color="#FFCD05" size="22" />
                                                                                        <FaStar color="#DDDDD" size="22" />
                                                                                </i>
                                                                        </div>
                                                                        <div className="space-y-3">
                                                                                <div className='flex text-sm gap-3'>
                                                                                        <p className='flex items-center justify-between w-6'><span>5</span><FaStar /></p>
                                                                                        <div className='flex-1 rounded-full overflow-hidden border relative'>
                                                                                                <div className='absolute left-0 top-0 h-full w-[42%] bg-[#FFCD05]'></div>
                                                                                        </div>
                                                                                        <span>3</span>
                                                                                </div>
                                                                                <div className='flex text-sm gap-3'>
                                                                                        <p className='flex items-center justify-between w-6'><span>4</span><FaStar /></p>
                                                                                        <div className='flex-1 rounded-full overflow-hidden border relative'>
                                                                                                <div className='absolute left-0 top-0 h-full w-[82%] bg-[#FFCD05]'></div>
                                                                                        </div>
                                                                                        <span>5</span>
                                                                                </div>
                                                                                <div className='flex text-sm gap-3'>
                                                                                        <p className='flex items-center justify-between w-6'><span>3</span><FaStar /></p>
                                                                                        <div className='flex-1 rounded-full overflow-hidden border relative'>
                                                                                                <div className='absolute left-0 top-0 h-full w-[0%] bg-[#FFCD05]'></div>
                                                                                        </div>
                                                                                        <span>0</span>
                                                                                </div>
                                                                                <div className='flex text-sm gap-3'>
                                                                                        <p className='flex items-center justify-between w-6'><span>2</span><FaStar /></p>
                                                                                        <div className='flex-1 rounded-full overflow-hidden border relative'>
                                                                                                <div className='absolute left-0 top-0 h-full w-[0%] bg-[#FFCD05]'></div>
                                                                                        </div>
                                                                                        <span>3</span>
                                                                                </div>
                                                                                <div className='flex text-sm gap-3'>
                                                                                        <p className='flex items-center justify-between w-6'><span>1</span><FaStar /></p>
                                                                                        <div className='flex-1 rounded-full overflow-hidden border relative'>
                                                                                                <div className='absolute left-0 top-0 h-full w-[0%] bg-[#FFCD05]'></div>
                                                                                        </div>
                                                                                        <span>0</span>
                                                                                </div>
                                                                        </div>

                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="flex justify-center mt-6">
                                        <button className='capitalize px-6 py-3 font-bold bg-white text-red-500'>Read more reviews</button>
                                </div>
                        </div>

                </div>
        )
}

export default TourRating
