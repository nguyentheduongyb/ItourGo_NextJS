'use client'
import React from 'react'
import Link from 'next/link'
import { Breadcrumb } from 'flowbite-react';

import SearchResult from '~/components/Search/searchResults/SearchList'
import NavSearch from '../NavSearch'
import { MdKeyboardArrowRight } from 'react-icons/md';
const SearchPage = () => {
        return (
                <div className="container mt-2">
                        <Breadcrumb aria-label="Solid background breadcrumb example" className="my-3 px-1 py-3 dark:bg-gray-800 line-clamp-1">
                                <Breadcrumb.Item href="#">
                                        Trang chủ
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>Tour Hà Nội Số 1</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="mt-4 pb-4 border-b">
                                <h1 className='text-2xl font-bold'>Asia Tours & Trips 2024</h1>
                                <p className='text-sm mt-3 line-clamp-4'>Whether you have your heart set on gazing at Indias Golden Triangle, eating the best Pad Thai youve ever tasted or ticking off your bucket list at the Great Wall, an Asian vacation offers a multitude of experiences hard to find anywhere else in the world. Ride a camel in the Gobi Desert, climb the mighty Mount Everest, relax on the golden beaches of Bali and explore the incredible Korean capital, Seoul. From cultural immersions to unbeatable hiking adventure opportunities, a tour throughout Asia will not fail to delight even the toughest of critics.</p>
                        </div>
                        <div className="w-full flex  flex-col md:flex-row md:gap-10 mt-4">
                                {/* Content left*/}

                                <div className="md:w-1/4 flex flex-col gap-4">
                                        <NavSearch />
                                </div>
                                {/* Content right */}
                                <div className="flex-1">
                                        <p className='my-4'>Best 250+ Golden Triangle tours in India with 3,746 reviews</p>
                                        <SearchResult />
                                        <div className="flex justify-center mt-6">
                                                <button className="font-bold text-[color:var(--primary-color)] px-5 py-3 rounded-lg border border-[color:var(--primary-color)]">Xem thêm 500 khách sạn</button>
                                        </div>
                                </div>
                        </div>
                        <div className='rounded border mt-4'>
                                <h6 className='flex gap-3 px-4 py-1 bg-[#F9F9F9] items-center font-bold'><MdKeyboardArrowRight /> Khách sạn Đà Lạt theo hạng sao</h6>
                                <div className="bg-white flex gap-3 grid grid-cols-3 p-4">
                                        <Link href="" className='text-blue-500'>Khách sạn 1 tại Đà Lạt</Link>
                                        <Link href="" className='text-blue-500'>Khách sạn 1 tại Đà Lạt</Link>
                                        <Link href="" className='text-blue-500'>Khách sạn 1 tại Đà Lạt</Link>
                                        <Link href="" className='text-blue-500'>Khách sạn 1 tại Đà Lạt</Link>
                                        <Link href="" className='text-blue-500'>Khách sạn 1 tại Đà Lạt</Link>
                                </div>
                        </div>
                        <div className='rounded border mt-4'>
                                <h6 className='flex gap-3 px-4 py-1 bg-[#F9F9F9] items-center font-bold'><MdKeyboardArrowRight /> Khách sạn Đà Lạt theo hạng sao</h6>
                                <div className="bg-white gap-3 grid grid-cols-3 p-4">
                                        <Link href="" className='text-blue-500'>Bảo Lộc</Link>
                                        <Link href="" className='text-blue-500'>Khu du lịch Hồ Tuyết Lâm</Link>
                                        <Link href="" className='text-blue-500'>Khu du lịch Hồ Tuyết Lâm</Link>
                                        <Link href="" className='text-blue-500'>Khu du lịch Hồ Tuyết Lâm</Link>
                                        <Link href="" className='text-blue-500'>Khu du lịch Hồ Tuyết Lâm</Link>
                                </div>
                        </div>
                        <div className='rounded border mt-4'>
                                <h6 className='flex gap-3 px-4 py-1 bg-[#F9F9F9] items-center font-bold'><MdKeyboardArrowRight /> Khách sạn Đà Lạt theo hạng sao</h6>
                                <div className="bg-white gap-3 grid grid-cols-3 p-4">
                                        <Link href="" className='text-blue-500'>Khách sạn Hà Nội</Link>
                                        <Link href="" className='text-blue-500'>Khách sạn Hà Nội</Link>
                                        <Link href="" className='text-blue-500'>Khách sạn Hà Nội</Link>
                                        <Link href="" className='text-blue-500'>Khách sạn Hà Nội</Link>
                                        <Link href="" className='text-blue-500'>Khách sạn Hà Nội</Link>
                                </div>
                        </div>
                </div>
        )
}

export default SearchPage 
