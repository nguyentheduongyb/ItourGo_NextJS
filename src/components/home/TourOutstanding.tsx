'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { urlAPI } from '~/utils/API'

const TourOutstanding = () => {
        const [tour, setDeal] = useState([])
        useEffect(() => {
                fetch(`${urlAPI}/api/tour`)
                        .then(response => response.json())
                        .then(data => setDeal(data))
        }, [])
        return (
                <section className='my-8'>
                        <p className="text-2xl font-medium uppercase mb-6 text-center">Các tour nổi bật trong tháng</p>
                        <div className='px-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
                                {tour.slice(0, 3).map((item: any, index: number) => (
                                        <Link key={index} className='relative w-full rounded overflow-hidden' href={`/tour/${item.slug}`}>
                                                <img src={item.image} className='w-full' alt="" />
                                                <div className='absolute w-full h-full left-0 top-0 flex items-center justify-center text-center'>
                                                        <div className='absolute w-full h-full bg-[rgba(0,0,0,0.15)]'></div>
                                                        <div className='z-10 space-y-3'>
                                                                <h6 className='uppercase text-white font-medium text-xl line-clamp-2'>{item.name}</h6>
                                                                <p className='text-white'>Giá: {item.expectedCost} VNĐ</p>
                                                                <button className='py-1 px-3 rounded-full border bg-transparent hover:bg-[var(--primary-color)] hover:text-white font-medium text-[#ccc]'>Đặt ngay</button>
                                                        </div>
                                                </div>
                                        </Link>
                                ))}
                        </div>
                </section>
        )
}

export default TourOutstanding
