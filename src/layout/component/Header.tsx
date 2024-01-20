'use client'
import React, { useState } from "react";
import Link from "next/link";
import Contact from "./Contact";
import { Navbar } from 'flowbite-react';
import User from "~/app/auth/User"
import { MdLanguage } from "react-icons/md"
import { FaSearch } from "react-icons/fa"

import { usePathname } from 'next/navigation'
import SearchMain from '~/components/Search';
const Header = () => {
        const [show, setShow] = useState(false)
        const pathname = usePathname()
        const arr = [
                {
                        title: "Điểm đến",
                        chidlren: [
                                {
                                        title: "Miền Bắc",
                                        href: "/aaa"

                                },
                                {
                                        title: "Miền Nam",
                                        href: "/aaa"
                                },
                                {
                                        title: "Miền Trung",
                                        href: "/aaa"
                                },
                                {
                                        title: "Nước Ngoài",
                                        href: "/aaa"
                                },
                        ]
                },
                {
                        title: "Phong cách",
                        href: "/adventure",
                },
                {
                        title: "Về chúng tôi",
                        href: "/about?tab=1",
                },
                {
                        title: "Blog",
                        href: "/blog",
                },
        ]
        return (
                <header>
                        <div className="w-full bg-white sticky top-0 z-[40] shadow-sm">
                                <Contact />
                                <div className="container">
                                        <Navbar fluid rounded>
                                                <Navbar.Brand as={Link} href="/">
                                                        <img src="/itourgo-logo.png" className="mr-3 h-16 sm:h-12" alt="Flowbite React Logo" />
                                                </Navbar.Brand>
                                                <div className="pl-2 h-[42px] flex items-center bg-[#F1F1F2] rounded-full">
                                                        <input className="border-transparent w-64 bg-[transparent] caret-[#fe2c55] text-xs h-full focus:outline-none focus:border-[transparent] focus-input-none flex items-center placeholder-gray-600" type="text" placeholder="Nhập địa điểm bạn muốn đến?" />
                                                        <i className="w-[1px] h-[68%] bg-[#D7D7D9]"></i>
                                                        <button className="px-3 h-full"><FaSearch color="#A6A6AA" /></button>
                                                </div>
                                                <Navbar.Toggle />
                                                <Navbar.Collapse>

                                                        {arr.map((item, index) => (
                                                                <Navbar.Link key={index} href="#">
                                                                        {item.title}
                                                                </Navbar.Link>
                                                        ))}
                                                        <Navbar.Link href="#" className="flex gap-4 items-center"><MdLanguage size="26" />
                                                                VN</Navbar.Link>
                                                        <User />
                                                </Navbar.Collapse>
                                        </Navbar>
                                </div>
                        </div >
                        {pathname === "/" ? <SearchMain /> : ""}

                </header>

        )
}
export default Header;