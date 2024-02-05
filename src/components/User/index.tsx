import { signOut, useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Popper from './Popper'
// import Menu from '~/components/popper/Menu'
import { FaRegUserCircle, FaUserCircle } from 'react-icons/fa'
import { BsCoin, BsGear } from 'react-icons/bs'
import { CiLogout } from 'react-icons/ci'
import Link from 'next/link'

const Auth = () => {
        const { data } = useSession()
        const [show, setShow] = useState(false)
        const userMenu = [
                {
                        icon: <FaUserCircle />,
                        title: 'View profile',
                        to: '/account?tab=profile',
                },
                {
                        icon: <BsCoin />,
                        title: 'Get coins',
                        to: '/coin',
                },
                {
                        icon: <BsGear />,
                        title: 'Settings',
                        to: '/settings',
                },
                {
                        icon: <CiLogout />,
                        title: 'Log out',
                        onClick: () => signOut(),
                        separate: true,
                },
        ];
        return (
                data ? (
                        <>
                                {/* <Cart>
                                        <button>
                                                <CgShoppingCart className="text-[color:var(--secondary-color)]" fontSize={30} />
                                        </button>
                                </Cart> */}
                                {/* <Menu items={userMenu}> */}
                                <Link href="/account?tab=order" className="mx-4 cursor-pointer w-[30px] h-[30px] bg-no-repeat bg-center bg-cover rounded-full" style={{ backgroundImage: `url("${data?.user?.image}")` }}>
                                </Link>
                                {/* </Menu> */}

                        </>
                ) : (
                        <>
                                <button onClick={() => { setShow(true) }} className="flex gap-4 items-center"><FaRegUserCircle size="26" />Đăng nhập</button>
                                <Popper show={show} setShow={setShow} />
                        </>
                )
        )
}

export default Auth
