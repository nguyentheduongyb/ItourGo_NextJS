import Link from 'next/link'
import React from 'react'

// import icon
import { FaStar } from 'react-icons/fa'

export interface SearchItemProps {
        categories: string[],
        name: string,
        description: string,
        image: string,
        price: { perDay: number, from: number },
        sale: number,
        stars: number,
        reviews: number,
        duration: number,
        ranks: string[],
}


export const SearchItem: React.FC<SearchItemProps> = ({ categories, name, description, image, price, sale, stars, reviews, duration, ranks }: SearchItemProps) => {
        return (
                <div className="w-full rounded-lg border drop-shadow p-2 bg-white flex md:flex-row flex-col gap-6">
                        <div className="w-full md:w-1/4 flex flex-col gap-2">
                                <div className="rounded-xl w-full pt-[50%] md:pt-[74%] bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://cdn1.ivivu.com/iVivu/2022/06/30/12/hinhdaidien-374x280.webp?o=jpg")' }}></div>
                                <div className="rounded-xl w-full pt-[50%] bg-center bg-no-repeat bg-cover hidden md:block" style={{ backgroundImage: 'url("https://cdn1.ivivu.com/iVivu/2022/06/30/12/hinhdaidien-374x280.webp?o=jpg")' }}></div>
                        </div>
                        <div className="flex-1">
                                <div className="w-full flex justify-between">
                                        <div className="flex gap-2 items-center">
                                                {categories.map((category, categoryIndex) => (
                                                        <button key={categoryIndex} className='bg-[#E3E5E6] py-1 px-2 rounded text-xs'>{category}</button>

                                                ))}
                                        </div>
                                        <button className='bg-red-500 py-1 px-2 rounded-full text-xs font-medium text-white'>50% Off</button>
                                </div>
                                <div className='w-full flex md:flex-row flex-col gap-4 md:gap-8 mt-2 px-3 md:px-0'>
                                        <div className="flex-1">
                                                <Link href="/tour/aaa" className='w-full text-xl font-bold hover:underline line-clamp-1 md:line-clamp-2'>{name}</Link>
                                                <div className="w-full flex items-center text-sm mt-1">
                                                        <span>{stars}</span>
                                                        <FaStar color="yellow" />
                                                        <span className="text-[#ccc]">({reviews} reviews)</span>
                                                </div>
                                                <p className="w-full text-sm mt-2">{description}</p>
                                                <div className="w-full flex gap-4 mt-3">
                                                        <div className="w-1/3 space-y-1 md:space-y-3 text-sm font-medium">
                                                                <p>Destinations</p>
                                                                <p>Age Range</p>
                                                                <p>Operated in</p>
                                                                <p>Operator</p>
                                                        </div>
                                                        <div className='flex-1 space-y-1 md:space-y-3 text-sm'>
                                                                <p>Seoul, Geumsan</p>
                                                                <p>18 to 35 year olds</p>
                                                                <p>English</p>
                                                                <p>One Life Adventures</p>
                                                                <div className='flex gap-3'>
                                                                        {ranks.map((rank, rankIndex) => (
                                                                                <button key={rankIndex} className='py-1 px-2 text-xs bg-[#E3E5E6] rounded-full'>{rank}</button>
                                                                        ))}
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="w-full md:w-1/3">
                                                <div className='grid grid-cols-3 md:grid-cols-2 gap-6 w-full'>
                                                        <div className='flex flex-col gap-2 justify-between'>
                                                                <p className='text-sm'>Duration</p>
                                                                <span className='font-bold text-xs'>{duration} days</span>
                                                        </div>
                                                        <div className='flex flex-col gap-2 justify-between'>
                                                                <p className='text-sm'>From</p>
                                                                <p className='font-bold text-xs text-green-500'>US <span className='text-xl'>${price.from}</span></p>
                                                        </div>
                                                        <div className='flex flex-col gap-2 justify-between'>
                                                                <p className='text-sm'>Price per day</p>
                                                                <p className='font-bold text-xs'>{price.perDay}</p>
                                                        </div>
                                                </div>
                                                <div className='flex flex-col gap-3 mt-8 items-center w-full md:w-[80%]'>
                                                        <button className='w-full py-2 rounded-full text-sm font-medium text-white bg-[color:var(--primary-color)]'>View Tour</button>
                                                        <button className='w-full py-2 rounded-full text-sm font-medium bg-[#CDE9FC] text-[color:var(--primary-color)]'>Download Brochure</button>
                                                </div>
                                        </div>
                                </div>

                        </div>
                </div>
        )
}

