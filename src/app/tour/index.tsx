'use client'
import Link from 'next/link';
import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';
import { BsCalendarWeek } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { FaHotel } from "react-icons/fa"
import { MdKeyboardArrowRight, MdOutlinePayment } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';
import { AiOutlineGlobal } from 'react-icons/ai';
const Tour = () => {
        return (
                <div>
                        <div className="relative w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://preview.colorlib.com/theme/direngine/images/bg_1.jpg.webp")' }}>
                                <div className="container py-12 z-[20]">
                                        <div className="grid grid-cols-2 gap-12">
                                                <div className="">
                                                        <h4 className="mb-8 text-white text-5xl font-bold capitalize">Trải nghiệm kì nghỉ tuyệt vời</h4>
                                                        <h1 className="mb-8 text-[#D0E3F0] text-lg font-semibold capitalize">Combo khách sạn - vé máy bay - đưa đón sân bay giá tốt nhất</h1>

                                                        <form className='' action="">
                                                                <div className="w-full grid grid-cols-2 gap-8">
                                                                        <TextInput
                                                                                id="destination"
                                                                                placeholder="Điểm đến"
                                                                                required
                                                                                type="text"
                                                                                sizing="lg"
                                                                        />
                                                                        <Select
                                                                                id="countries"
                                                                                required
                                                                                sizing="lg"
                                                                        >
                                                                                <option>
                                                                                        Hà Nội
                                                                                </option>
                                                                                <option>
                                                                                        Thành phố Hồ Chí Minh
                                                                                </option>
                                                                                <option>
                                                                                        Nha Trang
                                                                                </option>
                                                                                <option>
                                                                                        Đà Nẵng
                                                                                </option>
                                                                        </Select>
                                                                </div>
                                                                <Link href="/search/search">
                                                                        <Button className="w-full mt-6" size="lg"><span className="flex items-center gap-2"><BsSearch />Tìm kiếm ngay</span></Button>
                                                                </Link>
                                                        </form>

                                                        {/* <div className="flex h-[52px] gap-4 mt-12">
                <button className="px-3 h-full flex gap-2 bg-white items-center rounded"><FaHotel /><span className="font-semibold">Khách sạn</span></button>
                <button className="px-3 h-full flex gap-2 bg-white items-center rounded"><FaHotel /><span className="font-semibold">Nhà hàng</span></button>
                <button className="px-3 h-full flex gap-2 bg-white items-center rounded"><FaHotel /><span className="font-semibold">Phương tiện</span></button>
                <button className="px-3 h-full flex gap-2 bg-white items-center rounded"><FaHotel /><span className="font-semibold">Mã giảm giá</span></button>
              </div> */}



                                                </div>

                                                <div className="flex items-center bg-[rgba(0,0,0,0.2)] rounded-xl p-4">
                                                        {/* <img className="w-full" src="https://htmldesigntemplates.com/html/travelin/images/travel.png" alt="" /> */}
                                                        <Link href="/hotel/khach-san-ha-noi">
                                                                <div className='text-white'>
                                                                        <p className='mb-2 text-lg'>Combo 3N2Đ</p>
                                                                        <h4 className="uppercase text-xl font-semibold mb-2">Amiana nha trang</h4>
                                                                        <p>Bay khứ hồi - Ăn sáng - Trái cây tươi mỗi ngày</p>
                                                                        <p>Miễn phí trẻ em - Phòng Delure Mountain View</p>
                                                                        <div className='flex items-center'>
                                                                                <span className='text-3xl font-bold text-[color:var(--primary-color)]'>3.999.000</span>
                                                                                <span>VNĐ/Khách</span>
                                                                                <button className="rounded-full bg-blue-900"><MdKeyboardArrowRight color="#fff" fontSize={40} /></button>
                                                                        </div>
                                                                </div>
                                                        </Link>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className='bg-gray-100'>
                                <div className="container py-6">
                                        <div className='flex grid grid-cols-3 gap-2'>
                                                <div className='flex gap-3 items-center bg-gray-200 p-2 rounded'>
                                                        <BiSupport size="36" />
                                                        <div>
                                                                <p className='mb-2 font-medium'>Tư vấn chuyên nghiệp</p>
                                                                <p className='text-sm text-gray-400'>Hỗ trợ nhiệt tình, chăm sóc chu đáo</p>
                                                        </div>
                                                </div>
                                                <div className='flex gap-3 items-center bg-gray-200 p-2 rounded'>
                                                        <AiOutlineGlobal size="36" />
                                                        <div>
                                                                <p className='mb-2 font-medium'>Trải nghiệm đa dạng</p>
                                                                <p className='text-sm text-gray-400'>Chọn tour phù hợp, giá cả hợp lý</p>
                                                        </div>
                                                </div>
                                                <div className='flex gap-3 items-center bg-gray-200 p-2 rounded'>
                                                        <MdOutlinePayment size="36" />
                                                        <div>
                                                                <p className='mb-2 font-medium'>Thanh toán an toàn</p>
                                                                <p className='text-sm text-gray-400'>Linh hoạt, rõ ràng, bảo mật</p>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='mt-4'>
                                                <h1 className="text-2xl font-medium mb-6 capitalize">Tour bạn đã xem gần đây</h1>
                                                <div className='flex grid grid-cols-3 gap-6'>
                                                        <Link href="/tour/tour-so-1" className='flex bg-white hover:bg-blue-100'>
                                                                <div className='h-28 w-28 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://cdn2.ivivu.com/2023/07/14/15/ivivu-cong-vien-naritasan-120x120.jpg")' }}></div>
                                                                <div className='flex-1 flex flex-col justify-between p-2'>
                                                                        <h6 className='text-blue-900'>Tour Nhật Bản 4N4Đ: Mùa Lá Đỏ Narita - Yamanashi - Tokyo (Visa Đơn Giản)</h6>
                                                                        <p className='text-right text-[color:var(--primary-color)] font-medium text-lg'>29.999.999 VNĐ</p>
                                                                </div>
                                                        </Link>
                                                        <Link href="/tour/tour-so-1" className='flex bg-white hover:bg-blue-100'>
                                                                <div className='h-28 w-28 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://cdn2.ivivu.com/2023/07/14/15/ivivu-cong-vien-naritasan-120x120.jpg")' }}></div>
                                                                <div className='flex-1 flex flex-col justify-between p-2'>
                                                                        <h6 className='text-blue-900'>Tour Nhật Bản 4N4Đ: Mùa Lá Đỏ Narita - Yamanashi - Tokyo (Visa Đơn Giản)</h6>
                                                                        <p className='text-right text-[color:var(--primary-color)] font-medium text-lg'>29.999.999 VNĐ</p>
                                                                </div>
                                                        </Link>
                                                        <Link href="/tour/tour-so-1" className='flex bg-white hover:bg-blue-100'>
                                                                <div className='h-28 w-28 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://cdn2.ivivu.com/2023/07/14/15/ivivu-cong-vien-naritasan-120x120.jpg")' }}></div>
                                                                <div className='flex-1 flex flex-col justify-between p-2'>
                                                                        <h6 className='text-blue-900'>Tour Nhật Bản 4N4Đ: Mùa Lá Đỏ Narita - Yamanashi - Tokyo (Visa Đơn Giản)</h6>
                                                                        <p className='text-right text-[color:var(--primary-color)] font-medium text-lg'>29.999.999 VNĐ</p>
                                                                </div>
                                                        </Link>
                                                        <Link href="/tour/tour-so-1" className='flex bg-white hover:bg-blue-100'>
                                                                <div className='h-28 w-28 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://cdn2.ivivu.com/2023/07/14/15/ivivu-cong-vien-naritasan-120x120.jpg")' }}></div>
                                                                <div className='flex-1 flex flex-col justify-between p-2'>
                                                                        <h6 className='text-blue-900'>Tour Nhật Bản 4N4Đ: Mùa Lá Đỏ Narita - Yamanashi - Tokyo (Visa Đơn Giản)</h6>
                                                                        <p className='text-right text-[color:var(--primary-color)] font-medium text-lg'>29.999.999 VNĐ</p>
                                                                </div>
                                                        </Link>
                                                        <Link href="/tour/tour-so-1" className='flex bg-white hover:bg-blue-100'>
                                                                <div className='h-28 w-28 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://cdn2.ivivu.com/2023/07/14/15/ivivu-cong-vien-naritasan-120x120.jpg")' }}></div>
                                                                <div className='flex-1 flex flex-col justify-between p-2'>
                                                                        <h6 className='text-blue-900'>Tour Nhật Bản 4N4Đ: Mùa Lá Đỏ Narita - Yamanashi - Tokyo (Visa Đơn Giản)</h6>
                                                                        <p className='text-right text-[color:var(--primary-color)] font-medium text-lg'>29.999.999 VNĐ</p>
                                                                </div>
                                                        </Link>
                                                        <Link href="/tour/tour-so-1" className='flex bg-white hover:bg-blue-100'>
                                                                <div className='h-28 w-28 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://cdn2.ivivu.com/2023/07/14/15/ivivu-cong-vien-naritasan-120x120.jpg")' }}></div>
                                                                <div className='flex-1 flex flex-col justify-between p-2'>
                                                                        <h6 className='text-blue-900'>Tour Nhật Bản 4N4Đ: Mùa Lá Đỏ Narita - Yamanashi - Tokyo (Visa Đơn Giản)</h6>
                                                                        <p className='text-right text-[color:var(--primary-color)] font-medium text-lg'>29.999.999 VNĐ</p>
                                                                </div>
                                                        </Link>
                                                </div>
                                        </div>

                                </div>
                        </div>

                        <div className="container py-12 flex flex-col gap-8">
                                <div>
                                        <div className="">
                                                <h1 className="text-3xl font-bold mb-6 capitalize">Điểm đến yêu thích trong nước</h1>
                                                <h3 className="text-gray-400 mb-8 capitalize">Lên rừng xuống biển. Trọn vẹn Việt Nam</h3>
                                        </div>
                                        <div className="flex grid grid-cols-3 gap-8 mt-12">
                                                <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                        <div className="relative">
                                                                <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" />
                                                                <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                                                                        {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
                                                                </div>
                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p>Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
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
                                                        <div className="relative">
                                                                <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" />
                                                                <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                                                                        {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
                                                                </div>
                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p>Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
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
                                                        <div className="relative">
                                                                <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" />
                                                                <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                                                                        {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
                                                                </div>
                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p>Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
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
                                                        <div className="relative">
                                                                <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" />
                                                                <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                                                                        {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
                                                                </div>
                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p>Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
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
                                                        <div className="relative">
                                                                <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" />
                                                                <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                                                                        {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
                                                                </div>
                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p>Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
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

                                <div>
                                        <div className="">
                                                <h1 className="text-3xl font-bold mb-6 capitalize">Tour thám hiểm</h1>
                                                <h3 className="text-gray-400 mb-8 capitalize">Thử Thách Bản Thân, Vượt Lên Chính Mình</h3>
                                        </div>
                                        <div className="flex grid grid-cols-3 gap-8 mt-12">
                                                <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                                                        <div className="relative">
                                                                <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" />
                                                                <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                                                                        {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
                                                                </div>
                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p>Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
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
                                                        <div className="relative">
                                                                <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" />
                                                                <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                                                                        {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
                                                                </div>
                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p>Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
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
                                                        <div className="relative">
                                                                <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" />
                                                                <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                                                                        {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
                                                                </div>
                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p>Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
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
                                                        <div className="relative">
                                                                <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" />
                                                                <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                                                                        {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
                                                                </div>
                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p>Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
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
                                                        <div className="relative">
                                                                <img className="w-full" src="https://media.vietravel.com/images/Content/ba-na-hills.jpg" alt="" />
                                                                <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                                                                        {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
                                                                </div>
                                                        </div>
                                                        <div className="">
                                                                <div className="p-4">
                                                                        <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                                                                                <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Đà Nẵng, Việt Nam</h3>
                                                                                <h4 className='text-3xl font-semibold'>Bà Nà Hills</h4>
                                                                                <p>Du khách có thể tham quan các ngôi chùa, thưởng ngoạn cảnh quan thiên nhiên tuyệt đẹp. Được ví von như một Châu Âu thu nhỏ</p>
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

                        {/* Địa điểm yêu thích nước ngoài */}
                        <div className="container pb-12">
                                <div className="">
                                        <h1 className="text-2xl text-[color:var(--primary-color)] font-bold mb-6 capitalize">Địa điểm yêu thích nước ngoài</h1>
                                        <h3 className="font-medium mb-8 capitalize">Bao la thế giới. Bốn bể là nhà</h3>
                                </div>
                                <div className="flex flex-col gap-4">
                                        <div className="flex gap-4">
                                                <div className="w-[28%]">
                                                        <Link href="/hotel/khach-san-ha-noi">
                                                                <div className="bg-no-repeat bg-center bg-cover w-full h-full rounded-lg relative" style={{ backgroundImage: 'url("https://i1-dulich.vnecdn.net/2022/05/09/amiana-resort-nha-trang-2087-1-9439-2178-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=1JSGnrxCVKlwjL89p_cJxw")' }}>
                                                                        <div className="absolute left-0 bottom-0 p-4 text-white">
                                                                                <p className="text-2xl font-bold">Phú Quốc</p>
                                                                                <p>200 khách sạn</p>
                                                                        </div>
                                                                </div>
                                                        </Link>
                                                </div>
                                                <div className="flex-1 grid grid-rows-2 gap-4">
                                                        <div>
                                                                <Link href="/hotel/khach-san-ha-noi">
                                                                        <div className="bg-no-repeat bg-center bg-cover w-full h-[200px] rounded-lg relative" style={{ backgroundImage: 'url("https://i1-dulich.vnecdn.net/2022/05/09/amiana-resort-nha-trang-2087-1-9439-2178-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=1JSGnrxCVKlwjL89p_cJxw")' }}>
                                                                                <div className="absolute left-0 bottom-0 p-4 text-white">
                                                                                        <p className="text-2xl font-bold">Phú Quốc</p>
                                                                                        <p>200 khách sạn</p>
                                                                                </div>

                                                                        </div>
                                                                </Link>
                                                        </div>
                                                        <div className='flex grid grid-cols-2 gap-4'>
                                                                <div>
                                                                        <Link href="">
                                                                                <div className="bg-no-repeat bg-center bg-cover w-full h-[200px] rounded-lg relative" style={{ backgroundImage: 'url("https://i1-dulich.vnecdn.net/2022/05/09/amiana-resort-nha-trang-2087-1-9439-2178-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=1JSGnrxCVKlwjL89p_cJxw")' }}>
                                                                                        <div className="absolute left-0 bottom-0 p-4 text-white">
                                                                                                <p className="text-2xl font-bold">Phú Quốc</p>
                                                                                                <p>200 khách sạn</p>
                                                                                        </div>

                                                                                </div>
                                                                        </Link>
                                                                </div>
                                                                <div>
                                                                        <Link href="">
                                                                                <div className="bg-no-repeat bg-center bg-cover w-full h-[200px] rounded-lg relative" style={{ backgroundImage: 'url("https://i1-dulich.vnecdn.net/2022/05/09/amiana-resort-nha-trang-2087-1-9439-2178-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=1JSGnrxCVKlwjL89p_cJxw")' }}>
                                                                                        <div className="absolute left-0 bottom-0 p-4 text-white">
                                                                                                <p className="text-2xl font-bold">Phú Quốc</p>
                                                                                                <p>200 khách sạn</p>
                                                                                        </div>

                                                                                </div>
                                                                        </Link>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                        </div>
                </div>
        )
}

export default Tour
