'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { ToggleSwitch, Button, TextInput } from 'flowbite-react';


const Login = () => {

        return (
                <div className="text-black h-screen flex">
                        <div className="flex items-center justify-center  w-2/5">
                                <form className="w-[58%] flex flex-col">
                                        <div className='mb-10'>
                                                <h1 className="font-bold text-3xl">Đăng nhập</h1>
                                                <p className="text-[#67748E]">Nhập email và mật khẩu của bạn để đăng nhập</p>
                                                {/* {error ? <p className="text-red-500 mt-4">Tài khoản hoặc mật khẩu không chính xác !!!</p> : ''} */}
                                        </div>
                                        <div className="mb-5">
                                                <TextInput
                                                        placeholder="Email"
                                                        required
                                                        type="email"
                                                // {...register("email")}
                                                />
                                        </div>
                                        <div className="mb-5">
                                                <TextInput
                                                        name="password"
                                                        placeholder="Mật khẩu"
                                                        required
                                                        type="password"
                                                // {...register("password")}
                                                />
                                        </div>
                                        {/* <ToggleSwitch
                                                checked={false}
                                                className="mb-3 text-black"
                                        // onChange={() => { setCheck(!check) }}
                                        /> */}
                                        <Button type="submit">
                                                Đăng nhập
                                        </Button>
                                        <div className="mt-5 text-[#67748e] text-center"><p>Bạn chưa có tài khoản? <Link href="/auth/register" className="cursor-pointer text-[color:var(--primary-color)]">Đăng ký</Link></p></div>
                                </form>
                        </div>
                        <div className="flex flex-1 items-center relative">
                                <div className="w-[96%] relative rounded-xl overflow-hidden h-[88vh] rounded-[12px] flex items-center justify-center bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("https://banahills.sunworld.vn/wp-content/uploads/2020/10/Banahill-D.jpg")' }}>
                                        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.35)]"></div>
                                        <div className="absolute w-full flex justify-center items-center flex-col text-center px-3">
                                                <img className="max-w-[400px] w-full " src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/illustrations/chat.png" alt="chat-img" />
                                                <h4 className="text-[color:var(--primary-color)] text-3xl mb-4 font-semibold">Bà Nà Hills - Đà Nẵng</h4>
                                                <p className="text-white">Đi du lịch Đà Nẵng mà chưa check-in tại Bà Nà Hills thì quả là thiệt thòi lớn. Khu du lịch Bà Nà Hills ở đâu và vì sao địa điểm này luôn giữ vững sức hấp dẫn đối với du khách qua năm tháng? Hãy cùng tìm kiếm câu trả lời thông qua bài viết này nhé! </p>
                                        </div>
                                </div>
                        </div>
                        {/* {loading && <PreLoader />} */}
                </div>
        )

}
export default Login
Login.Layout = "nolayout"