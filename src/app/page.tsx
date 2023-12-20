'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa"
import API from '~/API';


const Home = () => {
  const [data, setData] = useState<any[]>([])
  useEffect(() => {
    API.get("/api/tour")
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }, [])
  return (
    <div>
      <section className='my-8'>
        <div className='container'>
          <div className='w-full pt-[26.5%] rounded-2xl bg-center bg-no-repeat bg-cover flex justify-center' style={{ backgroundImage: 'url("https://preview.colorlib.com/theme/direngine/images/bg_1.jpg.webp")' }}>
          </div>
          <div className='mt-[-80px] relative w-full'>
            <div className='w-full bottom-[-40%]'>
              <div className='grid grid-cols-5 gap-4 w-full overflow-auto  px-20 pb-4'>
                <Link href="/search/aaaa" className="w-[200px] hover:text-[color:var(--primary-color)]">
                  <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                    <div className="rounded-2xl overflow-hidden">
                      <img className="w-full" src="https://cdn.tourradar.com/s3/content-pages/391/438x292/V2aYSJ.jpg" alt="" />
                    </div>
                    <h5 className="px-4 pb-2 pt-3 font-semibold">Việt Nam</h5>
                  </div>
                </Link>
                <Link href="/search/aaaa" className="w-[200px] hover:text-[color:var(--primary-color)]">
                  <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                    <div className="rounded-2xl overflow-hidden">
                      <img className="w-full" src="https://cdn.tourradar.com/s3/content-pages/391/438x292/V2aYSJ.jpg" alt="" />
                    </div>
                    <h5 className="px-4 pb-2 pt-3 font-semibold">Việt Nam</h5>
                  </div>
                </Link>
                <Link href="/search/aaaa" className="w-[200px] hover:text-[color:var(--primary-color)]">
                  <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                    <div className="rounded-2xl overflow-hidden">
                      <img className="w-full" src="https://cdn.tourradar.com/s3/content-pages/391/438x292/V2aYSJ.jpg" alt="" />
                    </div>
                    <h5 className="px-4 pb-2 pt-3 font-semibold">Việt Nam</h5>
                  </div>
                </Link>
                <Link href="/search/aaaa" className="w-[200px] hover:text-[color:var(--primary-color)]">
                  <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                    <div className="rounded-2xl overflow-hidden">
                      <img className="w-full" src="https://cdn.tourradar.com/s3/content-pages/391/438x292/V2aYSJ.jpg" alt="" />
                    </div>
                    <h5 className="px-4 pb-2 pt-3 font-semibold">Việt Nam</h5>
                  </div>
                </Link>
                <Link href="/search/aaaa" className="w-[200px] hover:text-[color:var(--primary-color)]">
                  <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                    <div className="rounded-2xl overflow-hidden">
                      <img className="w-full" src="https://cdn.tourradar.com/s3/content-pages/391/438x292/V2aYSJ.jpg" alt="" />
                    </div>
                    <h5 className="px-4 pb-2 pt-3 font-semibold">Việt Nam</h5>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='my-8'>
        <div className="container">
          <h1 className="text-2xl font-medium mb-6 capitalize">Tour bạn đã xem gần đây</h1>
          <div className='grid grid-cols-3 gap-6'>
            {data.map((item, index): any => (
              <Link key={index} href={`/tour/${item.slug}`} className='flex bg-white hover:bg-blue-100 rounded overflow-hidden'>
                <div className='h-28 w-28 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://cdn2.ivivu.com/2023/07/14/15/ivivu-cong-vien-naritasan-120x120.jpg")' }}></div>
                <div className='flex-1 flex flex-col justify-between p-2'>
                  <div className='space-y-2'>
                    <h6 className='text-blue-900 line-clamp-1'>{item.name}</h6>
                    <span className='line-clamp-2'>{item.description}</span>
                  </div>
                  <p className='text-right text-[color:var(--primary-color)] font-medium text-lg'>{item.expectedCost}$</p>
                </div>
              </Link>
            )
            )}

          </div>
        </div>
      </section>

      <section className="container rounded-xl p-4 bg-[#E6F4FD] flex gap-4">
        <div className="w-2/5 flex flex-col gap-3">
          <h1 className="font-bold text-xl">Organized Adventures: What are they?</h1>
          <div className='flex flex-col gap-3 text-[15px] pr-6'>
            <p>A multi-day travel experience seamlessly organized by a trusted operator—everything from logistics to meals to experiences to friendly guides. All you have to do is choose your adventure, pack your bags and go.</p>
            <p>Embark on a transformative organized adventure today. Choose from more than 50,000 options via 2,500 trusted operators on our platform.</p>
          </div>
        </div>
        <div className="grid grid-cols-3 flex-1 gap-4">
          <Link href="" className='w-full p-2 rounded-xl bg-white flex flex-col gap-3 hover:drop-shadow'>
            <div className='rounded-xl w-full pt-[45%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/464x208/xoOlJd.jpg")' }}></div>
            <h6 className='font-medium'>Group Adventure</h6>
            <p className='text-sm'>Join a group and forge lifelong friendships.</p>
            <p className="font-medium text-sm text-[color:var(--primary-color)]">Explore</p>
          </Link>
          <Link href="" className='w-full p-2 rounded-xl bg-white flex flex-col gap-3 hover:drop-shadow'>
            <div className='rounded-xl w-full pt-[45%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/464x208/xoOlJd.jpg")' }}></div>
            <h6 className='font-medium'>Group Adventure</h6>
            <p className='text-sm'>Join a group and forge lifelong friendships.</p>
            <p className="font-medium text-sm text-[color:var(--primary-color)]">Explore</p>
          </Link>
          <Link href="" className='w-full p-2 rounded-xl bg-white flex flex-col gap-3 hover:drop-shadow'>
            <div className='rounded-xl w-full pt-[45%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/464x208/xoOlJd.jpg")' }}></div>
            <h6 className='font-medium'>Group Adventure</h6>
            <p className='text-sm'>Join a group and forge lifelong friendships.</p>
            <p className="font-medium text-sm text-[color:var(--primary-color)]">Explore</p>
          </Link>
        </div>
      </section>

      <section className='my-12'>
        <div className="container grid grid-cols-2">
          <div className="flex gap-16 px-8">
            <div className='flex flex-col gap-3 w-2/3'>
              <h4 className='font-bold text-xl'>Sustainable Travel</h4>
              <p className="text-sm">Adventure sustainably with TourRadar. We are committed to conscious travel, from responsible operators to our Climate Action Plan and carbon measurements. <Link href="">View our pledge</Link></p>
            </div>
            <div className="flex-1 bg-center bg-cover bg-no-repeat" style={{
              backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='77' height='87' fill='none'%3E%3Ccircle cx='39.5' cy='31.5' r='31.5' fill='%230A7BBD' opacity='.3'/%3E%3Cg clip-path='url(%23clip0_2205:13708)'%3E%3Cpath fill='%23fff' d='M19.5 26.5h-10c-.17 2.5-.4 8.3 0 11.5.5 4 2.5 7.5 5.5 12.5 2.4 4 10.33 8.67 14 10.5 0-1.33-.1-4.6-.5-7-.4-2.4 1.5-6 2.5-7.5.67-.33 2.5-1.8 4.5-5s.5-6.67-.5-8c-1-1.17-3.3-3.8-4.5-5-1.2-1.2-4.17-1.83-5.5-2h-5.5zM53 11h8.5l4.5 6c1.5 2 2.5 5.5 3.5 10.5.8 4 0 9-.5 11h-5.5c-1.6 0-3.33-2-4-3-1.17-1.67-3.6-5.2-4-6-.5-1-2.5-4.5-5-6a7.69 7.69 0 00-5-1c-1.83.17-5.5-.7-5.5-5.5s3.67-6 5.5-6H53z'/%3E%3Cpath fill='%232C3E50' d='M39.35 63.9A31.8 31.8 0 019.9 44.16a32.02 32.02 0 016.9-34.81 31.84 31.84 0 0154.4 22.59c0 8.47-3.36 16.6-9.33 22.59a31.82 31.82 0 01-22.53 9.35zm0-61.24a29.15 29.15 0 00-26.98 18.08 29.36 29.36 0 006.33 31.91 29.18 29.18 0 0049.86-20.7c0-7.77-3.08-15.22-8.56-20.71a29.17 29.17 0 00-20.65-8.58z'/%3E%3Cpath fill='%232C3E50' d='M28.73 62a1.33 1.33 0 01-1.33-1.33v-8.39c0-2.27.83-4.47 2.34-6.17l3.6-4.1a6.67 6.67 0 00-.26-9.13l-2.97-2.98a6.61 6.61 0 00-4.7-1.95H9.27a1.33 1.33 0 01-1.33-1.33 1.33 1.33 0 011.33-1.33H25.4a9.14 9.14 0 016.58 2.66l2.98 2.98a9.33 9.33 0 01.37 12.78l-3.48 4.16a6.64 6.64 0 00-1.67 4.41v8.39A1.36 1.36 0 0128.73 62zm37.44-22.07a9.22 9.22 0 01-7.73-4.15l-5.9-8.87a6.64 6.64 0 00-5.52-2.95h-1.14a7.3 7.3 0 01-7.3-7.32 7.33 7.33 0 017.3-7.32h15.4a1.33 1.33 0 011.33 1.33 1.33 1.33 0 01-1.33 1.33h-15.4a4.64 4.64 0 00-4.64 4.66 4.66 4.66 0 004.64 4.66h1.14a9.2 9.2 0 017.73 4.15l5.9 8.86a6.72 6.72 0 005.52 2.96h3a1.33 1.33 0 011.33 1.33 1.33 1.33 0 01-1.33 1.33h-3zM9.3 87a1.27 1.27 0 01-1.04-.5l-5.31-6.7a13.33 13.33 0 01-2.92-8.33V57.7a5.33 5.33 0 015.3-5.32 5.3 5.3 0 015.32 5.33v9.98a1.33 1.33 0 01-1.33 1.33 1.33 1.33 0 01-1.33-1.33v-9.98a2.67 2.67 0 00-2.65-2.67 2.65 2.65 0 00-2.66 2.67v13.76c0 2.42.83 4.77 2.34 6.65l5.3 6.71A1.33 1.33 0 019.3 87z'/%3E%3Cpath fill='%232C3E50' d='M22.57 86.73a1.33 1.33 0 01-1.33-1.33v-7.98c0-2.1-.61-4.16-1.78-5.91-.55-.56-1.2-1.23-1.78-1.87-3.87-4.15-4.48-4.52-6-3.51a2.37 2.37 0 00-.8 3.06l3.54 5.91a1.34 1.34 0 01-1.46 2c-.35-.1-.64-.31-.83-.62l-3.58-6.01a5.07 5.07 0 011.67-6.55c3.53-2.37 5.76 0 9.4 3.91l1.89 2.03a13.34 13.34 0 012.39 7.56v7.98a1.33 1.33 0 01-1.33 1.33zM67.7 87c-.3 0-.58-.1-.82-.3a1.33 1.33 0 01-.2-1.86l5.3-6.7a10.67 10.67 0 002.34-6.63V57.7a2.67 2.67 0 00-2.66-2.66 2.65 2.65 0 00-2.65 2.67v9.98a1.33 1.33 0 01-1.33 1.33 1.33 1.33 0 01-1.33-1.33v-9.98a5.33 5.33 0 015.31-5.33 5.3 5.3 0 015.31 5.33V71.5a13.5 13.5 0 01-2.9 8.3l-5.3 6.68a1.28 1.28 0 01-1.06.5z'/%3E%3Cpath fill='%232C3E50' d='M54.43 86.73a1.33 1.33 0 01-1.33-1.33v-7.98c0-2.63.78-5.2 2.23-7.38l2.05-2.2c3.66-3.92 5.87-6.3 9.4-3.92a5.03 5.03 0 011.72 6.47l-3.63 6.1a1.33 1.33 0 11-2.29-1.39l3.59-5.99a2.37 2.37 0 00-.85-2.98c-1.52-.99-2.13-.64-6 3.51L57.4 71.7a10.67 10.67 0 00-1.64 5.73v7.98a1.33 1.33 0 01-1.33 1.33z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_2205:13708'%3E%3Cpath fill='%23fff' d='M0 0h77v87H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`
            }}></div>
          </div>

          <div className="flex gap-16 px-8">
            <div className='flex flex-col gap-3 w-2/3'>
              <h4 className='font-bold text-xl'>Sustainable Travel</h4>
              <p className="text-sm">Adventure sustainably with TourRadar. We are committed to conscious travel, from responsible operators to our Climate Action Plan and carbon measurements. <Link href="">View our pledge</Link></p>
            </div>
            <div className="flex-1 bg-center bg-cover bg-no-repeat" style={{
              backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='77' height='87' fill='none'%3E%3Ccircle cx='39.5' cy='31.5' r='31.5' fill='%230A7BBD' opacity='.3'/%3E%3Cg clip-path='url(%23clip0_2205:13708)'%3E%3Cpath fill='%23fff' d='M19.5 26.5h-10c-.17 2.5-.4 8.3 0 11.5.5 4 2.5 7.5 5.5 12.5 2.4 4 10.33 8.67 14 10.5 0-1.33-.1-4.6-.5-7-.4-2.4 1.5-6 2.5-7.5.67-.33 2.5-1.8 4.5-5s.5-6.67-.5-8c-1-1.17-3.3-3.8-4.5-5-1.2-1.2-4.17-1.83-5.5-2h-5.5zM53 11h8.5l4.5 6c1.5 2 2.5 5.5 3.5 10.5.8 4 0 9-.5 11h-5.5c-1.6 0-3.33-2-4-3-1.17-1.67-3.6-5.2-4-6-.5-1-2.5-4.5-5-6a7.69 7.69 0 00-5-1c-1.83.17-5.5-.7-5.5-5.5s3.67-6 5.5-6H53z'/%3E%3Cpath fill='%232C3E50' d='M39.35 63.9A31.8 31.8 0 019.9 44.16a32.02 32.02 0 016.9-34.81 31.84 31.84 0 0154.4 22.59c0 8.47-3.36 16.6-9.33 22.59a31.82 31.82 0 01-22.53 9.35zm0-61.24a29.15 29.15 0 00-26.98 18.08 29.36 29.36 0 006.33 31.91 29.18 29.18 0 0049.86-20.7c0-7.77-3.08-15.22-8.56-20.71a29.17 29.17 0 00-20.65-8.58z'/%3E%3Cpath fill='%232C3E50' d='M28.73 62a1.33 1.33 0 01-1.33-1.33v-8.39c0-2.27.83-4.47 2.34-6.17l3.6-4.1a6.67 6.67 0 00-.26-9.13l-2.97-2.98a6.61 6.61 0 00-4.7-1.95H9.27a1.33 1.33 0 01-1.33-1.33 1.33 1.33 0 011.33-1.33H25.4a9.14 9.14 0 016.58 2.66l2.98 2.98a9.33 9.33 0 01.37 12.78l-3.48 4.16a6.64 6.64 0 00-1.67 4.41v8.39A1.36 1.36 0 0128.73 62zm37.44-22.07a9.22 9.22 0 01-7.73-4.15l-5.9-8.87a6.64 6.64 0 00-5.52-2.95h-1.14a7.3 7.3 0 01-7.3-7.32 7.33 7.33 0 017.3-7.32h15.4a1.33 1.33 0 011.33 1.33 1.33 1.33 0 01-1.33 1.33h-15.4a4.64 4.64 0 00-4.64 4.66 4.66 4.66 0 004.64 4.66h1.14a9.2 9.2 0 017.73 4.15l5.9 8.86a6.72 6.72 0 005.52 2.96h3a1.33 1.33 0 011.33 1.33 1.33 1.33 0 01-1.33 1.33h-3zM9.3 87a1.27 1.27 0 01-1.04-.5l-5.31-6.7a13.33 13.33 0 01-2.92-8.33V57.7a5.33 5.33 0 015.3-5.32 5.3 5.3 0 015.32 5.33v9.98a1.33 1.33 0 01-1.33 1.33 1.33 1.33 0 01-1.33-1.33v-9.98a2.67 2.67 0 00-2.65-2.67 2.65 2.65 0 00-2.66 2.67v13.76c0 2.42.83 4.77 2.34 6.65l5.3 6.71A1.33 1.33 0 019.3 87z'/%3E%3Cpath fill='%232C3E50' d='M22.57 86.73a1.33 1.33 0 01-1.33-1.33v-7.98c0-2.1-.61-4.16-1.78-5.91-.55-.56-1.2-1.23-1.78-1.87-3.87-4.15-4.48-4.52-6-3.51a2.37 2.37 0 00-.8 3.06l3.54 5.91a1.34 1.34 0 01-1.46 2c-.35-.1-.64-.31-.83-.62l-3.58-6.01a5.07 5.07 0 011.67-6.55c3.53-2.37 5.76 0 9.4 3.91l1.89 2.03a13.34 13.34 0 012.39 7.56v7.98a1.33 1.33 0 01-1.33 1.33zM67.7 87c-.3 0-.58-.1-.82-.3a1.33 1.33 0 01-.2-1.86l5.3-6.7a10.67 10.67 0 002.34-6.63V57.7a2.67 2.67 0 00-2.66-2.66 2.65 2.65 0 00-2.65 2.67v9.98a1.33 1.33 0 01-1.33 1.33 1.33 1.33 0 01-1.33-1.33v-9.98a5.33 5.33 0 015.31-5.33 5.3 5.3 0 015.31 5.33V71.5a13.5 13.5 0 01-2.9 8.3l-5.3 6.68a1.28 1.28 0 01-1.06.5z'/%3E%3Cpath fill='%232C3E50' d='M54.43 86.73a1.33 1.33 0 01-1.33-1.33v-7.98c0-2.63.78-5.2 2.23-7.38l2.05-2.2c3.66-3.92 5.87-6.3 9.4-3.92a5.03 5.03 0 011.72 6.47l-3.63 6.1a1.33 1.33 0 11-2.29-1.39l3.59-5.99a2.37 2.37 0 00-.85-2.98c-1.52-.99-2.13-.64-6 3.51L57.4 71.7a10.67 10.67 0 00-1.64 5.73v7.98a1.33 1.33 0 01-1.33 1.33z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_2205:13708'%3E%3Cpath fill='%23fff' d='M0 0h77v87H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`
            }}></div>
          </div>
        </div>
      </section>

      <section className='my-8'>
        <div className='container'>
          <h2 className='font-bold text-xl'>TourRadar Spotlight</h2>
          <p>Find out what’s happening at TourRadar—from the latest travel news to our special offers.</p>
          <div className='grid grid-cols-4 gap-4 mt-6'>
            <Link href="" className='w-full rounded-2xl flex flex-col overflow-hidden border hover:drop-shadow'>
              <div className='bg-no-repeat bg-center bg-cover w-full pt-[65%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/424x202/adxyub.png")' }}></div>
              <div className='p-4 flex flex-1 flex-col justify-between'>
                <div className='pb-3 flex flex-col gap-3'>
                  <h5 className='capitalize font-bold'>Our Climate action plane</h5>
                  <p className='text-sm'>We aim to develop an impact measurement tool to simplify carbon measurement and reporting. We also set a goal for all operators to have sustainability plans by 2030.</p>
                </div>
                <p className='text-sm text-[color:var(--primary-color)]'>Read more</p>
              </div>
            </Link>
            <Link href="" className='w-full rounded-2xl flex flex-col overflow-hidden border hover:drop-shadow'>
              <div className='bg-no-repeat bg-center bg-cover w-full pt-[65%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/424x202/adxyub.png")' }}></div>
              <div className='p-4 flex flex-1 flex-col justify-between'>
                <div className='pb-3 flex flex-col gap-3'>
                  <h5 className='capitalize font-bold'>Our Climate action plane</h5>
                  <p className='text-sm'>We aim to develop an impact measurement tool to simplify carbon measurement and reporting.</p>
                </div>
                <p className='text-sm text-[color:var(--primary-color)]'>Read more</p>
              </div>
            </Link>
            <Link href="" className='w-full rounded-2xl flex flex-col overflow-hidden border hover:drop-shadow'>
              <div className='bg-no-repeat bg-center bg-cover w-full pt-[65%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/424x202/adxyub.png")' }}></div>
              <div className='p-4 flex flex-1 flex-col justify-between'>
                <div className='pb-3 flex flex-col gap-3'>
                  <h5 className='capitalize font-bold'>Our Climate action plane</h5>
                  <p className='text-sm'>We aim to develop an impact measurement tool to simplify carbon measurement and reporting.</p>
                </div>
                <p className='text-sm text-[color:var(--primary-color)]'>Read more</p>
              </div>
            </Link>
            <div className='gap-4 grid grid-rows-3'>
              <Link href="" className='flex-1 rounded-2xl border flex overflow-hidden'>
                <div className='bg-[#E6F2F8] w-1/3'></div>
                <div className='flex-1 p-3 flex flex-col justify-between'>
                  <p className='text-[color:var(--secondary-color)]'>Travel Insurance</p>
                  <p className='text-[color:var(--primary-color)]'>Learn more</p>
                </div>
              </Link>
              <Link href="" className='flex-1 rounded-2xl border flex overflow-hidden'>
                <div className='bg-[#E6F2F8] w-1/3'></div>
                <div className='flex-1 p-3 flex flex-col justify-between'>
                  <p className='text-[color:var(--secondary-color)]'>Travel Insurance</p>
                  <p className='text-[color:var(--primary-color)]'>Learn more</p>
                </div>
              </Link>
              <Link href="" className='flex-1 rounded-2xl border flex overflow-hidden'>
                <div className='bg-[#E6F2F8] w-1/3'></div>
                <div className='flex-1 p-3 flex flex-col justify-between'>
                  <p className='text-[color:var(--secondary-color)]'>Travel Insurance</p>
                  <p className='text-[color:var(--primary-color)]'>Learn more</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='my-8'>
        <div className='container'>
          <h2 className='font-bold text-xl'>Popular Destinations</h2>
          <div className='flex flex-wrap mt-6 justify-between'>
            <div className='w-[46%]'>
              <div className='bg-no-repeat bg-center bg-cover rounded-2xl w-full pt-[15%] relative' style={{ backgroundImage: 'url("https://cdn.tourradar.com/images/seo-destination-links/europe-desktop.jpg")' }}>
                <div className='absolute top-0 right-0 left-0 w-full h-full p-4 flex justify-between items-center text-white'>
                  <p className='text-lg font-bold'>Europe</p>
                  <div className='flex gap-3'>
                    <Link href="" className='rounded-full px-3 py-1 border backdrop-opacity-30 backdrop-invert'>All Adventure</Link>
                    <Link href="" className='rounded-full px-3 py-1 border'>Deals</Link>
                  </div>
                </div>
              </div>
              <ul className='mt-3 flex flex-col gap-2 grid grid-cols-3'>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
              </ul>
            </div>
            <div className='w-[46%]'>
              <div className='bg-no-repeat bg-center bg-cover rounded-2xl w-full pt-[15%] relative' style={{ backgroundImage: 'url("https://cdn.tourradar.com/images/seo-destination-links/europe-desktop.jpg")' }}>
                <div className='absolute top-0 right-0 left-0 w-full h-full p-4 flex justify-between items-center text-white'>
                  <p className='text-lg font-bold'>Europe</p>
                  <div className='flex gap-3'>
                    <Link href="" className='rounded-full px-3 py-1 border backdrop-opacity-30 backdrop-invert'>All Adventure</Link>
                    <Link href="" className='rounded-full px-3 py-1 border'>Deals</Link>
                  </div>
                </div>
              </div>
              <ul className='mt-3 flex flex-col gap-2 grid grid-cols-3'>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
              </ul>
            </div>
            <div className='w-[46%]'>
              <div className='bg-no-repeat bg-center bg-cover rounded-2xl w-full pt-[15%] relative' style={{ backgroundImage: 'url("https://cdn.tourradar.com/images/seo-destination-links/europe-desktop.jpg")' }}>
                <div className='absolute top-0 right-0 left-0 w-full h-full p-4 flex justify-between items-center text-white'>
                  <p className='text-lg font-bold'>Europe</p>
                  <div className='flex gap-3'>
                    <Link href="" className='rounded-full px-3 py-1 border backdrop-opacity-30 backdrop-invert'>All Adventure</Link>
                    <Link href="" className='rounded-full px-3 py-1 border'>Deals</Link>
                  </div>
                </div>
              </div>
              <ul className='mt-3 flex-col gap-2 grid grid-cols-3'>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
              </ul>
            </div>
            <div className='w-[46%]'>
              <div className='bg-no-repeat bg-center bg-cover rounded-2xl w-full pt-[15%] relative' style={{ backgroundImage: 'url("https://cdn.tourradar.com/images/seo-destination-links/europe-desktop.jpg")' }}>
                <div className='absolute top-0 right-0 left-0 w-full h-full p-4 flex justify-between items-center text-white'>
                  <p className='text-lg font-bold'>Europe</p>
                  <div className='flex gap-3'>
                    <Link href="" className='rounded-full px-3 py-1 border backdrop-opacity-30 backdrop-invert'>All Adventure</Link>
                    <Link href="" className='rounded-full px-3 py-1 border'>Deals</Link>
                  </div>
                </div>
              </div>
              <ul className='mt-3 flex flex-col gap-2 grid grid-cols-3'>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
                <li>
                  <Link href="" className='hover:text-[color:var(--primary-color)] hover:underline'>France</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='my-8'>
        <div className='container'>
          <h2 className='font-bold text-2xl'>Best destinations for every season</h2>
          <div className='mt-4'>
            <p className='mb-4 font-bold'>Tours departing in winter (December, January, February)</p>
            <div className='grid grid-cols-5 gap-4'>
              <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                <div className='w-1/4 rounded-xl overflow-hidden'>
                  <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                </div>
                <div className='flex-1 flex items-center'>
                  <p className='text-[15px]'>Europe in December</p>
                </div>
              </Link>
              <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                <div className='w-1/4 rounded-xl overflow-hidden'>
                  <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                </div>
                <div className='flex-1 flex items-center'>
                  <p className='text-[15px]'>Europe in December</p>
                </div>
              </Link>
              <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                <div className='w-1/4 rounded-xl overflow-hidden'>
                  <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                </div>
                <div className='flex-1 flex items-center'>
                  <p className='text-[15px]'>Europe in December</p>
                </div>
              </Link>
              <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                <div className='w-1/4 rounded-xl overflow-hidden'>
                  <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                </div>
                <div className='flex-1 flex items-center'>
                  <p className='text-[15px]'>Europe in December</p>
                </div>
              </Link>
              <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                <div className='w-1/4 rounded-xl overflow-hidden'>
                  <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                </div>
                <div className='flex-1 flex items-center'>
                  <p className='text-[15px]'>Europe in December</p>
                </div>
              </Link>
            </div>
          </div>


          <div className='mt-4'>
            <p className='mb-4 font-bold'>Tours departing in spring (March, April, May)</p>
            <div className='grid grid-cols-5 gap-4'>
              <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                <div className='w-1/4 rounded-xl overflow-hidden'>
                  <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                </div>
                <div className='flex-1 flex items-center'>
                  <p className='text-[15px]'>Europe in December</p>
                </div>
              </Link>
              <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                <div className='w-1/4 rounded-xl overflow-hidden'>
                  <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                </div>
                <div className='flex-1 flex items-center'>
                  <p className='text-[15px]'>Europe in December</p>
                </div>
              </Link>
              <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                <div className='w-1/4 rounded-xl overflow-hidden'>
                  <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                </div>
                <div className='flex-1 flex items-center'>
                  <p className='text-[15px]'>Europe in December</p>
                </div>
              </Link>
              <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                <div className='w-1/4 rounded-xl overflow-hidden'>
                  <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                </div>
                <div className='flex-1 flex items-center'>
                  <p className='text-[15px]'>Europe in December</p>
                </div>
              </Link>
              <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                <div className='w-1/4 rounded-xl overflow-hidden'>
                  <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                </div>
                <div className='flex-1 flex items-center'>
                  <p className='text-[15px]'>Europe in December</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="my-8">
        <div className="container">
          <h2 className='font-bold text-2xl'>Adventures For Everyone</h2>
          <div className='mt-6 grid grid-cols-4 gap-6'>
            <Link href="" className='w-full'>
              <div className='w-full bg-no-repeat bg-center bg-cover pt-[100%] rounded' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/1040x812/6C8RqH.jpg")' }}></div>
              <p className='mt-4 font-bold text-lg'>Families</p>
            </Link>
            <Link href="" className='w-full'>
              <div className='w-full bg-no-repeat bg-center bg-cover pt-[100%] rounded' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/1040x812/6C8RqH.jpg")' }}></div>
              <p className='mt-4 font-bold text-lg'>Families</p>
            </Link>
            <Link href="" className='w-full'>
              <div className='w-full bg-no-repeat bg-center bg-cover pt-[100%] rounded' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/1040x812/6C8RqH.jpg")' }}></div>
              <p className='mt-4 font-bold text-lg'>Families</p>
            </Link>
            <Link href="" className='w-full'>
              <div className='w-full bg-no-repeat bg-center bg-cover pt-[100%] rounded' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/1040x812/6C8RqH.jpg")' }}></div>
              <p className='mt-4 font-bold text-lg'>Families</p>
            </Link>
          </div>
        </div>
      </section>

      <section className='my-8'>
        <div className='container'>
          <h2 className='font-bold text-2xl'>Adventures All Around The World</h2>
          <div className='mt-4'>
            <p className='mb-4 font-medium'>Hiking & Trekking</p>
            <div className='grid grid-cols-5 gap-4'>
              <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                <div className='w-1/4 rounded-xl overflow-hidden'>
                  <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                </div>
                <div className='flex-1 flex items-center'>
                  <p className='text-[15px]'>Europe in December</p>
                </div>
              </Link>
              <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                <div className='w-1/4 rounded-xl overflow-hidden'>
                  <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                </div>
                <div className='flex-1 flex items-center'>
                  <p className='text-[15px]'>Europe in December</p>
                </div>
              </Link>
              <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                <div className='w-1/4 rounded-xl overflow-hidden'>
                  <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                </div>
                <div className='flex-1 flex items-center'>
                  <p className='text-[15px]'>Europe in December</p>
                </div>
              </Link>
              <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                <div className='w-1/4 rounded-xl overflow-hidden'>
                  <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                </div>
                <div className='flex-1 flex items-center'>
                  <p className='text-[15px]'>Europe in December</p>
                </div>
              </Link>
              <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                <div className='w-1/4 rounded-xl overflow-hidden'>
                  <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                </div>
                <div className='flex-1 flex items-center'>
                  <p className='text-[15px]'>Europe in December</p>
                </div>
              </Link>
            </div>
          </div>


          <div className='mt-4'>
            <p className='mb-4 font-medium'>River Cruises</p>
            <div className='grid grid-cols-5 gap-4'>
              <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                <div className='w-1/4 rounded-xl overflow-hidden'>
                  <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                </div>
                <div className='flex-1 flex items-center'>
                  <p className='text-[15px]'>Europe in December</p>
                </div>
              </Link>
              <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                <div className='w-1/4 rounded-xl overflow-hidden'>
                  <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                </div>
                <div className='flex-1 flex items-center'>
                  <p className='text-[15px]'>Europe in December</p>
                </div>
              </Link>
              <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                <div className='w-1/4 rounded-xl overflow-hidden'>
                  <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                </div>
                <div className='flex-1 flex items-center'>
                  <p className='text-[15px]'>Europe in December</p>
                </div>
              </Link>
              <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                <div className='w-1/4 rounded-xl overflow-hidden'>
                  <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                </div>
                <div className='flex-1 flex items-center'>
                  <p className='text-[15px]'>Europe in December</p>
                </div>
              </Link>
              <Link href="" className='flex gap-4 drop-shadow hover:drop-shadow-2xl rounded-xl p-1 w-full border'>
                <div className='w-1/4 rounded-xl overflow-hidden'>
                  <div className='bg-no-repeat bg-cover bg-center w-full pt-[100%]' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/120x120/XFjQLs.jpg")' }}></div>
                </div>
                <div className='flex-1 flex items-center'>
                  <p className='text-[15px]'>Europe in December</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* support */}
      <section className="my-8">
        <div className="container">
          <h2 className='font-bold text-2xl'>24/7 Customer Support</h2>
          <div className="mt-6 flex gap-12">
            <div className="w-2/3">
              <p className="text-sm">Our team of experienced adventure specialists have travelled to hundreds of countries around the globe and have decades of first-hand travel experience to share. Contact us now to have all of your advnture-related questions answered!</p>
              <button className='mt-4 py-3 px-20 rounded bg-[color:var(--primary-color)] font-medium text-white'>Contact Us</button>
            </div>
            <div className="flex-1 flex justify-end">
              <div className='mr-[-4%] z-30'>
                <div className="drop-shadow bg-no-repeat bg-cover bg-center rounded-full w-[80px] pt-[100%]" style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/team/original/116_X7vUqJpc.jpg")' }}></div>
              </div>
              <div className='mr-[-4%] z-20'>
                <div className="drop-shadow bg-no-repeat bg-cover bg-center rounded-full w-[80px] pt-[100%]" style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/team/original/116_X7vUqJpc.jpg")' }}></div>
              </div>
              <div className=''>
                <div className="drop-shadow bg-no-repeat bg-cover bg-center rounded-full w-[80px] pt-[100%]" style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/team/original/116_X7vUqJpc.jpg")' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-8 bg-[#2C3E50] py-8">
        <div className="container">
          <div className="uppercase text-white text-center">
            <h2 className="text-lg">Day to come</h2>
            <p className="text-sm">a travel magazine by itourgo</p>
          </div>
          <div className="mt-6 grid grid-cols-4 gap-8">
            <Link href="" className="w-full">
              <div className="w-full rounded-lg bg-no-repeat bg-center bg-cover pt-[100%] relative" style={{ backgroundImage: 'url("https://www.tourradar.com/days-to-come/wp-content/uploads/2023/11/HERO-NamburgNationalParkPinnacles.-Photodigitaal.nl_Shutterstock-2048x1365.jpg")' }}>
                <div className='absolute bottom-[0%] text-white p-4'>
                  <h6 className='text-lg font-medium'>The Best Four-Week Travel Itineraries in Australia</h6>
                  <p className='text-sm'>Randi Gollin</p>
                </div>
              </div>
            </Link>
            <Link href="" className="w-full">
              <div className="w-full rounded-lg bg-no-repeat bg-center bg-cover pt-[100%] relative" style={{ backgroundImage: 'url("https://www.tourradar.com/days-to-come/wp-content/uploads/2023/11/HERO-NamburgNationalParkPinnacles.-Photodigitaal.nl_Shutterstock-2048x1365.jpg")' }}>
                <div className='absolute bottom-[0%] text-white p-4'>
                  <h6 className='text-lg font-medium'>The Best Four-Week Travel Itineraries in Australia</h6>
                  <p className='text-sm'>Randi Gollin</p>
                </div>
              </div>
            </Link>
            <Link href="" className="w-full">
              <div className="w-full rounded-lg bg-no-repeat bg-center bg-cover pt-[100%] relative" style={{ backgroundImage: 'url("https://www.tourradar.com/days-to-come/wp-content/uploads/2023/11/HERO-NamburgNationalParkPinnacles.-Photodigitaal.nl_Shutterstock-2048x1365.jpg")' }}>
                <div className='absolute bottom-[0%] text-white p-4'>
                  <h6 className='text-lg font-medium'>The Best Four-Week Travel Itineraries in Australia</h6>
                  <p className='text-sm'>Randi Gollin</p>
                </div>
              </div>
            </Link>
            <Link href="" className="w-full">
              <div className="w-full rounded-lg bg-no-repeat bg-center bg-cover pt-[100%] relative" style={{ backgroundImage: 'url("https://www.tourradar.com/days-to-come/wp-content/uploads/2023/11/HERO-NamburgNationalParkPinnacles.-Photodigitaal.nl_Shutterstock-2048x1365.jpg")' }}>
                <div className='absolute bottom-[0%] text-white p-4'>
                  <h6 className='text-lg font-medium'>The Best Four-Week Travel Itineraries in Australia</h6>
                  <p className='text-sm'>Randi Gollin</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Operators */}
      <section className="my-8">
        <div className="container">
          <h2 className="font-bold text-2xl">
            Top Operators
          </h2>
          <div className="mt-6 grid grid-cols-3 gap-6">
            <Link href="" className="w-full rounded-lg border flex p-4 gap-4 items-center">
              <div>
                <img className="w-[72px]" src="https://cdn.tourradar.com/s3/op/206x150/Contiki-5d79.png" alt="" />
              </div>
              <div className="flex flex-col justify-between">
                <h5>Contiki</h5>
                <div className="flex gap-3 items-center text-sm">
                  <span className="text-orange-500">4.7</span>
                  <i className='flex text-orange-500'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </i>
                  <span className='text-[#777777'>5,200 reviews</span>
                </div>
              </div>
            </Link>
            <Link href="" className="w-full rounded-lg border flex p-4 gap-4 items-center">
              <div>
                <img className="w-[72px]" src="https://cdn.tourradar.com/s3/op/206x150/Contiki-5d79.png" alt="" />
              </div>
              <div className="flex flex-col justify-between">
                <h5>Contiki</h5>
                <div className="flex gap-3 items-center text-sm">
                  <span className="text-orange-500">4.7</span>
                  <i className='flex text-orange-500'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </i>
                  <span className='text-[#777777'>5,200 reviews</span>
                </div>
              </div>
            </Link>
            <Link href="" className="w-full rounded-lg border flex p-4 gap-4 items-center">
              <div>
                <img className="w-[72px]" src="https://cdn.tourradar.com/s3/op/206x150/Contiki-5d79.png" alt="" />
              </div>
              <div className="flex flex-col justify-between">
                <h5>Contiki</h5>
                <div className="flex gap-3 items-center text-sm">
                  <span className="text-orange-500">4.7</span>
                  <i className='flex text-orange-500'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </i>
                  <span className='text-[#777777'>5,200 reviews</span>
                </div>
              </div>
            </Link>
            <Link href="" className="w-full rounded-lg border flex p-4 gap-4 items-center">
              <div>
                <img className="w-[72px]" src="https://cdn.tourradar.com/s3/op/206x150/Contiki-5d79.png" alt="" />
              </div>
              <div className="flex flex-col justify-between">
                <h5>Contiki</h5>
                <div className="flex gap-3 items-center text-sm">
                  <span className="text-orange-500">4.7</span>
                  <i className='flex text-orange-500'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </i>
                  <span className='text-[#777777'>5,200 reviews</span>
                </div>
              </div>
            </Link>
            <Link href="" className="w-full rounded-lg border flex p-4 gap-4 items-center">
              <div>
                <img className="w-[72px]" src="https://cdn.tourradar.com/s3/op/206x150/Contiki-5d79.png" alt="" />
              </div>
              <div className="flex flex-col justify-between">
                <h5>Contiki</h5>
                <div className="flex gap-3 items-center text-sm">
                  <span className="text-orange-500">4.7</span>
                  <i className='flex text-orange-500'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </i>
                  <span className='text-[#777777'>5,200 reviews</span>
                </div>
              </div>
            </Link>
            <Link href="" className="w-full rounded-lg border flex p-4 gap-4 items-center">
              <div>
                <img className="w-[72px]" src="https://cdn.tourradar.com/s3/op/206x150/Contiki-5d79.png" alt="" />
              </div>
              <div className="flex flex-col justify-between">
                <h5>Contiki</h5>
                <div className="flex gap-3 items-center text-sm">
                  <span className="text-orange-500">4.7</span>
                  <i className='flex text-orange-500'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </i>
                  <span className='text-[#777777'>5,200 reviews</span>
                </div>
              </div>
            </Link>
            <Link href="" className="w-full rounded-lg border flex p-4 gap-4 items-center">
              <div>
                <img className="w-[72px]" src="https://cdn.tourradar.com/s3/op/206x150/Contiki-5d79.png" alt="" />
              </div>
              <div className="flex flex-col justify-between">
                <h5>Contiki</h5>
                <div className="flex gap-3 items-center text-sm">
                  <span className="text-orange-500">4.7</span>
                  <i className='flex text-orange-500'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </i>
                  <span className='text-[#777777'>5,200 reviews</span>
                </div>
              </div>
            </Link>
          </div>
          <div className='w-full flex justify-center mt-4'>
            <button className='px-20 py-3 bg-[color:var(--primary-color)] rounded-lg font-medium text-white'>All operator</button>
          </div>
        </div>
      </section>

      <section className='my-8'>
        <div className="container">
          <h2 className='font-bold text-2xl'>Recommended Destinations</h2>
          <div className='mt-6 grid grid-cols-6 gap-5'>
            <Link href="" className='w-full rounded-lg pt-[100%] bg-no-repeat bg-center bg-cover relative overflow-hidden' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/serp/1436x180/1514_YauXU7ae.jpg")' }}>
              <div className="absolute z-10 left-0 top-0 h-full w-full flex items-center justify-center">
                <div className="text-white flex flex-col gap-2 text-center">
                  <h5 className="text-xl font-bold">Croatia</h5>
                  <p className="text-sm">600 tour</p>
                </div>
              </div>
              <div className="absolute left-0 top-0 w-full h-full bg-[color:rgba(0,0,0,0.25)]"></div>
            </Link>
            <Link href="" className='w-full rounded-lg pt-[100%] bg-no-repeat bg-center bg-cover relative overflow-hidden' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/serp/1436x180/1514_YauXU7ae.jpg")' }}>
              <div className="absolute z-10 left-0 top-0 h-full w-full flex items-center justify-center">
                <div className="text-white flex flex-col gap-2 text-center">
                  <h5 className="text-xl font-bold">Croatia</h5>
                  <p className="text-sm">600 tour</p>
                </div>
              </div>
              <div className="absolute left-0 top-0 w-full h-full bg-[color:rgba(0,0,0,0.25)]"></div>
            </Link>
            <Link href="" className='w-full rounded-lg pt-[100%] bg-no-repeat bg-center bg-cover relative overflow-hidden' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/serp/1436x180/1514_YauXU7ae.jpg")' }}>
              <div className="absolute z-10 left-0 top-0 h-full w-full flex items-center justify-center">
                <div className="text-white flex flex-col gap-2 text-center">
                  <h5 className="text-xl font-bold">Croatia</h5>
                  <p className="text-sm">600 tour</p>
                </div>
              </div>
              <div className="absolute left-0 top-0 w-full h-full bg-[color:rgba(0,0,0,0.25)]"></div>
            </Link>
            <Link href="" className='w-full rounded-lg pt-[100%] bg-no-repeat bg-center bg-cover relative overflow-hidden' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/serp/1436x180/1514_YauXU7ae.jpg")' }}>
              <div className="absolute z-10 left-0 top-0 h-full w-full flex items-center justify-center">
                <div className="text-white flex flex-col gap-2 text-center">
                  <h5 className="text-xl font-bold">Croatia</h5>
                  <p className="text-sm">600 tour</p>
                </div>
              </div>
              <div className="absolute left-0 top-0 w-full h-full bg-[color:rgba(0,0,0,0.25)]"></div>
            </Link>
            <Link href="" className='w-full rounded-lg pt-[100%] bg-no-repeat bg-center bg-cover relative overflow-hidden' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/serp/1436x180/1514_YauXU7ae.jpg")' }}>
              <div className="absolute z-10 left-0 top-0 h-full w-full flex items-center justify-center">
                <div className="text-white flex flex-col gap-2 text-center">
                  <h5 className="text-xl font-bold">Croatia</h5>
                  <p className="text-sm">600 tour</p>
                </div>
              </div>
              <div className="absolute left-0 top-0 w-full h-full bg-[color:rgba(0,0,0,0.25)]"></div>
            </Link>
            <Link href="" className='w-full rounded-lg pt-[100%] bg-no-repeat bg-center bg-cover relative overflow-hidden' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/serp/1436x180/1514_YauXU7ae.jpg")' }}>
              <div className="absolute z-10 left-0 top-0 h-full w-full flex items-center justify-center">
                <div className="text-white flex flex-col gap-2 text-center">
                  <h5 className="text-xl font-bold">Croatia</h5>
                  <p className="text-sm">600 tour</p>
                </div>
              </div>
              <div className="absolute left-0 top-0 w-full h-full bg-[color:rgba(0,0,0,0.25)]"></div>
            </Link>
            <Link href="" className='w-full rounded-lg pt-[100%] bg-no-repeat bg-center bg-cover relative overflow-hidden' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/serp/1436x180/1514_YauXU7ae.jpg")' }}>
              <div className="absolute z-10 left-0 top-0 h-full w-full flex items-center justify-center">
                <div className="text-white flex flex-col gap-2 text-center">
                  <h5 className="text-xl font-bold">Croatia</h5>
                  <p className="text-sm">600 tour</p>
                </div>
              </div>
              <div className="absolute left-0 top-0 w-full h-full bg-[color:rgba(0,0,0,0.25)]"></div>
            </Link>
          </div>
        </div>
      </section>

      <section className='my-8'>
        <div className="container">
          <h2 className="font-bold text-2xl">Featured Adventures</h2>
          <div className="grid grid-cols-4 mt-6 gap-8">
            <Link href="" className="w-full rounded-lg border p-4 flex flex-col drop-shadow">
              <p className='line-clamp-1 font-medium mb-2'>Best of Bulgaria Roundtrip</p>
              <p className='line-clamp-1 text-sm'>8 days from $648</p>
            </Link>
            <Link href="" className="w-full rounded-lg border p-4 flex flex-col drop-shadow">
              <p className='line-clamp-1 font-medium mb-2'>Best of Bulgaria Roundtrip</p>
              <p className='line-clamp-1 text-sm'>8 days from $648</p>
            </Link>
            <Link href="" className="w-full rounded-lg border p-4 flex flex-col drop-shadow">
              <p className='line-clamp-1 font-medium mb-2'>Best of Bulgaria Roundtrip</p>
              <p className='line-clamp-1 text-sm'>8 days from $648</p>
            </Link>
            <Link href="" className="w-full rounded-lg border p-4 flex flex-col drop-shadow">
              <p className='line-clamp-1 font-medium mb-2'>Best of Bulgaria Roundtrip</p>
              <p className='line-clamp-1 text-sm'>8 days from $648</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="my-8 bg-[#2C3E50] py-12">
        <div className="container flex justify-between">
          <div className="w-2/5 flex flex-col justify-between text-white">
            <h2 className="text-2xl">Sign up for Our Newsletter</h2>
            <p className="text-sm">Save up to 50% on tours! Get exclusive access to members only deals by email.</p>
          </div>
          <div className="">
            <div className="w-full flex rounded h-12 overflow-hidden">
              <input placeholder="ex: example@gmail.com" className='w-[80%] h-full border-none  border-l border-r focus-input-none' type="text" />
              <button className='h-full px-12 bg-[color:var(--primary-color)] text-white font-medium'>Subscribe</button>
            </div>
            <p className='text-sm text-white mt-6'>By submitting this form, I agree to the TourRadar T&Cs and Privacy policy.</p>
          </div>
        </div>
      </section>
    </div >
  );
}
export default Home;
