import Link from 'next/link'
import React from 'react'

// import icon
import { FaStar } from 'react-icons/fa'

export interface SearchItemProps {
        categories: [{ name: string }],
        name: string,
        description: string,
        image: string,
        destinations: string[],
        price: { adult: number, child: number },
        expectedCost: number,
        country: string,
        agency: { name: string },
        sale: number,
        rate: number,
        reviews: number,
        duration: number,
        rank: { name: string },
        slug: string,
}


export const SearchItem: React.FC<SearchItemProps> = ({ categories, name, description, image, destinations, expectedCost, price, country, agency, sale, rate, reviews, duration, rank, slug }: SearchItemProps) => {
        return (
                <div className="w-full rounded-lg border drop-shadow p-2 bg-white flex md:flex-row flex-col gap-6">
                        <div className="w-full md:w-1/4 flex flex-col gap-2">
                                <div className="rounded-xl w-full pt-[50%] md:pt-[74%] bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("${image}")` }}></div>
                                <div className="rounded-xl w-full pt-[50%] bg-center bg-no-repeat bg-cover hidden md:block" style={{ backgroundImage: 'url("https://cdn.tourradar.com/s3/map/232x112/125892_ccf9.png")' }}></div>
                        </div>
                        <div className="flex-1">
                                <div className="w-full flex justify-between">
                                        <div className="flex gap-2 items-center">
                                                {categories.map((category: any, categoryIndex: number) => (
                                                        <button key={categoryIndex} className='bg-[#E3E5E6] py-1 px-2 rounded text-xs'>{category.name}</button>
                                                ))}
                                        </div>
                                        <button className='bg-red-500 py-1 px-2 rounded-full text-xs font-medium text-white'>50% Off</button>
                                </div>
                                <div className='w-full flex md:flex-row flex-col gap-4 md:gap-8 mt-2 px-3 md:px-0'>
                                        <div className="flex-1">
                                                <Link href={`/tour/${slug}`} className='w-full text-xl font-bold hover:underline line-clamp-1 md:line-clamp-2'>{name}</Link>
                                                <div className="w-full flex items-center text-sm mt-1">
                                                        <span>{rate}</span>
                                                        <FaStar color="yellow" />
                                                        <span className="text-[#ccc]">({reviews} reviews)</span>
                                                </div>
                                                <p className="w-full text-sm mt-2 line-clamp-2">{description}</p>
                                                <div className="w-full flex flex-col gap-2 mt-3">
                                                        <div className='flex gap-6'>
                                                                <p className='w-1/3'>Destinations</p>
                                                                <p className="flex-1 text-sm">{destinations}</p>
                                                        </div>
                                                        <div className='flex gap-6'>
                                                                <p className='w-1/3'>Age Range</p>
                                                                <p className="flex-1 text-sm">18 to 35 year olds</p>
                                                        </div>
                                                        <div className='flex gap-6'>
                                                                <p className='w-1/3'>Operated in</p>
                                                                <p className="flex-1 text-sm">{country}</p>
                                                        </div>
                                                        <div className='flex gap-6'>
                                                                <p className='w-1/3'>Operator</p>
                                                                <p className="flex-1 text-sm">{agency.name}</p>
                                                        </div>
                                                        <div className='flex gap-6'>
                                                                <p className='w-1/3'></p>
                                                                <div className="flex-1 text-sm">
                                                                        <button className='py-1 px-2 text-xs bg-[#E3E5E6] rounded-full'>{rank && rank.name}</button>
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
                                                                <p className='font-bold text-xs text-green-500'>US <span className='text-xl'>${expectedCost}</span></p>
                                                        </div>
                                                        <div className='flex flex-col gap-2 justify-between'>
                                                                <p className='text-sm'>Price per day</p>
                                                                <p className='font-bold text-xs'>{price.adult}</p>
                                                        </div>
                                                </div>
                                                <div className='flex flex-col gap-3 mt-8 items-center w-full md:w-[80%]'>
                                                        <Link href={`/tour/${slug}`} className='w-full text-center py-2 rounded-full text-sm font-medium text-white bg-[color:var(--primary-color)]'>View Tour</Link>
                                                        <button className='w-full py-2 rounded-full text-sm font-medium bg-[#CDE9FC] text-[color:var(--primary-color)]'>Download Brochure</button>
                                                </div>
                                        </div>
                                </div>

                        </div>
                </div>
        )
}

