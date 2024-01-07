import Link from 'next/link'
import React from 'react'

const TourRecommend = () => {
        return (
                <div className='w-full px-4'>
                        <div className="relative">
                                <div className='w-full bg-[#125A55] rounded text-center pt-16 pb-32 text-white space-y-8'>
                                        <p className='text-2xl font-bold uppercase text-white'>Chúng tôi làm chuyên gia du lịch</p>
                                        <p>Bạn sẽ tạo ra tác động tích cực đến con người, hành tinh và động vật hoang dã trong chuyến tham quan này</p>
                                </div>
                                <div className='mt-[-80px] mb-8 w-full'>
                                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:mx-24'>
                                                <div className='rounded overflow-hidden drop-shadow-xl bg-white flex flex-col text-center'>
                                                        <div className='bg-no-repeat bg-center bg-cover pt-[56%]' style={{ backgroundImage: 'url("https://www.trafalgar.com/media/o2anmtqi/mtm-india-delhi-salam-balaak-trust.jpg?center=0.5%2C0.5&format=webp&mode=crop&width=1200&height=600&quality=80")' }}></div>
                                                        <div className="p-4 text-center flex-1 flex-col justify-between">
                                                                <div className='space-y-4 mb-6'>
                                                                        <h6 className='text-xl font-medium'>MAKE TRAVEL MATTER® Experiences</h6>
                                                                        <p className='line-clamp-4 text-sm'>Mỗi chuyến tham quan của chúng tôi đều bao gồm ít nhất một trải nghiệm du lịch có ý thức hỗ trợ một hoặc nhiều Mục tiêu Phát triển Bền vững của Liên hợp quốc (SDGS). Hãy chú ý đến hành trình của bạn trong hành trình chuyến đi hàng ngày.</p>
                                                                </div>
                                                                <Link href="" className='text-sm text-gray-800 hover:text-[var(--primary-color)]'>Tìm hiểu thêm</Link>

                                                        </div>
                                                </div>
                                                <div className='rounded overflow-hidden drop-shadow-xl bg-white flex flex-col text-center'>
                                                        <div className='bg-no-repeat bg-center bg-cover pt-[56%]' style={{ backgroundImage: 'url("https://www.trafalgar.com/media/axieacsm/large-people-preparing-to-grow-a-small-tree-with-soil-in-the-garden-1198078044.jpg?center=0.5%2C0.5&format=webp&mode=crop&width=1200&height=600&quality=80")' }}></div>
                                                        <div className="flex p-4 text-center flex-1 flex-col justify-between">
                                                                <div className='space-y-4 mb-6'>
                                                                        <h6 className='text-xl font-medium'>Net-zero by 2050</h6>
                                                                        <p className='line-clamp-4 text-sm'>Du lịch biết rõ kế hoạch hành động về khí hậu 4 điểm của chúng tôi sẽ đảm bảo lượng phát thải khí nhà kính bằng không vào năm 2050.</p>
                                                                </div>
                                                                <Link href="" className='text-sm text-gray-800 hover:text-[var(--primary-color)]'>Tìm hiểu thêm</Link>

                                                        </div>

                                                </div>
                                                <div className='rounded overflow-hidden drop-shadow-xl bg-white flex flex-col text-center'>
                                                        <div className='bg-no-repeat bg-center bg-cover pt-[56%]' style={{ backgroundImage: 'url("https://www.trafalgar.com/media/5cbiqu4w/large-bmg-australia-tasmania-mount-gnomon-farm-with-guy-robertson.jpg?center=0.5%2C0.5&format=webp&mode=crop&width=1200&height=600&quality=80")' }}></div>
                                                        <div className="p-4 text-center flex-1 flex-col justify-between">
                                                                <div className='space-y-4 mb-6'>
                                                                        <h6 className='text-xl font-medium'>Support Local</h6>
                                                                        <p className='line-clamp-4 text-sm'>Chuyến tham quan của bạn trực tiếp hỗ trợ cộng đồng địa phương bằng cách ghé thăm các doanh nghiệp do gia đình điều hành, các địa điểm được UNESCO công nhận và các địa điểm văn hóa
                                                                                ý nghĩa.</p>
                                                                </div>
                                                                <Link href="" className='text-sm text-gray-800 hover:text-[var(--primary-color)]'>Tìm hiểu thêm</Link>

                                                        </div>

                                                </div>
                                        </div>

                                </div>
                        </div>


                </div>
        )
}

export default TourRecommend
