'use client'
import { Label, Radio, TextInput, Select } from 'flowbite-react'
import React, { useState } from 'react'

const MethodPayment = () => {
        const [method, setMethod] = useState('card')
        const handlerChangeMethod = (value: any) => {
                setMethod(value)
        }
        return (
                <div className='space-y-4 w-full mt-4'>
                        <div className='shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-lg' onChange={() => { handlerChangeMethod('card') }}>
                                <div className="flex items-center justify-between p-3">
                                        <div className='flex gap-3 items-center'>
                                                <Radio id="method-payment" name="method-payment" value="card" defaultChecked checked={method == 'card'} />
                                                <span>Thanh toán bằng thẻ</span>
                                        </div>
                                        <div className='flex gap-4'>
                                                <img className='w-8' src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="" />
                                                <img className='w-8' src="https://vudigital.co/wp-content/uploads/2022/04/8.webp" alt="" />
                                                <img className='w-8' src="https://vudigital.co/wp-content/uploads/2022/04/8.webp" alt="" />
                                        </div>
                                </div>

                                <div className={`${method === 'card' ? 'block' : 'hidden'} px-3 py-6 border-t-2`}>
                                        <form className='w-3/5 space-y-4'>
                                                <div>
                                                        <Label htmlFor="first-name" value="Tên chủ thẻ" />
                                                        <TextInput id="first-name" type="text" required shadow />
                                                </div>
                                                <div>
                                                        <Label htmlFor="email" value="Số thẻ" />
                                                        <TextInput id="email" type="number" required shadow />
                                                </div>
                                                <div>
                                                        <Label htmlFor="email" value="Ngày hết hạn" />
                                                        <TextInput id="email" type="text" placeholder="MM/YY" required shadow />
                                                </div>
                                                <div>
                                                        <Label htmlFor="ccv" value="CCV" />
                                                        <TextInput id="ccv" type="number" placeholder="123" required shadow />
                                                </div>
                                                <div className='space-y-3'>
                                                        <Label htmlFor="ccv" value="Quốc Gia* & Zip Code*" />
                                                        <div className="max-w-md">
                                                                <Select id="nationality" required>
                                                                        <option>Chọn quốc gia của bạn</option>
                                                                        <option>Canada</option>
                                                                        <option>France</option>
                                                                        <option>Germany</option>
                                                                </Select>
                                                        </div>
                                                        <div>
                                                                <Label htmlFor="ccv" value="Zip Code" />
                                                                <TextInput id="ccv" type="number" required shadow />
                                                        </div>
                                                </div>

                                        </form>
                                </div>
                        </div>
                        <div className='shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-lg' onChange={() => { handlerChangeMethod('transfer') }}>
                                <div className='flex items-center justify-between p-3'  >
                                        <div className='flex gap-3 items-center'>
                                                <Radio id="method-payment" name="method-payment" checked={method === 'transfer'} value="transfer" />
                                                <span>Thanh toán chuyển khoản ngân hàng</span>
                                        </div>
                                </div>
                                <div className={`${method === 'transfer' ? 'block' : 'hidden'} px-3 py-6 border-t-2`}>
                                        <p>Bấm vào đây để thực hiện chuyển khoản ngân hàng</p>
                                        <button className='rounded-md  mt-2 px-6 py-2 text-sm bg-[#019CDE] font-bold text-white'>Lấy thông tin</button>
                                </div>
                        </div>
                </div>
        )
}

export default MethodPayment
