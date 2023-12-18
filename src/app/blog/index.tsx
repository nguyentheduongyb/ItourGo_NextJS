'use client'
import Link from 'next/link';
import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';
import { BsCalendarWeek, BsFacebook, BsTwitter } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { FaHotel } from "react-icons/fa"
import { MdKeyboardArrowRight } from 'react-icons/md';
const Blog = () => {
        return (
                <div className="container pt-12">
                        <h1 className='text-3xl font-bold'>Tin tức & hướng dẫn từ các chuyên gia của chúng tôi</h1>
                        <div className="flex gap-8 mt-12">
                                <div className='w-2/3 flex flex-col gap-8'>
                                        <Link href="/blog/bai-viet-so-1" className='w-full border rounded-lg overflow-hidden'>
                                                <div className='p-4'>
                                                        <h3 className='mb-4'>Các chương trình du lịch hằng tháng của chúng tôi </h3>
                                                        <p className='mb-4'>Tại bất kì thời điểm nào chúng tôi cũng sẽ đều có các dịch vụ cung cấp cho khách hàng</p>
                                                </div>
                                                <div className='w-full pt-[52%] bg-no-repeat bg-cover bg-center' style={{ backgroundImage: 'url("https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2023/06/How-to-Design-a-Website-850x446.webp")' }}></div>
                                        </Link>
                                        <Link href="/blog/bai-viet-so-1" className='w-full border rounded-lg overflow-hidden'>
                                                <div className='p-4'>
                                                        <h3 className='mb-4'>Các chương trình du lịch hằng tháng của chúng tôi </h3>
                                                        <p className='mb-4'>Tại bất kì thời điểm nào chúng tôi cũng sẽ đều có các dịch vụ cung cấp cho khách hàng</p>
                                                </div>
                                                <div className='w-full pt-[52%] bg-no-repeat bg-cover bg-center' style={{ backgroundImage: 'url("https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2023/06/How-to-Design-a-Website-850x446.webp")' }}></div>
                                        </Link>
                                        <Link href="/blog/bai-viet-so-1" className='w-full border rounded-lg overflow-hidden'>
                                                <div className='p-4'>
                                                        <h3 className='mb-4'>Các chương trình du lịch hằng tháng của chúng tôi </h3>
                                                        <p className='mb-4'>Tại bất kì thời điểm nào chúng tôi cũng sẽ đều có các dịch vụ cung cấp cho khách hàng</p>
                                                </div>
                                                <div className='w-full pt-[52%] bg-no-repeat bg-cover bg-center' style={{ backgroundImage: 'url("https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2023/06/How-to-Design-a-Website-850x446.webp")' }}></div>
                                        </Link>
                                        <Link href="/blog/bai-viet-so-1" className='w-full border rounded-lg overflow-hidden'>
                                                <div className='p-4'>
                                                        <h3 className='mb-4'>Các chương trình du lịch hằng tháng của chúng tôi </h3>
                                                        <p className='mb-4'>Tại bất kì thời điểm nào chúng tôi cũng sẽ đều có các dịch vụ cung cấp cho khách hàng</p>
                                                </div>
                                                <div className='w-full pt-[52%] bg-no-repeat bg-cover bg-center' style={{ backgroundImage: 'url("https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2023/06/How-to-Design-a-Website-850x446.webp")' }}></div>
                                        </Link>
                                </div>
                                <div className="flex-1">
                                        <div className='border rounded p-2 mb-12'>
                                                <h4 className='text-xl font-medium p-3'>Bài viết mới nhất</h4>
                                                <div className='mt-6 flex flex-col gap-8'>
                                                        <Link href="" className='border-t-2 p-3 pb-0 flex gap-4'>
                                                                <div className='w-12 h-12 rounded-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/08/Emma-Ayres-150x150.webp")' }}></div>
                                                                <div className='flex-1'>
                                                                        <h6 className='line-clamp-2 text-medium text-red-500 mb-3'>Tại bất kì thời điểm nào chúng tôi cũng sẽ đều có các dịch vụ cung cấp cho khách hàng</h6>
                                                                        <p className='text-gray-400'>Emily Ayres</p>
                                                                </div>
                                                        </Link>
                                                        <Link href="" className='border-t-2 p-3 pb-0 flex gap-4'>
                                                                <div className='w-12 h-12 rounded-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/08/Emma-Ayres-150x150.webp")' }}></div>
                                                                <div className='flex-1'>
                                                                        <h6 className='line-clamp-2 text-medium text-red-500 mb-3'>Tại bất kì thời điểm nào chúng tôi cũng sẽ đều có các dịch vụ cung cấp cho khách hàng</h6>
                                                                        <p className='text-gray-400'>Emily Ayres</p>
                                                                </div>
                                                        </Link>
                                                        <Link href="" className='border-t-2 p-3 pb-0 flex gap-4'>
                                                                <div className='w-12 h-12 rounded-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/08/Emma-Ayres-150x150.webp")' }}></div>
                                                                <div className='flex-1'>
                                                                        <h6 className='line-clamp-2 text-medium text-red-500 mb-3'>Tại bất kì thời điểm nào chúng tôi cũng sẽ đều có các dịch vụ cung cấp cho khách hàng</h6>
                                                                        <p className='text-gray-400'>Emily Ayres</p>
                                                                </div>
                                                        </Link>
                                                        <Link href="" className='border-t-2 p-3 pb-0 flex gap-4'>
                                                                <div className='w-12 h-12 rounded-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/08/Emma-Ayres-150x150.webp")' }}></div>
                                                                <div className='flex-1'>
                                                                        <h6 className='line-clamp-2 text-medium text-red-500 mb-3'>Tại bất kì thời điểm nào chúng tôi cũng sẽ đều có các dịch vụ cung cấp cho khách hàng</h6>
                                                                        <p className='text-gray-400'>Emily Ayres</p>
                                                                </div>
                                                        </Link>
                                                        <Link href="" className='border-t-2 p-3 pb-0 flex gap-4'>
                                                                <div className='w-12 h-12 rounded-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/08/Emma-Ayres-150x150.webp")' }}></div>
                                                                <div className='flex-1'>
                                                                        <h6 className='line-clamp-2 text-medium text-red-500 mb-3'>Tại bất kì thời điểm nào chúng tôi cũng sẽ đều có các dịch vụ cung cấp cho khách hàng</h6>
                                                                        <p className='text-gray-400'>Emily Ayres</p>
                                                                </div>
                                                        </Link>
                                                </div>

                                        </div>
                                        <div className='full border mx-auto rounded p-2'>
                                                <h6 className='p-4 border-b-2 text-2xl'>Theo dõi chúng tôi</h6>
                                                <div className='p-4'>
                                                        <div className='flex gap-5 text-2xl mb-4'>
                                                                <Link href=""><BsFacebook /></Link>
                                                                <Link href=""><BsTwitter /></Link>
                                                        </div>
                                                        <p className='text-xs'>Chúng tôi sẽ luôn cập nhật các kênh mạng xã hội của mình … hãy theo dõi để xem các tin tức mới nhất!</p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Blog
