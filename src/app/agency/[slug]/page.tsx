'use client'
import { Carousel } from 'flowbite-react'
import { useState } from 'react'
import { BsBox, BsCalendar2Check, BsChat, BsPersonHeart, BsPlus, BsSearch, BsShop, BsStar } from "react-icons/bs"
import { FaStar } from 'react-icons/fa'
import Link from 'next/link'
const Agency = () => {

        const [tab, setTab] = useState(1)

        const handleChangeTab = (e: any) => {
                setTab(e.currentTarget.getAttribute('id'))
        }
        return (
                <div className="pb-6 space-y-4 bg-[#F5F5FA]">
                        <section className="container">
                                <div className="">
                                        <div className="w-full bg-no-repeat bg-center relative bg-cover pt-[12%]" style={{ backgroundImage: 'url("https://salt.tikicdn.com/ts/sellercenterFE/2d/24/dc/8b6b6c4ef997c6ad31f5ab7bed44e850.png")' }}>
                                                <div className="absolute w-full top-0 left-0 pt-6 pb-2 flex flex-col justify-between h-full">
                                                        <div className='flex gap-4 items-center px-8'>
                                                                <div className='bg-no-repeat bg-cover bg-center h-16 w-16 rounded-full' style={{ backgroundImage: 'url("https://media.vietravel.com/images/Content/ba-na-hills.jpg")' }}></div>
                                                                <div className='flex gap-4 items-center'>
                                                                        <div className='space-y-0.5'>
                                                                                <p className='text-white'>Agency number 1</p>
                                                                                <img className='w-16' src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png" alt="" />
                                                                                <div className='flex items-center text-[#DDDD] text-sm'>
                                                                                        <p className='space-x-1 flex items-center'>
                                                                                                <span>4.7</span>
                                                                                                <span>/</span>
                                                                                                <span>5</span>
                                                                                        </p>
                                                                                        <span className='mx-2'>|</span>
                                                                                        <p className='space-x-1'>
                                                                                                <span>Người theo dõi:</span>
                                                                                                <span>200k+</span>
                                                                                        </p>
                                                                                </div>
                                                                        </div>
                                                                        <i className='w-[1px] h-6 bg-[#ddd]'></i>
                                                                        <button className='bg-[var(--primary-color)] px-4 py-1 text-sm rounded text-white flex items-center gap-1'><BsPlus size="24" />Theo Dõi</button>
                                                                </div>
                                                        </div>
                                                        <div className='flex justify-between px-8'>
                                                                <ul className='flex capitalize text-sm text-white items-center'>
                                                                        <li className='cursor-pointer px-6 py-1'>
                                                                                Tất cả sản phẩm
                                                                        </li>
                                                                        <li className='cursor-pointer px-6 py-1'>
                                                                                Du lịch mùa này
                                                                        </li>
                                                                        <li className='cursor-pointer px-6 py-1'>
                                                                                Giá tốt hôm nay
                                                                        </li>
                                                                        <li className='cursor-pointer px-6 py-1'>
                                                                                Hồ sơ cửa hàng
                                                                        </li>
                                                                </ul>
                                                                <div className='flex items-center bg-white pl-4 rounded overflow-hidden h-8'>
                                                                        <BsSearch size="16" color="#777" />
                                                                        <input placeholder="Tìm kiếm các sản phẩm khác" className='text-xs w-60 h-full border-none  border-l border-r focus-input-none' type="text" />
                                                                </div>
                                                        </div>
                                                </div>

                                        </div>
                                </div>

                        </section>

                        <section className="container bg-white rounded p-4">
                                <div className='grid grid-cols-2'>
                                        <div className='px-3 flex items-center border-r'>
                                                <div className='space-y-8 text-center w-[49%]'>
                                                        <p>Tỉ lệ hủy</p>
                                                        <p className='text-4xl text-green-500'>0%</p>
                                                </div>
                                                <span className='w-[1px] h-[40%] bg-[#dddd]'></span>
                                                <div className='space-y-8 text-center w-[49%]'>
                                                        <p>Tỉ lệ hủy</p>
                                                        <p className='text-4xl text-green-500'>0%</p>
                                                </div>
                                        </div>
                                        <div className='ml-4 px-2 space-y-6 text-sm'>
                                                <div className='flex items-center'>
                                                        <p className='w-52 flex gap-1 text-sm text-[#919199] items-center'>
                                                                <BsCalendar2Check color="#919199" />
                                                                <span>Thành viên từ năm</span>
                                                        </p>
                                                        <p className='flex-1 flex items-center'>2017</p>
                                                </div>
                                                <div className='flex items-center'>
                                                        <p className='w-52 flex gap-1 text-sm text-[#919199] items-center'>
                                                                <BsBox color="#919199" />
                                                                <span>Sản phẩm</span>
                                                        </p>
                                                        <p className='flex-1 flex items-center'>2000+</p>
                                                </div>
                                                <div className='flex items-center'>
                                                        <p className='w-52 flex gap-1 text-sm text-[#919199] items-center'>
                                                                <BsShop color="#919199" />
                                                                <span>Mô tả cửa hàng</span>
                                                        </p>
                                                        <p className='flex-1 flex items-center'>Cung cấp dịch vụ tour tốt nhất Việt Nam</p>
                                                </div>
                                                <div className='flex items-center'>
                                                        <p className='w-52 flex gap-1 text-sm text-[#919199] items-center'>
                                                                <BsStar color="#919199" />
                                                                <span>Đánh giá</span>
                                                        </p>
                                                        <p className='flex-1 items-center flex'>4.75 / 5 <FaStar color="yellow" /></p>
                                                </div>
                                                <div className='flex items-center'>
                                                        <p className='w-52 flex gap-1 text-sm text-[#919199] items-center'>
                                                                <BsPersonHeart color="#919199" />
                                                                <span>Người theo dõi</span>
                                                        </p>
                                                        <p className='flex-1 flex items-center'>497.5k +</p>
                                                </div>
                                                <div className='flex items-center'>
                                                        <p className='w-52 flex gap-1 text-sm text-[#919199] items-center'>
                                                                <BsChat color="#919199" />
                                                                <span>Phản hồi Chat</span>
                                                        </p>
                                                        <p className='flex-1 flex items-center'>Chưa có</p>
                                                </div>
                                        </div>
                                </div>
                        </section>

                        <section className='container bg-white rounded p-4'>
                                <div className='flex items-center gap-6'>
                                        <div className="flex items-center">
                                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg" alt="flash deal" />
                                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg" alt="flash deal" className="FlashSaleWidget__Flash-sc-zhpnww-1 fRCsBO" />
                                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg" alt="flash deal" />
                                        </div>
                                        <div className='space-x-1'>
                                                <span className='px-1 leading-[1.6] rounded text-white bg-[#FF424E]'>00</span>
                                                <span className='text-[#787A92]'>:</span>
                                                <span className='px-1 leading-[1.6] rounded text-white bg-[#FF424E]'>00</span>
                                                <span className='text-[#787A92]'>:</span>
                                                <span className='px-1 leading-[1.6] rounded text-white bg-[#FF424E]'>00</span>
                                        </div>
                                </div>
                                <div className='mt-4 grid grid-cols-5 gap-4'>
                                        <div className='w-full hover:shadow-lg'>
                                                <Carousel slide={false} className='w-full h-60'>
                                                        <div className='pt-[120%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/tour/1500x800/156071_5dfaf031c8cc7.jpg")' }}></div>
                                                        <div className='pt-[120%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/tour/1500x800/156071_5dfaf031afd34.jpg")' }}></div>
                                                        <div className='pt-[120%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/tour/645x430/156071_5dfaf05de3440.jpg")' }}></div>
                                                </Carousel>
                                                <div className="p-2 space-y-1">
                                                        <Link href="" className='font-bold line-clamp-2'>Amazon Jungle - 4 Days</Link>
                                                        <p className='text-xs'><span>Quốc Gia: </span><span className="text-red-500">Brazil</span></p>
                                                        <p className='text-sm flex items-center font-medium'><span>4.6</span><FaStar /></p>
                                                        <div className='text-red-400 space-x-4 flex items-center justify-between'>
                                                                <p><span>1.500.000</span><span className='text-red-500'>đ</span></p>
                                                                <span className='border rounded border-red-400 text-xs p-1 font-bold'>-32%</span>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='w-full hover:shadow-lg'>
                                                <Carousel slide={false} className='w-full h-60'>
                                                        <div className='pt-[120%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/tour/645x430/232242_62ceb031b7d55.jpg")' }}></div>
                                                        <div className='pt-[120%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/tour/1500x800/156071_5dfaf031afd34.jpg")' }}></div>
                                                        <div className='pt-[120%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/tour/645x430/156071_5dfaf05de3440.jpg")' }}></div>
                                                </Carousel>
                                                <div className="p-2 space-y-1">
                                                        <Link href="" className='font-bold line-clamp-2'>Independent Rio de Janeiro City Stay with Brazil Amazon</Link>
                                                        <p className='text-xs line-clamp-1'><span>Quốc Gia: </span><span className="text-red-500">Brazil</span></p>
                                                        <p className='text-sm flex items-center font-medium'><span>4.6</span><FaStar /></p>
                                                        <div className='text-red-400 space-x-4 flex items-center justify-between'>
                                                                <p><span>1.500.000</span><span className='text-red-500'>đ</span></p>
                                                                <span className='border rounded border-red-400 text-xs p-1 font-bold'>-32%</span>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='w-full hover:shadow-lg'>
                                                <Carousel slide={false} className='w-full h-60'>
                                                        <div className='pt-[120%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/tour/645x430/191170_659777f6e04ca.jpg")' }}></div>
                                                        <div className='pt-[120%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/tour/1500x800/156071_5dfaf031afd34.jpg")' }}></div>
                                                        <div className='pt-[120%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/tour/645x430/156071_5dfaf05de3440.jpg")' }}></div>
                                                </Carousel>
                                                <div className="p-2 space-y-1">
                                                        <Link href="" className='font-bold line-clamp-2'>Tailor-Made Best Brazil Tour to Rio and Iguazu Falls, Daily Departure</Link>
                                                        <p className='text-xs line-clamp-1'><span>Quốc Gia: </span><span className="text-red-500">Brazil</span></p>
                                                        <p className='text-sm flex items-center font-medium'><span>4.6</span><FaStar /></p>
                                                        <div className='text-red-400 space-x-4 flex items-center justify-between'>
                                                                <p><span>1.500.000</span><span className='text-red-500'>đ</span></p>
                                                                <span className='border rounded border-red-400 text-xs p-1 font-bold'>-32%</span>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='w-full hover:shadow-lg'>
                                                <Carousel slide={false} className='w-full h-60'>
                                                        <div className='pt-[120%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/tour/645x430/180367_c573a0cf.jpg")' }}></div>
                                                        <div className='pt-[120%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/tour/1500x800/156071_5dfaf031afd34.jpg")' }}></div>
                                                        <div className='pt-[120%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/tour/645x430/156071_5dfaf05de3440.jpg")' }}></div>
                                                </Carousel>
                                                <div className="p-2 space-y-1">
                                                        <Link href="" className='font-bold line-clamp-2'>Rio de Janeiro, Foz do Iguazu and Amazon Sustainable Experience</Link>
                                                        <p className='text-xs line-clamp-1'><span>Quốc Gia: </span><span className="text-red-500">Brazil</span></p>
                                                        <p className='text-sm flex items-center font-medium'><span>4.6</span><FaStar /></p>
                                                        <div className='text-red-400 space-x-4 flex items-center justify-between'>
                                                                <p><span>1.500.000</span><span className='text-red-500'>đ</span></p>
                                                                <span className='border rounded border-red-400 text-xs p-1 font-bold'>-32%</span>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='w-full hover:shadow-lg'>
                                                <Carousel slide={false} className='w-full h-60'>
                                                        <div className='pt-[120%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/tour/1500x800/204867_5f61c0fcd1252.jpg")' }}></div>
                                                        <div className='pt-[120%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/tour/1500x800/156071_5dfaf031afd34.jpg")' }}></div>
                                                        <div className='pt-[120%] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/tour/645x430/156071_5dfaf05de3440.jpg")' }}></div>
                                                </Carousel>
                                                <div className="p-2 space-y-1">
                                                        <Link href="" className='font-bold line-clamp-2'>Tailor-Made Chile Trip to Winery & Classic W Trek (Private Guide an</Link>
                                                        <p className='text-xs line-clamp-1'><span>Quốc Gia: </span><span className="text-red-500">Brazil</span></p>
                                                        <p className='text-sm flex items-center font-medium'><span>4.6</span><FaStar /></p>
                                                        <div className='text-red-400 space-x-4 flex items-center justify-between'>
                                                                <p><span>1.500.000</span><span className='text-red-500'>đ</span></p>
                                                                <span className='border rounded border-red-400 text-xs p-1 font-bold'>-32%</span>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                        </section>

                        <section className="container bg-white rounded p-4">
                                <p className="text-[color:var(--primary-color)] text-xl font-medium">Tour theo danh mục</p>
                                <div className='grid gap-6  grid-cols-4 mt-4'>
                                        <Link className='bg-[#F5F5FA] rounded-xl flex gap-4 items-center' href="">
                                                <div className='w-20 h-20 rounded-xl bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://nhasanpuluong.org/wp-content/uploads/2022/05/kinh-nghiem-leo-nui-1.jpg")' }}></div>
                                                <p>Leo núi</p>
                                        </Link>
                                        <Link className='bg-[#F5F5FA] rounded-xl flex gap-4 items-center' href="">
                                                <div className='w-20 h-20 rounded-xl bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://static.vinwonders.com/2022/11/du-lich-van-hoa-1.jpg")' }}></div>
                                                <p>Văn hóa</p>
                                        </Link>
                                        <Link className='bg-[#F5F5FA] rounded-xl flex gap-4 items-center' href="">
                                                <div className='w-20 h-20 rounded-xl bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://trekatravel.com/images/upload/images/van-hoa-am-thuc-viet-nam-co-gi-hap-dan-du-khach-khap-the-gioi.jpg")' }}></div>
                                                <p>Ẩm thực</p>
                                        </Link>
                                        <Link className='bg-[#F5F5FA] rounded-xl flex gap-4 items-center' href="">
                                                <div className='w-20 h-20 rounded-xl bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://trekatravel.com/images/upload/images/van-hoa-am-thuc-viet-nam-co-gi-hap-dan-du-khach-khap-the-gioi.jpg")' }}></div>
                                                <p>Giáo dục</p>
                                        </Link>
                                </div>
                        </section>

                        <section className="container">
                                <p className="font-medium text-xl">Các bài viết mới nhất</p>
                                <div className="grid grid-cols-2 gap-6 mt-4">
                                        <Link href="" className='rounded overflow-hidden relative w-full pt-[40%] bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://ik.imagekit.io/tvlk/blog/2024/01/bitexco-cover.jpg")' }}>
                                                <div className="absolute left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.25)]">
                                                </div>
                                                <div className="absolute left-0 top-0 p-4 flex h-full w-full items-end">
                                                        <div>
                                                                <p className='font-medium text-white line-clamp-1'>Tòa nhà Bitexco - biểu tượng độc đáo của TP Hồ Chí Minh</p>
                                                                <p className='text-[#CDD0D1] text-sm'>Thao Nguyen · 12 January 2024</p>
                                                        </div>
                                                </div>
                                        </Link>
                                        <Link href="" className='rounded overflow-hidden relative w-full pt-[40%] bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://ik.imagekit.io/tvlk/blog/2024/01/cong-vien-van-lang-1.jpg")' }}>
                                                <div className="absolute left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.25)]">
                                                </div>
                                                <div className="absolute left-0 top-0 p-4 flex h-full w-full items-end">
                                                        <div>
                                                                <p className='font-medium text-white line-clamp-1'>Khám phá Công viên Văn Lang quận 5 tại Thành phố Hồ Chí Minh</p>
                                                                <p className='text-[#CDD0D1] text-sm'>Nguyễn Thụy Mộc Nhiên · 12 January 2024</p>
                                                        </div>
                                                </div>
                                        </Link>
                                        <Link href="" className='rounded overflow-hidden relative w-full pt-[40%] bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://ik.imagekit.io/tvlk/blog/2024/01/cong-vien-van-lang-viet-tri-5.jpg")' }}>
                                                <div className="absolute left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.25)]">
                                                </div>
                                                <div className="absolute left-0 top-0 p-4 flex h-full w-full items-end">
                                                        <div>
                                                                <p className='font-medium text-white line-clamp-1'>Công viên Văn Lang Việt Trì - Biểu tượng văn hóa của thành phố</p>
                                                                <p className='text-[#CDD0D1] text-sm'>Nguyễn Thụy Mộc Nhiên · 12 January 2024</p>
                                                        </div>
                                                </div>
                                        </Link>
                                        <Link href="" className='rounded overflow-hidden relative w-full pt-[40%] bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://ik.imagekit.io/tvlk/blog/2024/01/khu-du-lich-bach-hac-ben-got-3.jpg")' }}>
                                                <div className="absolute left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.25)]">
                                                </div>
                                                <div className="absolute left-0 top-0 p-4 flex h-full w-full items-end">
                                                        <div>
                                                                <p className='font-medium text-white line-clamp-1'>Ghé thăm khu du lịch Bạch Hạc Bến Gót nổi tiếng tại vùng đất Tổ</p>
                                                                <p className='text-[#CDD0D1] text-sm'>Nguyễn Thụy Mộc Nhiên · 12 January 2024</p>
                                                        </div>
                                                </div>
                                        </Link>
                                </div>
                                <div className='grid grid-cols-3 gap-4 mt-6'>
                                        <Link className='rounded-lg overflow-hidden shadow-lg' href="">
                                                <div className='w-full pt-[58%] rounded-lg bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://ik.imagekit.io/tvlk/blog/2023/05/bL3fJ3NG-image.png?tr=w-427")' }}></div>
                                                <div className='w-full p-3 font-medium'>
                                                        <p className='line-clamp-2'>Top 4 Quán Cà Phê Đẹp Ở Jeju Mà Bạn Không Nên Bỏ Qua</p>
                                                        <p className='text-xs text-[#AC8F8F]'>Tran Thi Ngoc Quynh</p>
                                                        <i className='text-xs text-[var(--primary-color)]'>9 min read</i>
                                                </div>
                                        </Link>
                                        <Link className='rounded-lg overflow-hidden shadow-lg' href="">
                                                <div className='w-full pt-[58%] rounded-lg bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://ik.imagekit.io/tvlk/blog/2023/05/DzrU3M6m-image.png?tr=w-427")' }}></div>
                                                <div className='w-full p-3 font-medium'>
                                                        <p className='line-clamp-2'>Đảo Jeju Có Gì Nổi Tiếng? Top Địa Điểm Thu Hút Khách Tại Jeju</p>
                                                        <p className='text-xs text-[#AC8F8F]'>Tran Thi Ngoc Quynh</p>
                                                        <i className='text-xs text-[var(--primary-color)]'>9 min read</i>
                                                </div>
                                        </Link>
                                        <Link className='rounded-lg overflow-hidden shadow-lg' href="">
                                                <div className='w-full pt-[58%] rounded-lg bg-no-repeat bg-center bg-cover' style={{ backgroundImage: 'url("https://ik.imagekit.io/tvlk/blog/2023/05/bL3fJ3NG-image.png?tr=w-427")' }}></div>
                                                <div className='w-full p-3 font-medium'>
                                                        <p className='line-clamp-2'>Khám phá thời tiết đảo Jeju và kinh nghiệm du lịch chi tiết</p>
                                                        <p className='text-xs text-[#AC8F8F]'>Tran Thi Ngoc Quynh</p>
                                                        <i className='text-xs text-[var(--primary-color)]'>9 min read</i>
                                                </div>
                                        </Link>
                                </div>
                        </section>
                </div >
        )
}
export default Agency