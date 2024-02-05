'use client'
import React from 'react'
import Link from 'next/link'
import { Breadcrumb } from 'flowbite-react';
import SearchResult from '~/components/Search/searchResults/SearchList'
import { MdKeyboardArrowRight } from 'react-icons/md';
import Filter from '~/components/filter/Filter';
const SearchPage = () => {
        return (
                <div className="container mt-2">
                        <Breadcrumb aria-label="Solid background breadcrumb example" className="my-3 px-1 py-3 dark:bg-gray-800 line-clamp-1">
                                <Breadcrumb.Item>
                                        <Link href="/"> Trang chủ</Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>Tour Hà Nội Số 1</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="mt-4 pb-4 border-b">
                                <h1 className='text-2xl font-bold'>Du lịch & Chuyến đi Châu Á 2024</h1>
                                <p className='text-sm mt-3 line-clamp-4'>Cho dù bạn muốn ngắm nhìn Tam giác vàng của Ấn Độ, thưởng thức món Pad Thái ngon nhất mà bạn từng nếm hay đánh dấu vào danh sách những việc phải làm tại Vạn Lý Trường Thành, một kỳ nghỉ ở châu Á sẽ mang đến vô số trải nghiệm khó có thể tìm thấy ở bất kỳ nơi nào khác trên thế giới. Cưỡi lạc đà trên sa mạc Gobi, leo lên đỉnh Everest hùng vĩ, thư giãn trên những bãi biển vàng của Bali và khám phá thủ đô Seoul đáng kinh ngạc của Hàn Quốc. Từ sự hòa nhập văn hóa đến những cơ hội phiêu lưu đi bộ đường dài không thể tuyệt vời hơn, một chuyến du lịch khắp châu Á sẽ không làm hài lòng ngay cả những nhà phê bình khó tính nhất.</p>
                        </div>
                        <div className="w-full flex  flex-col md:flex-row md:gap-10 mt-4">
                                {/* Content left*/}

                                <div className="md:w-1/4 flex flex-col gap-4">
                                        <Filter />
                                </div>
                                {/* Content right */}
                                <div className="flex-1">
                                        <p className='my-4'>Hơn 250 chuyến tham quan Tam giác vàng hay nhất ở Ấn Độ với 3.746 đánh giá</p>
                                        <SearchResult />
                                        <div className="flex justify-center mt-6">
                                                <button className="font-bold text-[color:var(--primary-color)] px-5 py-3 rounded-lg border border-[color:var(--primary-color)]">Xem thêm 500 khách sạn</button>
                                        </div>
                                </div>
                        </div>
                        <div className='rounded border mt-4'>
                                <h6 className='flex gap-3 px-4 py-1 bg-[#F9F9F9] items-center font-bold'><MdKeyboardArrowRight /> Khách sạn Đà Lạt theo hạng sao</h6>
                                <div className="bg-white gap-3 grid grid-cols-3 p-4">
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
