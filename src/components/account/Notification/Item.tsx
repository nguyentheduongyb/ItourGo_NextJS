import { Badge } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'
import { BsQuestionCircle, BsShop } from 'react-icons/bs'

const Item = () => {
        return (
                <div className="border-t-2">
                        <div className="p-5 bg-white text-black border-b">
                                <div className="flex justify-between border-b pb-3">
                                        <div className="flex items-center gap-4">
                                                <Badge color="success">Đã thanh toán</Badge>
                                                <div className="flex gap-2"><Link href="/agency/png-agency" className="border text-xs rounded px-2 py-1 flex items-center gap-2"><BsShop />PNG Agency</Link></div>
                                        </div>
                                        <div className="flex gap-2 items-center text-sm"><span>Chuyến đi của bạn sẽ được bắt đầu vào <i className='font-medium'>8:00 ngày 1/1/2024</i></span><BsQuestionCircle /><span>|</span><Badge color="warning">Sắp khởi hành</Badge></div>
                                </div>
                                <div className="py-3 flex gap-4">
                                        <div className="border w-[100px] h-[100px] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url('https://cdn.tourradar.com/s3/content-pages/391/120x120/TzJbhr.jpg')" }} />
                                        <div className="w-full flex flex-1 gap-4 items-center justify-between">
                                                <div className='flex flex-col h-full justify-between w-[60%]'>
                                                        <span className="font-bold">South Korea One Life Adventures - 10 Day Tour</span>
                                                        <p className="text-sm">Điểm đến: <span className='font-medium'>Seoul, Geumsan</span></p>
                                                        <p className="text-sm">Loại Tour: <span className='font-medium'>Daily</span></p>
                                                        <p className="text-sm">Thời gian: <span className='font-medium'>3 ngày 2 đêm</span></p>
                                                </div>
                                                <div className='flex-1'>
                                                        <div className='flex w-full justify-between'>
                                                                <div className='flex flex-col text-center space-y-2'>
                                                                        <span className='font-bold'>Số lượng khách</span>
                                                                        <span className='text-2xl font-bold'>10</span>
                                                                </div>
                                                                <i className='w-[1px] h-46 bg-[#F1F2F3]'></i>
                                                                <div className='flex flex-col text-center space-y-2'>
                                                                        <span className='font-bold'>Số lượng phòng</span>
                                                                        <span className='text-2xl font-bold'>1</span>
                                                                </div>
                                                        </div>
                                                        <div className='text-center w-full mt-6'>
                                                                <Link className='text-sm text-cyan-600' href="">Xem chi tiết </Link>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="p-5 bg-white text-black">
                                <div className="flex justify-end pb-3">
                                        <div className="flex gap-2 items-center"><h2>Thành tiền:</h2><span className="text-sm text-[var(--text-primary)]">đ</span><span className="text-[var(--text-primary)] font-bold text-xl">22.000.000</span></div>
                                </div>
                                <div className="flex justify-between items-center">
                                        <div>
                                                <span className='text-sm'>Đánh giá sản phẩm trước<u className="text-[var(--text-primary)] mx-2 cursor-pointer" >04-07-2023</u>Đánh giá ngay và nhận 200 Xu</span>
                                        </div>
                                        <div className="flex gap-4">
                                                <Link href="">
                                                        <button className="h-[38px] px-6 rounded-[4px] text-white bg-[var(--text-primary)]">Đánh giá</button>
                                                </Link>
                                                <Link href="">
                                                        <button className="h-[38px] px-6 rounded-[4px] border">Liên hệ nhà cung cấp</button>
                                                </Link>
                                                <Link href="">
                                                        <button className="h-[38px] px-6 rounded-[4px] border">Mua lại</button>
                                                </Link>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Item
