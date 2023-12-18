'use client'

import { useState } from 'react'
import Link from "next/link"
import { BiChat, BiSolidDownArrow, BiSolidStar } from "react-icons/bi"
import { BsShop } from "react-icons/bs"
import { GoPlus } from "react-icons/go"
import Review from '~/components/agency/Review'
const Agency = () => {

        const [tab, setTab] = useState(1)

        const handleChangeTab = (e: any) => {
                setTab(e.currentTarget.getAttribute('id'))
        }
        return (
                <div className="mt-12">
                        <div className="container">
                                <div className="flex gap-8 grid grid-cols-3">
                                        <div className="rounded-lg bg-no-repeat bg-center relative bg-cover w-full h-36 overflow-hidden" style={{ backgroundImage: 'url("https://down-ws-vn.img.susercontent.com/vn-11134210-7qukw-lgnjqt6ihlgz60_tn.webp")' }}>
                                                <div className="absolute w-full h-full bg-[rgba(0,0,0,0.3)]"></div>
                                                <div className="flex flex-col justify-between w-full h-full px-4 py-3 absolute">
                                                        <div className="flex gap-3">
                                                                <div className="bg-no-repeat bg-center bg-cover h-20 w-20 rounded-full border-4" style={{ backgroundImage: 'url("https://down-ws-vn.img.susercontent.com/38bedd074aad08703440ad8acd596309_tn")' }}></div>
                                                                <div className="">
                                                                        <p className="uppercase text-2xl font-medium text-white">365 Travel</p>
                                                                        <p className="text-xs text-gray-400">Online 5 phút trước</p>
                                                                </div>
                                                        </div>
                                                        <div className="flex gap-4 grid grid-cols-2">
                                                                <button className="rounded border border-white text-white flex items-center justify-center gap-2"><GoPlus /><span>Theo dõi</span></button>
                                                                <button className="rounded border border-white text-white  flex items-center justify-center gap-2"><BiChat /><span>Chat</span></button>
                                                        </div>
                                                </div>
                                        </div>


                                        <div className="flex flex-col justify-between">
                                                <div className="flex gap-4 items-center py-2">
                                                        <BsShop />
                                                        <span className="capitalize">Sản phẩm</span>
                                                        <span className="line-clamp-1">312</span>
                                                </div>
                                                <div className="flex gap-4 items-center py-2">
                                                        <BsShop />
                                                        <span className="capitalize">Đang theo</span>
                                                        <span className="line-clamp-1">312</span>
                                                </div>
                                                <div className="flex gap-4 items-center py-2">
                                                        <BsShop />
                                                        <span className="capitalize">Tỉ lệ phản hồi chat</span>
                                                        <span className="line-clamp-1">312</span>
                                                </div>
                                        </div>

                                        <div className="flex flex-col justify-between">
                                                <div className="flex gap-4 items-center py-2">
                                                        <BsShop />
                                                        <span className="capitalize">Người theo dõi</span>
                                                        <span className="line-clamp-1">312</span>
                                                </div>
                                                <div className="flex gap-4 items-center py-2">
                                                        <BsShop />
                                                        <span className="capitalize">Đánh giá</span>
                                                        <span className="line-clamp-1">312</span>
                                                </div>
                                                <div className="flex gap-4 items-center py-2">
                                                        <BsShop />
                                                        <span className="capitalize">Nhà cung cấp</span>
                                                        <span className="line-clamp-1">312</span>
                                                </div>
                                        </div>
                                </div>
                                <div className="mt-4">
                                        <h6 className="text-[color:var(--primary-color)] font-medium">Thông tin</h6>
                                        <p className="text-xs mt-3">I always believe that success in business depends on how we impact on our clients and employees and whether we are able to enrich their life. A truly great organization must treat the people inside and outside with utmost care, respect and appreciation.
                                                When 365 Travel was established in 2006, I had a burning passion to make every trip the customer’s greatest experience ever. That passion which started our journey into the realm of tour operation continues to drive us today. It undoubtedly demands a great deal of constant team and individual effort from the frontline to the boardroom day in and day out. Our will and hard work have transformed, 365 Travel from a tinny and unknown tour operator into one of Vietnam’s leading and most trusted destination management companies. Marking every year with unceasing growth of revenues and profit, we have extended our sales network to 100 agents around the world and reached the volume of over 12,000 travelers coming to Southeast Asia through Vietnam.

                                                I am well aware that 365 Travel’s achievements would be impossible without the contribution of our dedicated staff and the extraordinary support of our partners and customers. From the bottom of my heart, I would like to extend since thanks to you all. My deep gratitude goes to my teammates at 365 Travel who are striving tirelessly to ensure the highest level of satisfaction for every traveler on tour with us.</p>
                                </div>
                        </div>

                        {/* Tab */}
                        <div className="mt-8 border-b w-full">
                                <div className="container">
                                        <div className="grid grid-flow-col justify-stretch uppercase">
                                                <button id={`1`} onClick={handleChangeTab} className={`px-2 py-3 flex justify-center ${tab == 1 ? "border-b border-b-4 border-b-red-500 text-red-500" : ""}`}>
                                                        Đánh giá
                                                </button>
                                                <button id={`2`} onClick={handleChangeTab} className={`px-2 py-3 flex justify-center ${tab == 2 ? "border-b border-b-4 border-b-red-500 text-red-500" : ""}`}>
                                                        Tất cả sản phẩm
                                                </button>
                                                <button id={`3`} onClick={handleChangeTab} className={`px-2 py-3 flex justify-center ${tab == 3 ? "border-b border-b-4 border-b-red-500 text-red-500" : ""}`}>
                                                        Best Seller
                                                </button>
                                                <button id={`4`} onClick={handleChangeTab} className={`px-2 py-3 flex justify-center ${tab == 4 ? "border-b border-b-4 border-b-red-500 text-red-500" : ""}`}>
                                                        Sale upto 50%
                                                </button>
                                                <button id={`5`} onClick={handleChangeTab} className={`px-2 py-3 flex justify-center ${tab == 5 ? "border-b border-b-4 border-b-red-500 text-red-500" : ""}`}>
                                                        Combo
                                                </button>
                                                <button id={`6`} onClick={handleChangeTab} className="px-2 py-3 flex justify-center relative flex items-center gap-4">
                                                        <p className="absolute left-0 h-2/5 border"></p>
                                                        <span>Thêm</span>
                                                        <BiSolidDownArrow size="14" />
                                                </button>
                                        </div>
                                </div>

                        </div>

                        <div className="bg-[#ccc]">
                                <div className="container">
                                        <div className={`${tab == 1 ? "flex" : "hidden"}`}>
                                        
                                        <div className="flex flex-col gap-5">
                                        <div className="bg-white border-t-3 grid grid-cols-6 my-6 text-center text-sm">
                                                <div className="border-slate-300 py-2 cursor-pointer">
                                                       Tất cả
                                                </div>
                                                <div className=" py-2 cursor-pointer">
                                                        5 Sao
                                                </div>
                                                <div className="py-2 cursor-pointer ">
                                                        4 Sao
                                                </div>
                                                <div className="py-2 cursor-pointer">
                                                        3 Sao
                                                </div>
                                                <div className="py-2 cursor-pointer">
                                                        2 Sao
                                                </div>
                                                <div className="py-2 cursor-pointer">
                                                        1 Sao
                                                </div>
                                        </div>
                                                <Review />
                                                <Review />
                                                <Review />
                                                <Review />
                                                <Review />
                                        </div>  
                                        </div>
                                            
                                        <div className={`${tab == 2 ? "flex" : "hidden"} grid grid-cols-5 gap-8 py-12`}>
                                                <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                        <div className="w-full pt-[100%] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://media.vietravel.com/images/Content/ba-na-hills.jpg")' }}>
                                                                {/* <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" /> */}

                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng 1, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p className="line-clamp-3">Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
                                                                        </div>

                                                                </div>

                                                                <div className="p-4 flex gap-2">
                                                                        <span>$170.00</span>
                                                                        <i>|</i>
                                                                        <span>Per person</span>
                                                                </div>
                                                        </div>
                                                </Link>
                                                <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                        <div className="w-full pt-[100%] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://media.vietravel.com/images/Content/ba-na-hills.jpg")' }}>
                                                                {/* <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" /> */}

                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng 1, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p className="line-clamp-3">Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
                                                                        </div>

                                                                </div>

                                                                <div className="p-4 flex gap-2">
                                                                        <span>$170.00</span>
                                                                        <i>|</i>
                                                                        <span>Per person</span>
                                                                </div>
                                                        </div>
                                                </Link>
                                                <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                        <div className="w-full pt-[100%] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://media.vietravel.com/images/Content/ba-na-hills.jpg")' }}>
                                                                {/* <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" /> */}

                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng 1, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p className="line-clamp-3">Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
                                                                        </div>

                                                                </div>

                                                                <div className="p-4 flex gap-2">
                                                                        <span>$170.00</span>
                                                                        <i>|</i>
                                                                        <span>Per person</span>
                                                                </div>
                                                        </div>
                                                </Link>
                                                <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                        <div className="w-full pt-[100%] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://media.vietravel.com/images/Content/ba-na-hills.jpg")' }}>
                                                                {/* <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" /> */}

                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng 1, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p className="line-clamp-3">Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
                                                                        </div>

                                                                </div>

                                                                <div className="p-4 flex gap-2">
                                                                        <span>$170.00</span>
                                                                        <i>|</i>
                                                                        <span>Per person</span>
                                                                </div>
                                                        </div>
                                                </Link>
                                                <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                        <div className="w-full pt-[100%] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://media.vietravel.com/images/Content/ba-na-hills.jpg")' }}>
                                                                {/* <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" /> */}

                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng 1, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p className="line-clamp-3">Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
                                                                        </div>

                                                                </div>

                                                                <div className="p-4 flex gap-2">
                                                                        <span>$170.00</span>
                                                                        <i>|</i>
                                                                        <span>Per person</span>
                                                                </div>
                                                        </div>
                                                </Link>
                                                <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                        <div className="w-full pt-[100%] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://media.vietravel.com/images/Content/ba-na-hills.jpg")' }}>
                                                                {/* <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" /> */}

                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng 1, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p className="line-clamp-3">Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
                                                                        </div>

                                                                </div>

                                                                <div className="p-4 flex gap-2">
                                                                        <span>$170.00</span>
                                                                        <i>|</i>
                                                                        <span>Per person</span>
                                                                </div>
                                                        </div>
                                                </Link>


                                        </div>
                                </div>

                        </div>
                        <div className="container pt-12">
                                <div className='text-center'>
                                        <h1 className="text-2xl text-[color:var(--primary-color)] font-bold mb-6 capitalize">Các đại lý khác</h1>
                                        <h3 className="text-5xl font-medium mb-8 capitalize">Tham khảo tour của các đại lý hàng đầu của chúng tôi</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                                <div className="flex grid grid-cols-6 gap-8 mt-12">
                                        <div className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                <div className="bg-no-repeat bg-center bg-cover w-full pt-[109%]" style={{ backgroundImage: 'url("https://down-vn.img.susercontent.com/file/4a869c76e6a105360f55058892d7d722_tn")' }}>

                                                </div>
                                                <div className="bg-[color:var(--primary-color)] text-white py-2">
                                                        <h1 className="text-2xl font-medium text-center">365 Travel</h1>
                                                        <p className='mt-2 px-4 line-clamp-1 text-xs underline'>Hơn 200 tour trong và ngoài nước</p>
                                                        <h3 className="mt-1 px-4 line-clamp-1 flex gap-2 items-center text-xs"><span className='text-red-600'>Đánh giá:</span><span className="flex gap-1 text-yellow-200"><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /></span></h3>
                                                </div>
                                        </div>
                                        <div className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                <div className="bg-no-repeat bg-center bg-cover w-full pt-[109%]" style={{ backgroundImage: 'url("https://down-vn.img.susercontent.com/file/4a869c76e6a105360f55058892d7d722_tn")' }}>

                                                </div>
                                                <div className="bg-[color:var(--primary-color)] text-white py-2">
                                                        <h1 className="text-2xl font-medium text-center">365 Travel</h1>
                                                        <p className='mt-2 px-4 line-clamp-1 text-xs underline'>Hơn 200 tour trong và ngoài nước</p>
                                                        <h3 className="mt-1 px-4 line-clamp-1 flex gap-2 items-center text-xs"><span className='text-red-600'>Đánh giá:</span><span className="flex gap-1 text-yellow-200"><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /></span></h3>
                                                </div>
                                        </div>
                                        <div className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                <div className="bg-no-repeat bg-center bg-cover w-full pt-[109%]" style={{ backgroundImage: 'url("https://down-vn.img.susercontent.com/file/4a869c76e6a105360f55058892d7d722_tn")' }}>

                                                </div>
                                                <div className="bg-[color:var(--primary-color)] text-white py-2">
                                                        <h1 className="text-2xl font-medium text-center">365 Travel</h1>
                                                        <p className='mt-2 px-4 line-clamp-1 text-xs underline'>Hơn 200 tour trong và ngoài nước</p>
                                                        <h3 className="mt-1 px-4 line-clamp-1 flex gap-2 items-center text-xs"><span className='text-red-600'>Đánh giá:</span><span className="flex gap-1 text-yellow-200"><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /></span></h3>
                                                </div>
                                        </div>
                                        <div className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                <div className="bg-no-repeat bg-center bg-cover w-full pt-[109%]" style={{ backgroundImage: 'url("https://down-vn.img.susercontent.com/file/4a869c76e6a105360f55058892d7d722_tn")' }}>

                                                </div>
                                                <div className="bg-[color:var(--primary-color)] text-white py-2">
                                                        <h1 className="text-2xl font-medium text-center">365 Travel</h1>
                                                        <p className='mt-2 px-4 line-clamp-1 text-xs underline'>Hơn 200 tour trong và ngoài nước</p>
                                                        <h3 className="mt-1 px-4 line-clamp-1 flex gap-2 items-center text-xs"><span className='text-red-600'>Đánh giá:</span><span className="flex gap-1 text-yellow-200"><BiSolidStar /><BiSolidStar /><BiSolidStar /><BiSolidStar /></span></h3>
                                                </div>
                                        </div>
                                </div>
                        </div>



                </div >
        )
}
export default Agency