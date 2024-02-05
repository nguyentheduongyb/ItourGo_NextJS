import { Button, TextInput } from 'flowbite-react'
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'

const AuthWithCredential = () => {
        const handleSubmit = async (e: any) => {
                e.preventDefault();
                const email = e.target[0].value
                const password = e.target[1].value
                if (!email || password.length < 8) {
                        return;
                }

                const res = await signIn("credentials", {
                        redirect: false,
                        email,
                        password,
                });
        }
        return (
                <div className="w-full flex justify-center">
                        <form onSubmit={handleSubmit} className="w-[58%] flex flex-col">
                                <div className="mb-5">
                                        <TextInput
                                                placeholder="Email"
                                                required
                                                id="email"
                                                type="email"
                                        // {...register("email")}
                                        />
                                </div>
                                <div className="mb-5">
                                        <TextInput
                                                id="password"
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
                        </form>
                </div>

        )
}

export default AuthWithCredential
