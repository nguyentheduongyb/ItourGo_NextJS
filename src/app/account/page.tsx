'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { CiDiscount1, CiEdit } from 'react-icons/ci'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { MdPayments } from 'react-icons/md'
import Content from '~/components/account'

const Profile = () => {
        let indexTab
        const [tab, setTab] = useState(indexTab)
        const active = 'text-[var(--text-primary)]'
        const handleTab = (e: any) => {
                setTab(e.currentTarget.getAttribute('id'))
        }
        return (
                <div className="container py-5">
                        <div className="flex gap-5">
                                <div className="w-60 py-5">
                                        <div className="flex gap-3 overflow-hidden h-[80px] border-b">
                                                <img
                                                        className="w-[48px] h-[48px] rounded-full"
                                                        src="https://scontent.fhan17-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeFxhsDw9pzh4ohGdtj64dFWso2H55p0AlGyjYfnmnQCUeJUf95wkFdHzKvwRH52pETtDC4q5keuvHp-nO9XiRqa&_nc_ohc=RzeqyrvNnDsAX_Xu_ma&_nc_ht=scontent.fhan17-1.fna&cb_e2o_trans=q&oh=00_AfCznw5EiP94BoiBqCEFyBqDJJSbFPv65Yni4rzNXlOA3Q&oe=65D6EFF8"
                                                        alt="Nguyen The Duong"
                                                />
                                                <div className="">
                                                        <p className="line-clamp-1" title="nguyentheduongyb">nguyentheduongyb</p>
                                                        <button className="flex items-center gap-2">
                                                                <CiEdit />
                                                                <span>Sửa hồ sơ</span>
                                                        </button>
                                                </div>
                                        </div>
                                        <div className="mt-8">
                                                <div>
                                                        <div onClick={handleTab} id='1' className="flex gap-4 items-center mb-2 cursor-pointer hover:text-[var(--text-primary)]">
                                                                <Link href="/account?tab=profile" className="flex items-center gap-4">

                                                                        <BiUser />
                                                                        <span>Tài khoản của tôi</span>
                                                                </Link>
                                                        </div>
                                                        <ul className="pl-10 text-[12px]">
                                                                <li onClick={handleTab} id='1' className={`mb-2 ${tab == 1 ? active : ''} font-bold cursor-pointer hover:text-[var(--text-primary)]`}><Link href="/account?tab=profile">Hồ Sơ</Link></li>
                                                                <li onClick={handleTab} id='2' className={`mb-2 ${tab == 2 ? active : ''} font-bold cursor-pointer hover:text-[var(--text-primary)]`}><Link href="/account?tab=wallet">Phương thức thanh toán</Link></li>
                                                                <li onClick={handleTab} id='3' className={`mb-2 ${tab == 3 ? active : ''} font-bold cursor-pointer hover:text-[var(--text-primary)]`}><Link href="/account?tab=address">Visa</Link></li>
                                                        </ul>
                                                </div>
                                                <div onClick={handleTab} id='5' className={`${tab == 5 ? active : ''} flex gap-4 items-center mb-2 cursor-pointer hover:text-[var(--text-primary)]`}>
                                                        <Link className="flex items-center gap-4" href="/account?tab=order">
                                                                <MdPayments />
                                                                <span>Dịch vụ đã đặt</span>
                                                        </Link>

                                                </div>
                                                <div onClick={handleTab} id='6' className={`${tab == 6 ? active : ''} flex gap-4 items-center mb-2 cursor-pointer hover:text-[var(--text-primary)]`}>
                                                        <Link className="flex items-center gap-4" href="/account?tab=notification">
                                                                <IoIosNotificationsOutline />
                                                                <span>Thông báo</span>
                                                        </Link>

                                                </div>
                                                <div onClick={handleTab} id='7' className={`${tab == 7 ? active : ''} flex gap-4 items-center mb-2 cursor-pointer hover:text-[var(--text-primary)]`}>
                                                        <Link className="flex items-center gap-4" href="/account?tab=vourcher">
                                                                <CiDiscount1 />
                                                                <span>Vourcher</span>
                                                        </Link>

                                                </div>
                                        </div>
                                </div>
                                <div className='flex-1'>
                                        <Content />
                                </div>

                        </div >
                </div >
        )
}

export default Profile
