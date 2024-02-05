'use client'
import React from 'react'
import { Accordion } from 'flowbite-react';

import { MdDinnerDining } from 'react-icons/md'
import { HiArrowRight } from 'react-icons/hi';
import Image from 'next/image';
import { BsMoonStars } from 'react-icons/bs';

const Schedule = ({ schedule }: any) => {
        return (
                <Accordion className="rounded border-none border-y p-0">
                        <Accordion.Panel className='m-0'>
                                <Accordion.Title className='hover:bg-transparent space-y-2 focus:ring-0 py-2 bg-transparent'>
                                        <p className='text-xs text-gray-400'>Ngày {schedule.day}</p>
                                        <p className='flex md:flex-row flex-col gap-2'>
                                                <span className='text-black line-clamp-2'>Khám phá Stonehenge, Exeter and Plymouth</span>
                                                <span className='flex items-center gap-1 text-xs line-clamp-1'>London<HiArrowRight />Stonehenge<HiArrowRight />Exeter<HiArrowRight />Plymouth</span>
                                        </p>
                                </Accordion.Title>
                                <Accordion.Content className='px-2'>
                                        <div className='space-y-3'>
                                                <Image src="/images/visit-historic-stonehenge-england-1.webp" alt="" width={1000} height={250} />
                                                <p className="text-xl font-medium">
                                                        Khám phá Stonehenge, Exeter and Plymouth
                                                </p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        {schedule.description}
                                                </p>
                                        </div>

                                        <div className='mt-8 space-y-3'>
                                                <div className='flex gap-2 items-center text-sm'>
                                                        <BsMoonStars size="20" />
                                                        <span className="font-medium">Accommodation</span>
                                                        <span>Crowne Plaza Plymouth</span>
                                                </div>
                                                <div className='flex gap-2 items-center text-sm'>
                                                        <MdDinnerDining size="20" />
                                                        <span className="font-medium">Included Meals</span>
                                                        <span>Dinner</span>
                                                </div>
                                        </div>
                                </Accordion.Content>
                        </Accordion.Panel>
                </Accordion>
        )
}

export default Schedule
