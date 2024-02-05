'use client'
import { Button, Checkbox, Label, Radio, Select, TextInput } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'
import { BsStar } from 'react-icons/bs'
import { HiLightBulb, HiOutlineInformationCircle, HiOutlineLightBulb } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import MethodPayment from '~/components/MethodPayment/MethodPayment'

const BookNow = () => {
        return (
                <div className="bg-[#F6F7F9] pb-8">
                        <div className="container py-6 flex justify-between">
                                <h1 className='text-3xl font-medium'>Escorted India Tour</h1>
                                <div className="flex gap-4">
                                        <button className='bg-white shadow rounded-full py-2 px-6 text-sm font-medium text-[var(--primary-color)]'>Hỗ Trợ</button>
                                        <button className='bg-white shadow rounded-full py-2 px-6 text-sm font-medium text-[var(--primary-color)]'>Chia Sẻ</button>
                                </div>
                        </div>
                        <div className='flex gap-6 container'>
                                <div className="flex-1 space-y-8">
                                        <div className='bg-white p-6 shadow rounded-lg'>
                                                <div>
                                                        <p className='font-medium text-xl'>Tổng quan về cuộc phiêu lưu của bạn</p>
                                                </div>
                                                <div className='rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.25)] flex mt-6'>
                                                        <div className='p-6 w-1/3'>
                                                                <p className='font-medium'>Wednesday, January 24th, 2024</p>
                                                                <p className='text-sm'>to Wednesday, February 7th, 2024</p>
                                                                <button className='text-xs text-[var(--primary-color)] font-bold mt-4'>Thay đổi lịch</button>
                                                        </div>
                                                        <div className='p-6 flex-1 border-l flex flex-col justify-between'>
                                                                <div className='flex gap-4 items-center'>
                                                                        <BsStar />
                                                                        <p className='text-sm'>Còn hơn 10 chỗ trống và chỗ của bạn được dành cho 10 phút tiếp theo</p>
                                                                </div>
                                                                <div className='flex gap-4 items-center'>
                                                                        <BsStar />
                                                                        <p className='text-sm'>Đặt ngay: Chỗ của bạn sẽ được bảo mật ngay lập tức.</p>
                                                                </div>
                                                                <div className='flex gap-4 items-center'>
                                                                        <BsStar />
                                                                        <p className='text-sm'>Giảm giá tháng 1 70%<Link className='ml-2 text-[var(--primry-color)]' href="">Xem chi tiết</Link></p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='bg-white p-6 shadow rounded-lg'>
                                                <div className='flex items-center gap-2'>
                                                        <p className='w-8 h-8 flex items-center justify-center rounded-lg bg-black text-white'>1</p>
                                                        <p className='font-medium text-xl'>Tổng quan về cuộc phiêu lưu của bạn</p>

                                                </div>
                                                <div className='flex justify-between w-full items-center mt-8'>
                                                        <p className='font-medium'>Số khách</p>
                                                        <div className='flex gap-4 items-center'>
                                                                <button className='shadow text-[#A0A3A4] text-2xl w-10 h-10 rounded-full'>-</button>
                                                                <p>1</p>
                                                                <button className='shadow text-[#A0A3A4] text-2xl w-10 h-10 rounded-full'>+</button>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='bg-white p-6 shadow rounded-lg'>
                                                <div className='flex items-center gap-2'>
                                                        <p className='w-8 h-8 flex items-center justify-center rounded-lg bg-black text-white'>2</p>
                                                        <p className='font-medium text-xl'>Chọn Chỗ Ở</p>
                                                </div>
                                                <p className='mt-6 font-medium'>Vui lòng xếp <span className='text-[var(--primary-color)]'>2 du khách</span>  vào một phòng.</p>
                                                <div className='rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.25)] mt-6 p-4 space-y-4'>
                                                        <div className='w-full flex justify-between items-center'>
                                                                <p className='flex items-center gap-2'><HiOutlineLightBulb size="26" color="#2876F3" /> Giá tốt nhất</p>
                                                                <button><IoMdClose size="26" /></button>
                                                        </div>
                                                        <div className='bg-[#F1F2F3] rounded p-2'>
                                                                <p className='font-medium'>Double or Twin Room</p>
                                                                <p>2 Khách</p>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                                <p className='flex space-x-2'><span>Total accommodation price:</span><span className='line-through font-medium'>$6,309</span><span className='font-medium text-[#378367]'>$3,154</span></p>
                                                                <button className='py-2 px-4 bg-[var(--primary-color)] text-white font-bold rounded-full'>Áp dụng</button>
                                                        </div>
                                                </div>
                                                <div className='mt-8'>
                                                        <div className='border-y py-4 flex gap-4'>
                                                                <div className='w-1/2 space-y-4'>
                                                                        <p className='space-x-4'>
                                                                                <span className='font-bold'>Double or Twin Room</span>
                                                                                <span className='text-xs bg-[#F1F2F3] text-[#727779] py-1 px-2 rounded-full'>Chung</span>
                                                                        </p>
                                                                        <p className='text-sm'>Mỗi người ở phòng 2 người. Lý tưởng cho những người du lịch một mình sẽ được kết hợp với một vị khách cùng giới tính.</p>
                                                                </div>
                                                                <div className='w-1/3 flex flex-col'>
                                                                        <span className='line-through text-sm'>$3,154</span>
                                                                        <span className='font-bold text text-[#378367]'>$1,577</span>
                                                                        <span className='text-xs'>mỗi khách</span>
                                                                </div>
                                                                <div className="flex-1">
                                                                        <select className="rounded-md border-[#BBC0C2]">
                                                                                <option value="">0 Khách</option>
                                                                                <option value="">0 Khách</option>
                                                                                <option value="">0 Khách</option>
                                                                        </select>
                                                                </div>
                                                        </div>
                                                        <div className='border-y py-4 flex gap-4'>
                                                                <div className='w-1/2 space-y-4'>
                                                                        <p className='space-x-4'>
                                                                                <span className='font-bold'>Double Room</span>
                                                                                <span className='text-xs bg-[#F1F2F3] text-[#727779] py-1 px-2 rounded-full'>Chung</span>
                                                                        </p>
                                                                        <p className='text-sm'>Mỗi người ở phòng riêng dành cho 2 người. Nếu bạn đặt vé cùng nhau, bạn sẽ được ghép đôi với đối tác du lịch của mình. Khách du lịch một mình được kết hợp với một khách cùng giới tính.</p>
                                                                </div>
                                                                <div className='w-1/3 flex flex-col'>
                                                                        <span className='line-through text-sm'>$3,154</span>
                                                                        <span className='font-bold text text-[#378367]'>$1,577</span>
                                                                        <span className='text-xs'>mỗi khách</span>
                                                                </div>
                                                                <div className="flex-1">
                                                                        <select className="rounded-md border-[#BBC0C2]">
                                                                                <option value="">0 Khách</option>
                                                                                <option value="">0 Khách</option>
                                                                                <option value="">0 Khách</option>
                                                                        </select>
                                                                </div>
                                                        </div>
                                                        <div className='border-y py-4 flex gap-4'>
                                                                <div className='w-1/2 space-y-4'>
                                                                        <p className='space-x-4'>
                                                                                <span className='font-bold'>Single Room</span>
                                                                                <span className='text-xs bg-[#E6F4FD] py-1 px-2 rounded-full text-[#378367]'>Riêng tư</span>
                                                                        </p>
                                                                        <p className='text-sm'>Mỗi người ở phòng 2 người. Lý tưởng cho những người du lịch một mình sẽ được kết hợp với một vị khách cùng giới tính.</p>
                                                                </div>
                                                                <div className='w-1/3 flex flex-col'>
                                                                        <span className='line-through text-sm'>$3,154</span>
                                                                        <span className='font-bold text text-[#378367]'>$1,577</span>
                                                                        <span className='text-xs'>mỗi khách</span>
                                                                </div>
                                                                <div className="flex-1">
                                                                        <select className="rounded-md border-[#BBC0C2]">
                                                                                <option value="">0 Khách</option>
                                                                                <option value="">0 Khách</option>
                                                                                <option value="">0 Khách</option>
                                                                        </select>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='bg-white p-6 shadow rounded-lg'>
                                                <div className='flex items-center gap-2'>
                                                        <p className='w-8 h-8 flex items-center justify-center rounded-lg bg-black text-white'>3</p>
                                                        <p className='font-medium text-xl'>Thông tin chi tiết khách du lịch</p>
                                                </div>
                                                <div className='bg-[#EFF1FD] flex mt-6 p-3 rounded space-x-2 text-sm'>
                                                        <span className='font-bold'>Xin lưu ý:</span>
                                                        <span>Thông tin chi tiết của khách du lịch phải khớp với thông tin trên hộ chiếu</span>
                                                </div>
                                                <div className='mt-6 space-y-4'>
                                                        <div className='space-y-3'>
                                                                <p className='flex flex-col space-y-1'>
                                                                        <span className='font-bold'>Khách du lịch chính</span>
                                                                        <span>Khách du lịch này sẽ đóng vai trò là người liên hệ để đặt chỗ.</span>
                                                                </p>
                                                                <form className='w-3/5 space-y-4'>
                                                                        <div>
                                                                                <Label htmlFor="first-name" value="Họ" />
                                                                                <TextInput id="first-name" type="text" required shadow />
                                                                        </div>
                                                                        <div>
                                                                                <Label htmlFor="last-name" value="Tên" />
                                                                                <TextInput id="last-name" type="text" required shadow />
                                                                        </div>
                                                                        <div>
                                                                                <Label htmlFor="email" value="Email" />
                                                                                <TextInput id="email" type="email" required shadow />
                                                                        </div>
                                                                        <div>
                                                                                <Label htmlFor="email" value="Số điện thoại" />
                                                                                <TextInput id="email" type="number" placeholder="e.g. +84 12345678" required shadow />
                                                                        </div>
                                                                        <div>
                                                                                <Label value="Ngày sinh" />
                                                                        </div>
                                                                        <div className="flex gap-4">
                                                                                <div className="max-w-md">
                                                                                        <Select id="day" required>
                                                                                                <option>Ngày</option>
                                                                                                <option>Canada</option>
                                                                                                <option>France</option>
                                                                                                <option>Germany</option>
                                                                                        </Select>
                                                                                </div>
                                                                                <div className="max-w-md">
                                                                                        <Select id="month" required>
                                                                                                <option>Tháng</option>
                                                                                                <option>Canada</option>
                                                                                                <option>France</option>
                                                                                                <option>Germany</option>
                                                                                        </Select>
                                                                                </div>
                                                                                <div className="max-w-md">
                                                                                        <Select id="year" required>
                                                                                                <option>Năm</option>
                                                                                                <option>Canada</option>
                                                                                                <option>France</option>
                                                                                                <option>Germany</option>
                                                                                        </Select>
                                                                                </div>
                                                                        </div>
                                                                        <div className='flex gap-4'>
                                                                                <Label value="Ngày sinh" />
                                                                                <div className="flex items-center gap-2">
                                                                                        <Radio id="sex" name="sex" defaultChecked value="male" />
                                                                                        <Label htmlFor="male">Nam</Label>
                                                                                </div>
                                                                                <div className="flex items-center gap-2">
                                                                                        <Radio id="sex" name="sex" value="female" />
                                                                                        <Label htmlFor="female">Nữ</Label>
                                                                                </div>
                                                                        </div>
                                                                        <div className="max-w-md">
                                                                                <Select id="nationality" required>
                                                                                        <option>Chọn quốc gia của bạn</option>
                                                                                        <option>Canada</option>
                                                                                        <option>France</option>
                                                                                        <option>Germany</option>
                                                                                </Select>
                                                                        </div>
                                                                </form>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className='bg-white p-6 shadow rounded-lg'>
                                                <div className="flex justify-between">
                                                        <div className="flex flex-col gap-3">
                                                                <span className="font-medium">Có một câu hỏi? Hãy xem phần Hỏi & Đáp của chúng tôi</span>
                                                                <span className="text-sm">Hoặc liên hệ với các chuyên gia du lịch từng đoạt giải thưởng của chúng tôi.</span>
                                                        </div>
                                                        <button className='py-1 px-4 rounded-full bg-[#CDE9FC] text-[#177FA4] font-bold'>Xem Câu Hỏi & Trả Lời</button>
                                                </div>
                                        </div>


                                        <div className='bg-white p-6 shadow rounded-lg'>
                                                <div className='flex items-center gap-2'>
                                                        <p className='w-8 h-8 flex items-center justify-center rounded-lg bg-black text-white'>4</p>
                                                        <p className='font-medium text-xl'>Thêm phương thức thanh toán</p>
                                                </div>

                                                <div className="space-y-4 mt-8">
                                                        <div className='bg-[#EFF1FD] flex mt-6 p-3 rounded space-x-2 text-sm'>
                                                                <span>Đây là khoản thanh toán an toàn và được mã hóa SSL. Các thông tin thẻ tín dụng của bạn là an toàn.</span>
                                                        </div>
                                                        <div>
                                                                <p>Chọn phương thức thanh toán của bạn:</p>
                                                                <MethodPayment />
                                                        </div>
                                                </div>

                                                <div className="mt-16 space-y-4">
                                                        <div className="flex items-center gap-2">
                                                                <Checkbox id="accept" defaultChecked />
                                                                <Label htmlFor="accept" className="flex">
                                                                        Tôi đồng ý với&nbsp;
                                                                        <a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                                                                Điều kiện và Điều khoản của ItourGo
                                                                        </a>
                                                                </Label>
                                                        </div>
                                                        <Button className='w-full rounded-full py-1' type="submit"><span className="text-lg">Đặt 2 chỗ</span></Button>
                                                </div>
                                        </div>
                                </div>
                                <div className="w-1/3 space-y-8">
                                        <div className='bg-white p-6 shadow rounded-lg'>
                                                <div>
                                                        <p className='font-medium text-xl'>Tổng quan về cuộc phiêu lưu của bạn</p>
                                                </div>
                                                <div className='space-y-4 mt-6'>
                                                        <div className='space-y-2 text-sm'>
                                                                <p className='font-medium'>Escorted India Tour</p>
                                                                <span className='text-[var(--secondary-color)]'>15 days</span>
                                                        </div>
                                                        <div className='space-y-2 text-sm'>
                                                                <p className='font-medium'>Starts in New Delhi, India</p>
                                                                <span className='text-[var(--secondary-color)]'>Wednesday, 24 Jan 2024</span>
                                                        </div>
                                                        <div className='space-y-2 text-sm'>
                                                                <p className='font-medium'>Ends in New Delhi, India</p>
                                                                <span className='text-[var(--secondary-color)]'>Wednesday, 7 Feb 2024</span>
                                                        </div>
                                                        <div className='space-y-2 text-sm'>
                                                                <p className='font-medium'>Tour Type</p>
                                                                <span className='text-[var(--secondary-color)]'>Group</span>
                                                        </div>
                                                        <div className='space-y-2 text-sm'>
                                                                <p className='font-medium'>Operated in</p>
                                                                <span className='text-[var(--secondary-color)]'>English, German, Italian, Portuguese, French, Spanish, Dutch, Russian</span>
                                                        </div>
                                                        <div className='space-y-2 text-sm'>
                                                                <p className='font-medium'>Whats included</p>
                                                                <span className='text-[var(--secondary-color)]'>Accommodation, Guide, Meals, Transport</span>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='bg-white p-6 shadow rounded-lg'>
                                                <p className='font-medium text-xl'>Phát giá</p>
                                                {/* <div className='p-6 bg-[#EFF1FD] flex gap-4 mt-4 rounded-lg'>
                                                        <HiOutlineInformationCircle color="#2876F3" size="28" />
                                                        <p className='flex-1'>Chọn số lượng khách du lịch và chỉ định chỗ ở để hiển thị giá.</p>
                                                </div> */}
                                                <div className='mt-8 space-y-6'>
                                                        <div className='flex justify-between gap-4 border-b-4 pb-4'>
                                                                <div className='w-2/3 flex flex-col gap-2'>
                                                                        <span>Double or Twin Room</span>
                                                                        <span className='text-[var(--secondary-color)] text-sm'>1 Traveller x $3,169.95</span>
                                                                </div>
                                                                <span>$3,169.95</span>
                                                        </div>
                                                        <div className='w-full flex justify-between items-center'>
                                                                <span className='font-bold flex-1'>Tổng số tiền phải trả</span>
                                                                <span className='font-bold text-xl'>US$3,169.95</span>
                                                        </div>
                                                        <div className='p-3 bg-[#F1F2F3] rounded-lg'>
                                                                <div className='w-full flex justify-between items-center'>
                                                                        <span className='font-bold flex-1'>Hạn chót hôm nay</span>
                                                                        <span className='font-bold'>US$3,169.95</span>
                                                                </div>
                                                                <div className='w-full flex justify-between items-center'>
                                                                        <span className='flex-1'>Hạn chót on 9 Mar, 2024</span>
                                                                        <span className=''>$2,377.46</span>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>

                                </div>
                        </div>
                </div>
        )
}

export default BookNow
