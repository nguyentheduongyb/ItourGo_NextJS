'use client'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import HeadlessTippy from '@tippyjs/react/headless';
import Link from 'next/link';

const Search = () => {
        const [showResult, setShowResult] = useState(false);

        const handleHideResult = () => {
                setShowResult(true);
        };
        return (
                <HeadlessTippy
                        interactive
                        visible={showResult}
                        onClickOutside={handleHideResult}
                        render={() => {
                                return (<div className="hidden md:flex flex-col border w-[400px] min-h-[100px] bg-white shadow-lg rounded-lg pt-[8px] top-0">
                                        <div className="px-3">
                                                <div className="mt-3 pb-2">
                                                        <h6 className='uppercase text-sm text-[color:var(--primary-color)] py-1 border-b cursor-pointer'>places</h6>
                                                        <div className="flex flex-col mt-3">
                                                                <Link className="px-4 py-2 text-sm hover:bg-[color:var(--primary-color)] hover:text-white" href="">kkk</Link>
                                                        </div>
                                                </div>
                                                <div className="mt-3 pb-2">
                                                        <h6 className='uppercase text-sm text-[color:var(--primary-color)] py-1 border-b cursor-pointer'>tour operator</h6>
                                                        <div className="flex flex-col mt-3">
                                                                <Link className="px-4 py-2 text-sm hover:bg-[color:var(--primary-color)] hover:text-white" href="">kkk</Link>
                                                        </div>
                                                </div>
                                                <div className="mt-3 pb-2">
                                                        <h6 className='uppercase text-sm text-[color:var(--primary-color)] py-1 border-b cursor-pointer'>tours</h6>
                                                        <div className="flex flex-col mt-3">
                                                                <Link className="px-4 py-2 text-sm hover:bg-[color:var(--primary-color)] hover:text-white" href="">kkk</Link>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="py-1 px-2 hover:text-white hover:bg-[color:var(--primary-color)]">
                                                <Link className="text-xs" href="">Xem tất cả kết quả kìm tiếm với</Link>
                                        </div>
                                </div>)
                        }}>
                        <div className="w-[400px] rounded-full h-[46px] flex items-center justify-between pl-4 overflow-hidden bg-[#F1F1F2] border border-transparent focus-within:border-[#BEBEC3]">
                                <input className="h-[80%] flex-1 p-0 caret-red-500 border-none focus-input-none focus:border focus:outline-none bg-transparent text-xs  focus-within:border-1" type="text" placeholder='Tìm kiếm điểm đến của bạn' />
                                <span className="w-[1px] h-[28px]" style={{ background: 'rgba(22, 24, 35, .12)' }}></span>
                                <button className="w-[46px] flex items-center justify-center h-full hover:bg-[#E4E4E6] text-[#C6C6C9] hover:text-[#BEBEC3] ">
                                        <FaSearch />
                                </button>
                        </div>
                </HeadlessTippy>
        )
}

export default Search