import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { FaUser } from 'react-icons/fa'

const AuthMain = ({ setTab }: any) => {
        return (
                <div className="w-full flex justify-center">
                        <div className='flex flex-col gap-4 w-[69%] font-medium'>
                                <button onClick={() => { setTab(1) }} className='rounded-full w-full px-4 py-2 border flex items-center border-2 hover:bg-gray-100'>
                                        <FaUser />
                                        <p className='flex-1 text-center text-[14px]'>Sử dụng email để đăng nhập</p>
                                </button>
                                <button onClick={() => { signIn("google") }} className='rounded-full w-full px-4 py-2 border flex items-center border-2 hover:bg-gray-100'>
                                        <img className='w-6' src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" />
                                        <p className='flex-1 text-center text-[14px]'>Đăng nhập với Google</p>
                                </button>
                                <button onClick={() => { signIn("facebook") }} className='rounded-full w-full px-4 py-2 border flex items-center border-2 hover:bg-gray-100'>
                                        <img className='w-6' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="" />
                                        <p className='flex-1 text-center text-[14px]'>Đăng nhập với Facebook</p>
                                </button>
                        </div>
                </div>
        )
}

export default AuthMain
