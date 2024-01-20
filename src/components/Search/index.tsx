'use client'

import { MdLocationOn } from 'react-icons/md'
import { useState } from 'react';
const SearchComponent = () => {
        const [searchInput, setSearchInput] = useState('')

        const handleSearch = (e: any) => {
                setSearchInput(e.target.value)
        }
        return (
                <div className="my-6 md:my-8">
                        <div className="container">
                                <div className="h-12 md:h-16 px-4 w-full flex items-center gap-2 rounded-full bg-white drop-shadow-[0_0_4px_rgba(0,0,0,0.25)]">
                                        <div className="h-[68%] w-[80%] flex justify-center gap-2 rounded-full">
                                                <div className="h-full border-r-2 flex-1 flex items-center hover:bg-[#F1F2F3] hover:rounded-full px-4">
                                                        <MdLocationOn size={24} />
                                                        <input type="text" className='border-transparent w-[90%] bg-[transparent] caret-[#fe2c55] text-sm h-full focus:outline-none focus:border-[transparent] focus-input-none flex items-center placeholder-gray-600' placeholder="Bạn muốn đi đâu?" />
                                                </div>
                                                <div className="h-full border-r-2 flex-1 hidden md:flex items-center hover:bg-[#F1F2F3] hover:rounded-full px-4">
                                                        <MdLocationOn size={24} />
                                                        <input type="text" className='border-transparent w-[90%] bg-[transparent] caret-[#fe2c55] text-sm h-full focus:outline-none focus:border-[transparent] focus-input-none flex items-center placeholder-gray-600' placeholder="Khi nào bạn đi?" />
                                                </div>
                                                <div className="h-full border-r-2 flex-1 hidden md:flex items-center hover:bg-[#F1F2F3] hover:rounded-full px-4 border-none">
                                                        <MdLocationOn size={24} />
                                                        <input type="text" className='border-transparent w-[90%] bg-[transparent] caret-[#fe2c55] text-sm h-full focus:outline-none focus:border-[transparent] focus-input-none flex items-center placeholder-gray-600' placeholder="Nơi bạn muốn đến?" />
                                                </div>
                                        </div>

                                        <button className="flex-1 text-[12px] bg-[color:var(--primary-color)] rounded-full text-white h-[64%] w-1/12 flex items-center justify-center font-bold">Tìm kiếm</button>
                                </div>
                        </div>
                </div>
        )

}
export default SearchComponent;