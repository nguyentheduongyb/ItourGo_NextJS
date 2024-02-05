'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { urlAPI } from '~/utils/API'

const Deal = () => {
        const [deal, setDeal] = useState([])
        useEffect(() => {
                fetch(`${urlAPI}/api/deal`)
                        .then(response => response.json())
                        .then(data => setDeal(data))
        }, [])
        return (
                <section className='my-8'>
                        <div className='container'>
                                <div className='relative w-full pt-[80%] md:pt-[26.5%] rounded-2xl bg-center bg-no-repeat bg-cover flex justify-center' style={{ backgroundImage: 'url("https://preview.colorlib.com/theme/direngine/images/bg_1.jpg.webp")' }}>
                                        <div className='absolute w-full h-full left-0 top-0 p-12 md:p-20 space-y-6 text-white'>
                                                <h5 className='text-3xl font-bold capitalize line-clamp-1'>Ưu đãi kì du lịch của bạn ở đây</h5>
                                                <p className='line-clamp-2'>Mùa ưu đãi vẫn chưa kết thúc. Nhận ngay ưu đãi đến 50%</p>
                                                <button className='text-black font-medium rounded-full px-6 py-2 bg-white'>Tìm hiểu ngay</button>
                                        </div>
                                </div>
                                <div className='mt-[-80px] relative w-full'>
                                        <div className='w-full bottom-[-40%]'>
                                                <div className='mx-auto rounded-2xl w-[94%]'>
                                                        <div className='flex gap-4 w-full overflow-auto scrollbar-hide pb-4 md:px-8'>
                                                                {deal.slice(0, 5).map((item: any, index: number) =>
                                                                        <Link key={index} href={`/search/${item.slug}`} className="min-w-[150px] md:min-w-[200px] hover:text-[color:var(--primary-color)]">
                                                                                <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                                                        <div className="relative rounded-2xl overflow-hidden">
                                                                                                <img className="w-full" src={item.image} alt="" />
                                                                                                <button className='absolute top-2 left-2 font-medium uppercase text-xs py-1 px-3 rounded-full bg-[#EF5131] text-white'>up to {item.discount} off</button>
                                                                                        </div>
                                                                                        <h5 className="px-4 pb-2 pt-3 font-semibold">{item.country} Deals</h5>
                                                                                </div>
                                                                        </Link>
                                                                )}
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        )
}

export default Deal
