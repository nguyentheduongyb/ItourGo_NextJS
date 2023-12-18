'use client'
import Link from 'next/link';
import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';
import { BsCalendarWeek, BsFacebook, BsTwitter } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { FaHotel } from "react-icons/fa"
import { MdKeyboardArrowRight } from 'react-icons/md';
const BlogDetail = () => {
        return (
                <div className="container pt-12">

                        <div className="flex gap-8 mt-12">
                                <div className='w-2/3 flex flex-col'>
                                        <h1 className='text-2xl font-bold'>Cách thiết lập một VPS với DigitalOcean năm 2023</h1>
                                        <div className="flex gap-4 mt-3">
                                                <div className="h-12 w-12 bg-no-repeat bg-cover bg-center rounded-full" style={{ backgroundImage: 'url("https://www.websiteplanet.com/wp-content/uploads/2020/08/ryan-2.webp")' }}></div>
                                                <div className="flex-1">
                                                        <p className="font-medium mb-2">Ryan Jones</p>
                                                        <p className='text-sm text-gray-500'>Chuyên gia lưu trữ dữ liệu</p>
                                                </div>
                                        </div>
                                        <div className='mt-6 flex flex-col gap-4'>
                                                <p className=''>Việc thiết lập một máy chủ ảo với DigitalOcean trông có vẻ khá khó khăn, đặc biệt nếu bạn chưa từng sử dụng nhà cung cấp dịch vụ lưu trữ đám mây nào trước đây. Bạn không thể dựa vào hỗ trợ của DigitalOcean – các nhân viên rất lâu mới phản hồi và hiếm khi đưa ra câu trả lời hữu ích. Vấn đề càng tồi tệ hơn khi nhiều tài liệu trực tuyến của DigitalOcean dường như đã lỗi thời. Cả Dịch vụ khách hàng lẫn các hướng dẫn đều không có sẵn bằng tiếng Việt mà chỉ có tiếng Anh.</p>
                                                <p>Tuy vậy, việc thiết lập một VPS DigitalOcean không quá khó – và trên thực tế, phần lớn quy trình được tự động hóa cho bạn. Bằng cách làm theo một vài bước đơn giản, bạn có thể thiết lập và khởi chạy một website WordPress mới trong một hoặc hai giờ.</p>
                                                <p>Hướng dẫn này sẽ chỉ cho bạn cách tạo một “Droplet” (VPS) với DigitalOcean và cài đặt phần mềm cần thiết cho lưu trữ web. Tôi cũng sẽ giới thiệu cách cài đặt và cấu hình WordPress. Nó đủ đơn giản để ngay cả một người mới bắt đầu cũng hoàn toàn có thể làm theo. Vậy hãy bắt đầu nào!</p>
                                        </div>
                                </div>
                                <div className="flex-1">
                                        <div className='border rounded p-2 mb-12'>
                                                <h4 className='text-xl font-medium p-3'>Trong bài viết này</h4>
                                                <div className='flex flex-col gap-2'>
                                                        <Link className='p-2 bg-gray-400 rounded' href="">Bắt đầu với Digital marketing</Link>
                                                        <Link className='p-2 bg-gray-400 rounded' href="">Bắt đầu với Digital marketing</Link>
                                                        <Link className='p-2 bg-gray-400 rounded' href="">Bắt đầu với Digital marketing</Link>
                                                        <Link className='p-2 bg-gray-400 rounded' href="">Bắt đầu với Digital marketing</Link>
                                                </div>

                                        </div>
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

export default BlogDetail
