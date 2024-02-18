'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { urlAPI } from '~/utils/API';
import { useSession } from 'next-auth/react';

const Widget = ({ id }: any) => {
        const { data }: any = useSession()
        const router = useRouter()
        const handlerBooking = () => {
                fetch(`${urlAPI}/api/booking`, {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                                user: data.user.email,
                                tour: id
                        }),
                })
                        .then(response => {
                                if (response.ok) {
                                        router.push('/account?tab=order')
                                }
                                else {
                                        alert("fail")
                                }
                        })
                        .catch(error => {
                                console.log(error);

                        });
        }
        return (
                <div className="w-full bg-white rounded-sm p-4 drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-lg mb-3">
                        <h3 className="mb-3 text-[color:var(--primary-color)] text-xl font-bold">Lịch khởi hành & Giá</h3>
                        <p className="">Chọn ngày khời hành:</p>
                        <div className="flex justify-between mt-3">
                                <button className='p-3 border rounded focus:border-teal-500'>28/09</button>
                                <button className='p-3 border rounded focus:border-teal-500'>29/09</button>
                                <button className='p-3 border rounded focus:border-teal-500'>30/09</button>
                                <button className='p-3 border rounded'>Tất cả</button>
                        </div>

                        <div className='p-3 flex items-center justify-between border rounded-lg mt-3'>
                                <span>Người lớn</span>
                                <span className='text-orange-500 font-medium text-l'>3333333</span>
                                <div className='flex items-center gap-3 text-l'>
                                        <button className='font-semibold'>+</button>
                                        <span>3</span>
                                        <button className='font-semibold'>-</button>
                                </div>
                        </div>
                        <div className='p-3 flex items-center justify-between border rounded-lg mt-3'>
                                <span>Trẻ em</span>
                                <span className='text-orange-500 font-medium text-l'>33</span>
                                <div className='flex items-center gap-3 text-l'>
                                        <button className='font-semibold'>+</button>
                                        <span>3</span>
                                        <button className='font-semibold'>-</button>
                                </div>
                        </div>
                        <p className='flex items-center mt-3 gap-3 text-[color:var(--primary-color)]'><HiOutlineInformationCircle /><span>Liên hệ để xác nhận chỗ</span></p>
                        <div className="mt-3">
                                <p className="flex justify-between mt-2 items-center">
                                        <input type="checkbox" />
                                        <span>Phụ thu phòng đơn</span>
                                        <span className="text-orange-500">300000</span>
                                </p>
                                <p className="flex justify-between mt-2 items-center">
                                        <input type="checkbox" id="promo" checked />
                                        <span>Giảm giá</span>
                                        <span className="text-orange-500">-1000000</span>
                                </p>
                                <p className="flex justify-between mt-2 items-center">
                                        <span className="font-medium text-xl">Tổng cộng</span>
                                        <span className="font-medium text-2xl text-orange-500">000000</span>
                                </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-5">
                                <Link className="border border-[color:var(--primary-color)] bg-white p-3 text-center text-[color:var(--primary-color)] rounded font-bold text-lg" href="/user/payment">Đặt cọc</Link>
                                <button onClick={handlerBooking} className="bg-[color:var(--primary-color)] p-3 text-center text-white rounded font-bold text-lg">Yêu cầu đặt</button>

                        </div>
                </div>

        )
}

export default Widget
