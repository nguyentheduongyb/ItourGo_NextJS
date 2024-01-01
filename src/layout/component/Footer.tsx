'use client'
import React from 'react'
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsTwitter, BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { GoClock } from 'react-icons/go';

const Footer = () => {
        return (
                <footer className="w-full bg-white mt-5 border-t border-t-[#A3B3BC]">
                        <div className="container block md:flex justify-between md:px-0 px-4 py-6 gap-12">
                                <div className="w-full md:w-3/5 text-[#A3B3BC]">
                                        {/* Về ItourGo */}
                                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12'>
                                                <div>
                                                        <p className="uppercase text-black">Về ItourGo</p>
                                                        <div className='flex flex-col gap-2 text-sm mt-2'>
                                                                <Link href="/about?tab=1">Chúng tôi</Link>
                                                                <Link href="/">ItourGo Blog</Link>
                                                                <Link href="/">Tư vấn miễn phí</Link>
                                                        </div>
                                                </div>
                                                <div>
                                                        <p className="uppercase text-black">Thông Tin Cần Biết</p>
                                                        <div className='flex flex-col gap-2 text-sm mt-2'>
                                                                <Link href="/about?tab=4">Điều kiện và điều khoản</Link>
                                                                <Link href="/aboutgit?tab=3">Chính sách bảo mật</Link>
                                                                <Link href="/about?tab=2">Câu hỏi thường gặp</Link>
                                                        </div>
                                                </div>
                                                <div>
                                                        <p className="uppercase text-black">Đối tượng liên kết</p>
                                                        <div className='flex flex-col gap-2 text-sm mt-2'>
                                                                <Link href="/">Vietnam Airlines</Link>
                                                                <Link href="/">VNExpress</Link>
                                                        </div>
                                                </div>
                                                <div>
                                                        <p className="uppercase text-black">Được chứng nhận</p>
                                                        <div className='flex flex-col gap-2 text-sm mt-2'>
                                                                <Link href="/"><img className='w-full' src="https://www.ivivu.com/du-lich/content/img/bocongthuong.png" alt="" /></Link>
                                                        </div>
                                                </div>
                                        </div>
                                        {/* Thương hiệu */}
                                        <div className='grid grid-cols-1 md:grid-cols-3 items-center mt-6 gap-4'>
                                                <div className='flex items-center gap-2'>
                                                        <div className='bg-no-repeat bg-center bg-cover h-[45px] w-[45px]' style={{ backgroundImage: 'url("/thuonghieu1.png")' }}></div>
                                                        <p className='flex-1'>Đại lý Du lịch Trực tuyến Hàng đầu Việt Nam</p>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                        <div className='bg-no-repeat bg-center bg-cover h-[45px] w-[45px]' style={{ backgroundImage: 'url("/thuonghieu2.png")' }}></div>
                                                        <p className='flex-1'>Đại lý Du lịch Trực tuyến Hàng đầu Việt Nam</p>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                        <div className='bg-no-repeat bg-center bg-cover h-[45px] w-[45px]' style={{ backgroundImage: 'url("/thuonghieu3.png")' }}></div>
                                                        <p className='flex-1'>Đại lý Du lịch Trực tuyến Hàng đầu Việt Nam</p>
                                                </div>
                                        </div>
                                        <p className="mt-6">Địa chỉ: Phòng 2414, Tòa C Vinaconex2, Kim Lũ, Kim Văn, Hoàng Mai, Hà Nội</p>
                                </div>
                                <div className="flex-1 mt-2 md:mt-0">
                                        <div>
                                                <p className="text-bold text-xl">Bạn cần trợ giúp? Bấm gọi ngay</p>
                                                <div className='flex gap-8'>
                                                        <p className="text-2xl text-orange-500 font-medium">1900 1234</p>
                                                        <span className="text-xs flex items-center">
                                                                <GoClock />
                                                                7h30
                                                                <BsArrowRight />
                                                                21h30
                                                        </span>
                                                </div>
                                                <p className='mt-6'>Tư vấn với PNG SOFT - Qua Messenger</p>
                                                <div className="flex items-center h-full mt-6">
                                                        <Link href="http://" className="px-4 h-3/5 flex items-center"><BsFacebook fontSize={18} /></Link>
                                                        <Link href="http://" className="px-4 h-3/5 flex items-center"><BsTwitter fontSize={18} /></Link>
                                                        <Link href="http://" className="px-4 h-3/5 flex items-center"><BsInstagram fontSize={18} /></Link>
                                                        <Link href="http://" className="px-4 h-3/5 flex items-center"><BsLinkedin fontSize={18} /></Link>
                                                </div>
                                        </div>

                                </div>

                        </div>

                </footer>
        )
}

export default Footer
