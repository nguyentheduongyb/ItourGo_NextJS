import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'

const Register = ({ setTab }: any) => {
        return (
                <div className="w-full">
                        <h1 className="text-center font-bold text-3xl">Đăng ký</h1>
                        <form className="flex max-w-md flex-col gap-2 w-[69%] mx-auto">
                                <div>
                                        <div className="mb-1 block">
                                                <Label
                                                        htmlFor="name"
                                                        value="Họ và tên của bạn"
                                                />
                                        </div>
                                        <TextInput
                                                id="name"
                                                placeholder="Họ và tên của bạn"
                                                required
                                                shadow
                                                type="text"
                                        />
                                </div>
                                <div>
                                        <div className="mb-1 block">
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
                                        <div className="mb-1 block">
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
                                        <div className="mb-1 block">
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
                                        />
                                </div>
                                <Button className='mt-4' type="submit">
                                        Đăng ký
                                </Button>
                                <div className="my-5 text-[#67748e] text-center"><p>Bạn đã có tài khoản? <button onClick={() => { setTab(0) }} className="cursor-pointer text-[color:var(--primary-color)]">Đăng nhập</button></p></div>
                        </form>
                </div>
        )
}

export default Register
