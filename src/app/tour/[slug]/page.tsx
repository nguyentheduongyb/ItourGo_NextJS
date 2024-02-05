import Link from 'next/link'
import { BiSolidStar } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa';
import TourRating from '~/components/tour/TourRating';
import TourRecommend from '~/components/tour/TourRecommend';
import Navigation from '~/components/Navigation';
import { urlAPI } from '~/utils/API';
import Schedule from '~/components/tour/Schedule'
import { HiOutlineInformationCircle } from 'react-icons/hi';
import Widget from '~/components/Widget';

export default async function Page({ params }: any) {
        const response = await fetch(`${urlAPI}/api/tour/detail/${params.slug}`);
        const data = await response.json();


        return (
                <div className="">
                        <div className="container w-full py-5 md:p-5 rounded-xl">
                                <Navigation navigation={`${data.name ? data.name : ''}`} />
                                <div className="space-y-1">
                                        <h1 className="md:mb-3 text-[color:var(--primary-color)] text-2xl md:text-2xl line-clamp-2 font-medium md:font-bold">{data.name}</h1>
                                        <div className="flex gap-2 items-center">
                                                <i className='flex'>
                                                        <BiSolidStar color="yellow" />
                                                        <BiSolidStar color="yellow" />
                                                        <BiSolidStar color="yellow" />
                                                        <BiSolidStar color="yellow" />
                                                        <BiSolidStar color="yellow" />
                                                </i>
                                                <span className='font-bold text-sm'>{data.rate}</span>
                                                <span className='underline text-xs'>(500 reviews)</span>
                                        </div>
                                        <p className='text-sm text-gray-500 line-clamp-2'>Enjoy Devon and Cornwall</p>
                                </div>

                                <div className="flex flex-col md:flex-row gap-12 mt-4">
                                        <div className="w-full md:w-2/3">
                                                <div className="w-full">
                                                        <div className="w-full bg-no-repeat bg-center bg-cover pt-[52.4%]" style={{ backgroundImage: `url("${data.image}")` }}></div>
                                                </div>
                                                <div className='space-y-8 mt-4'>
                                                        <div className='space-y-4'>
                                                                <h2 className='font-medium text-2xl'>Hành trình</h2>
                                                                <p className='line-clamp-5'>{data.ltinerary.description}</p>
                                                                <div className='grid grid-cols-2 gap-4'>
                                                                        <div className='border rounded p-4 drop-shadow'>
                                                                                <div className='flex items-center font-bold gap-1'>
                                                                                        <MdLocationOn />
                                                                                        Travel
                                                                                </div>
                                                                                <p className='text-sm mt-1'>{data.duration}</p>
                                                                        </div>
                                                                        <div className='border rounded p-4 drop-shadow'>
                                                                                <div className='flex items-center font-bold gap-1'>
                                                                                        <MdLocationOn />
                                                                                        {data.country}
                                                                                </div>
                                                                                <p className='text-sm mt-1'>10 nights</p>
                                                                        </div>
                                                                        <div className='border rounded p-4 drop-shadow'>
                                                                                <div className='flex items-center font-bold gap-1'>
                                                                                        <MdLocationOn />
                                                                                        Meals
                                                                                </div>
                                                                                <p className='text-sm mt-1'>5 Breakfasts, 1 Lunch, 2 Dinners</p>
                                                                        </div>
                                                                        <div className='border rounded p-4 drop-shadow'>
                                                                                <div className='flex items-center font-bold gap-1'>
                                                                                        <MdLocationOn />
                                                                                        Itinerary
                                                                                </div>
                                                                                <Link href="" className='text-sm font-medium underline text-[color:var(--primary-color)] mt-1'>View day-by-day trip itinerary</Link>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className="space-y-2">
                                                                <p className='text-2xl font-medium'>Lộ trình hàng ngày</p>
                                                                <p className='text-sm text-gray-500'>Hành trình 6 ngày từ London đến London thăm 1 quốc gia và 13 thành phố</p>
                                                                {data.ltinerary.schedule.map((schedule: any, day: number) => (
                                                                        <Schedule schedule={schedule} key={day} />
                                                                ))}

                                                        </div>

                                                        <div className='border-t-2 pt-6 flex flex-col md:flex-row gap-6'>
                                                                <div className="flex-1 space-y-3">
                                                                        <p className='text-2xl font-medium'>Về chuyến đi này</p>
                                                                        <p className='text-sm text-[#4B6B35]'>Điểm tham quan nổi bật</p>
                                                                </div>
                                                                <div className='md:w-2/3 grid md:grid-cols-2 gap-4'>
                                                                        <div className='flex gap-3 w-full'>
                                                                                <MdLocationOn size="32" color="#4B6B35" />
                                                                                <p className="text-sm space-x-2 flex-1">
                                                                                        <span className='font-bold'>Discover</span>
                                                                                        <span className=''>Stonehenge, St. Ives, Plymouth, Bath, Bristol and Windsor</span>
                                                                                </p>

                                                                        </div>
                                                                        <div className='flex gap-3 w-full'>
                                                                                <MdLocationOn size="32" color="#4B6B35" />
                                                                                <p className="text-sm space-x-2 flex-1">
                                                                                        <span className='font-bold'>View</span>
                                                                                        <span className=''>St. Michaels Mount, the Mayflower Steps in Plymouth, Capability Brown landscaped parkland at Longleat and Windsor Castle.</span>
                                                                                </p>

                                                                        </div>
                                                                        <div className='flex gap-3 w-full'>
                                                                                <MdLocationOn size="32" color="#4B6B35" />
                                                                                <p className="text-sm space-x-2 flex-1">
                                                                                        <span className='font-bold'>Visit</span>
                                                                                        <span className=''>the ancient stone circle at Stonehenge, Exeter Cathedral, the artists colony of St. Ives, Buckfast Abbey, the Roman Baths and Royal Windsor.</span>
                                                                                </p>

                                                                        </div>
                                                                </div>

                                                        </div>
                                                        <div className='pt-6 border-t-2 flex flex-col md:flex-row gap-6'>
                                                                <div className="flex-1 space-y-3">
                                                                        <p className='text-2xl font-medium'>Du lịch nổi bật</p>
                                                                        <p className='text-sm text-green-600'>Thông tin vận chuyển có thể xem tại đây:</p>
                                                                        <button className='px-6 py-2 bg-red-700 font-bold text-white'>Vận chuyển sân bay</button>
                                                                </div>
                                                                <div className='md:w-2/3 grid md:grid-cols-2 gap-4'>
                                                                        <div className='flex gap-3 w-full'>
                                                                                <FaCheck size="32" color="#AF3B41" />
                                                                                <p className="text-sm space-x-2 flex-1">
                                                                                        <span className=''>Stonehenge, St. Ives, Plymouth, Bath, Bristol and Windsor</span>
                                                                                </p>

                                                                        </div>
                                                                        <div className='flex gap-3 w-full'>
                                                                                <FaCheck size="32" color="#AF3B41" />
                                                                                <p className="text-sm space-x-2 flex-1">
                                                                                        <span className=''>St. Michaels Mount, the Mayflower Steps in Plymouth, Capability Brown landscaped parkland at Longleat and Windsor Castle.</span>
                                                                                </p>

                                                                        </div>
                                                                        <div className='flex gap-3 w-full'>
                                                                                <FaCheck size="32" color="#AF3B41" />
                                                                                <p className="text-sm space-x-2 flex-1">
                                                                                        <span className=''>the ancient stone circle at Stonehenge, Exeter Cathedral, the artists colony of St. Ives, Buckfast Abbey, the Roman Baths and Royal Windsor.</span>
                                                                                </p>

                                                                        </div>
                                                                </div>

                                                        </div>

                                                </div>

                                        </div>
                                        <div className="flex-1">
                                                <Widget id={data._id} />
                                        </div>
                                </div>


                        </div >
                        <TourRecommend />
                        <TourRating />
                </div>
        )
}
