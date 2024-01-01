'use client'
import React from "react";
import Link from "next/link";
import Contact from "./Contact";
import { Navbar } from 'flowbite-react';

import { MdKeyboardArrowDown, MdLanguage } from "react-icons/md"
import { FaRegUserCircle } from "react-icons/fa"
import Search from "./Search";

import { usePathname } from 'next/navigation'
import SearchMain from '~/components/Search';
const Header = () => {
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
                                                <Navbar.Brand as={Link} href="https://flowbite-react.com">
                                                        <img src="/itourgo-logo.png" className="mr-3 h-16 sm:h-12" alt="Flowbite React Logo" />
                                                </Navbar.Brand>
                                                <Navbar.Toggle />
                                                <Navbar.Collapse>

                                                        {arr.map((item, index) => (
                                                                <Navbar.Link key={index} href="#">
                                                                        {item.title}
                                                                </Navbar.Link>
                                                        ))}
                                                        <Navbar.Link href="#" className="flex gap-4"><MdLanguage size="26" />
                                                                VN</Navbar.Link>
                                                        <Navbar.Link href="#" className="flex gap-4"><FaRegUserCircle size="26" />Đăng nhập</Navbar.Link>
                                                </Navbar.Collapse>
                                        </Navbar>
                                </div>
                                {/* <div className="w-full h-[64px]">
                                        <div className="flex items-center h-full container justify-between">
                                                <Link href="/"><img className="h-[64px]" src="/itourgo-logo.png" alt="" /></Link>
                                                {pathname === "/" ? "" : <Search />}
                                                <div className="flex gap-4 text-[15px]">
                                                        {arr.map((item, index) => {
                                                                if (item.href) {
                                                                        return (
                                                                                <Link key={index} href={item.href} className="font-medium hover:text-[color:var(--primary-color)] dropdown-hover flex items-center gap-1 relative py-3">{item.title}</Link>
                                                                        )
                                                                }
                                                                return (
                                                                        <div key={index} className="dropdown-hover font-medium flex items-center gap-1 relative py-3 cursor-pointer hover:text-[color:var(--primary-color)]">{item.title}<MdKeyboardArrowDown fontSize={22} />
                                                                                <div className="dropdown-menu w-52 hidden overflow-hidden absolute top-[100%] bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-sm text-">
                                                                                        {item.chidlren?.map((item2: any, index2: number) =>
                                                                                                <div key={index2} className="text-black px-3 border-b last:border-b-0 border-dotted hover:text-[color:var(--primary-color)]">
                                                                                                        {item2?.href ? <Link className="block py-3 w-full" href="">{item2.title}</Link> : item2.title}
                                                                                                </div>
                                                                                        )}
                                                                                </div>
                                                                        </div>
                                                                )
                                                        })}
                                                        <button className="flex items-center gap-2 font-medium rounded-full hover:bg-[#F1F2F3] px-2 text-[#777777]">
                                                                <MdLanguage size="26" />
                                                                VN
                                                        </button>
                                                        <Link href="/auth/login" className="flex items-center bg-transparent uppercase text-[#777777] gap-1">
                                                                <FaRegUserCircle size="26" />
                                                        </Link>
                                                </div>
                                        </div>
                                </div> */}
                        </div >
                        {pathname === "/" ? <SearchMain /> : ""}
                </header>

        )
}
export default Header;