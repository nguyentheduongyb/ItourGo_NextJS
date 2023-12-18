'use client'

import Link from 'next/link';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';


const Register = () => {
        return (
                <div className="text-black h-screen flex">
                        <div className="flex items-center justify-center w-2/5">
                                <form className="flex max-w-md flex-col gap-4 w-[54%]">
                                        <div className='mb-6'>
                                                <h1 className="font-bold text-3xl">Đăng ký</h1>
                                                <p className="text-[#67748E]">Nhập email và mật khẩu của bạn để đăng ký</p>
                                        </div>
                                        <div>
                                                <div className="mb-2 block">
                                                        <Label
                                                                htmlFor="username"
                                                                value="Tên người dùng"
                                                        />
                                                </div>
                                                <TextInput
                                                        id="username"
                                                        placeholder="Tên người dùng"
                                                        required
                                                        shadow
                                                        type="text"
                                                // {...register("username")}
                                                />
                                        </div>
                                        <div>
                                                <div className="mb-2 block">
                                                        <Label
                                                                htmlFor="email"
                                                                value="Email của bạn"
                                                        />
                                                </div>
                                                <TextInput
                                                        id="email"
                                                        placeholder="Email"
                                                        required
                                                        shadow
                                                        type="email"
                                                // {...register("email")}

                                                />
                                        </div>
                                        <div>
                                                <div className="mb-2 block">
                                                        <Label
                                                                htmlFor="password"
                                                                value="Mật khẩu của bạn"
                                                        />
                                                </div>
                                                <TextInput
                                                        id="password"
                                                        required
                                                        shadow
                                                        type="password"
                                                // {...register("password")}

                                                />
                                        </div>
                                        <div>
                                                <div className="mb-2 block">
                                                        <Label
                                                                htmlFor="repeat-password"
                                                                value="Nhập lại mật khẩu"
                                                        />
                                                </div>
                                                <TextInput
                                                        id="confirmPassword"
                                                        required
                                                        shadow
                                                        type="password"
                                                // {...register("confirmPassword")}
                                                />
                                        </div>
                                        <div className="flex items-center gap-2">
                                                <Checkbox id="agree" />
                                                <Label
                                                        className="flex"
                                                        htmlFor="agree"
                                                >
                                                        <p>
                                                                Đồng ý với điều khoản
                                                        </p>

                                                </Label>
                                        </div>
                                        <Button type="submit">
                                                Đăng ký
                                        </Button>
                                        <div className="mt-5 text-[#67748e] text-center"><p>Bạn đã có tài khoản? <Link href="/auth/login" className="cursor-pointer text-[color:var(--primary-color)]">Đăng nhập</Link></p></div>

                                </form>
                        </div>
                        <div className="flex-1 flex items-center justify-center relative">
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
export default Register
Register.Layout = "nolayout"
