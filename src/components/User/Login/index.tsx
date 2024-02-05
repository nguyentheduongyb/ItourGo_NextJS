import React, { useState } from 'react'
import AuthMain from '../AuthMain'
import AuthWithCredential from '../AuthWithCredential'

const Login = ({ tab, setTab }: any) => {
        return (
                <>
                        <div className="justify-center w-full">
                                <h3 className='font-bold text-[24px] text-center'>Chào mừng bạn đến với Entidy</h3>
                                <p className='my-8 text-xs text-red-500 text-center'>Vui lòng đăng nhập đặt khách sạn và thanh toán phòng của bạn.</p>
                        </div>
                        {
                                tab == 0 ?
                                        <AuthMain setTab={setTab} />
                                        : <AuthWithCredential />
                        }
                        <div className="my-6 text-[#67748e] text-center"><p>Bạn đã có tài khoản? <button onClick={() => { setTab(2) }} className="cursor-pointer text-[color:var(--primary-color)]">Đăng ký</button></p></div >
                </>
        )
}

export default Login
