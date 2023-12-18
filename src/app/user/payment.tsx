'use client'
import { Fragment, useState, useContext } from "react"
import { redirect } from 'next/navigation'
import Link from "next/link"
import axios from 'axios';
import { Checkbox, Label, Button, TextInput, Tooltip, Modal } from "flowbite-react"
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'

import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Router } from "next/router";
import { count } from "console";


const Payment = () => {
        const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'VND',
                minimumFractionDigits: 0
        })
        const searchParams = useSearchParams()
        const { push } = useRouter();
        const totalP = searchParams.get('totalPrice')
        const count1 = searchParams.get('quantity1')
        const count2 = searchParams.get('quantity2')
        const price = searchParams.get('price')
        const sub = !!searchParams.get('isSubscribed')
        const [show, setShow] = useState(false)
        const [confirm, setConfirm] = useState(false)
        const [quantity, setQuantity] = useState(1)
        // const [price, setPrice] = useState(150000)
        // const [total, setTotal] = useState(price)
        const transferMessage = "entidy"
        const [imageQR, setImageQR] = useState('')
        const getQRCode = () => {
                axios.post("https://api.vietqr.io/v2/generate",
                        {
                                accountNo: "9985444759",
                                accountName: "NGUYEN THE DUONG",
                                acqId: "970436",
                                addInfo: "entidy",
                                template: "print",

                        },
                        {
                                headers: {
                                        'x-client-id': '81e76f80-985c-4ba9-b41b-ee2030837574',
                                        'x-api-key': 'b1f8ac6f-7946-41bf-9492-7ee14802868f'
                                },

                        })
                        .then((data) => {
                                setImageQR(data.data.data.qrDataURL)
                                setShow(true)
                        })
                        .catch((err) => {
                                console.log(err);

                        })
        }

        const handleSuccess = () => {


                setConfirm(false)
                setShow(false)
                push('/account?tab=order')
        }
        const handleCancel = () => {
                setConfirm(false)
                setShow(false)
        }
        return (
                <div>
                        <div className="bg-[#f5f5f5] py-5">
                                <div className="container">
                                        <div className="p-5 bg-white rounded-xl mb-6 flex justify-between">
                                                <p className="text-2xl font-medium">Thanh toán dịch vụ của bạn</p>
                                                <button className="px-4 py-2 rounded-full bg-teal-500 text-sm text-white font-bold">Hỗ trợ thanh toán</button>
                                        </div>
                                        <div className="px-8 py-8 pb-0 mb-4 bg-white rounded">
                                                <div className="">
                                                        <div className="flex items-center mb-4">
                                                                <p className="flex-1">Sản phẩm</p>
                                                                <p className="w-40 text-center text-center">Đơn giá</p>
                                                                <p className="w-24 text-center">Số lượng</p>
                                                                <p className="w-40 text-center">Thành tiền</p>
                                                        </div>
                                                        <div className="flex gap-4 mb-4 items-center">
                                                                <p className="text-[color:var(--primary-color)] text-xl font-medium">PNGSOFT</p>
                                                                <span>|</span>
                                                                <button>Chat ngay</button>
                                                        </div>
                                                        <div className="flex mb-4 gap-4">
                                                                <div className="flex gap-2 items-center">
                                                                        <div className="bg-no-repeat bg-center bg-cover w-24 h-24 rounded" style={{ backgroundImage: 'url("https://cdn2.ivivu.com/2023/04/12/14/ivivu-dali.gif")' }}></div>
                                                                        <div className="flex-1">
                                                                                <p className="text-lg">Tour Trung Quốc 6N5Đ : Hà Nội - Hà Khẩu - Đại Lý - Lệ Giang - Shangrila</p>
                                                                                <p className="text-[#ccc] text-sm">Loại: Tour</p>
                                                                        </div>
                                                                </div>
                                                                <div className="h-24 flex flex-col justify-between">
                                                                        <div className="flex gap-3">
                                                                                <div className="w-24">Người lớn</div>
                                                                                <div className="flex">
                                                                                        <p className="w-40 text-center font-semibold">{formatter.format(Number(price))}</p>
                                                                                        <p className="w-24 text-center ">{count1}</p>
                                                                                        <p className="w-40 text-center font-semibold">{formatter.format(Number(price) * Number(count1))}</p>
                                                                                </div>

                                                                        </div>
                                                                        <div className="flex gap-3">
                                                                                <div className="w-24">Trẻ em</div>
                                                                                <div className="flex">
                                                                                        <p className="w-40 text-center font-semibold">{formatter.format(Number(price) / 2)}</p>
                                                                                        <p className="w-24 text-center ">{count2}</p>
                                                                                        <p className="w-40 text-center font-semibold">{formatter.format(Number(price) * Number(count2) / 2)}</p>
                                                                                </div>

                                                                        </div>
                                                                </div>
                                                        </div>

                                                </div>
                                                <div className="border-y flex justify-end gap-60 py-4 text-sm">
                                                        <div className="flex gap-3">
                                                                <input className="mt-3" type="checkbox" checked
                                                                />
                                                                <div className="w-24">Phụ thu phòng đơn</div>
                                                                <div className="flex">
                                                                        <p className="w-40 text-center font-semibold">{formatter.format(2000000)}</p>
                                                                </div>

                                                        </div>

                                                </div>
                                                <div className="border-y flex justify-end gap-60 py-4 text-sm">
                                                        <div className="flex gap-3">
                                                                <div className="w-24">Giảm giá</div>
                                                                <div className="flex">

                                                                        <p className="w-40 text-center font-semibold">-{formatter.format(1000000)}</p>
                                                                </div>

                                                        </div>

                                                </div>
                                                <p className="py-3 text-end border-b ">Tổng số tiền:  <span className="font-medium text-2xl text-orange-500 ml-1">{totalP}</span></p>

                                                <div className="flex py-3 justify-between">
                                                        <div className="flex items-center w-4/12 gap-4 pr-8 border-r">
                                                                <Label>Lời nhắn:</Label>
                                                                <TextInput className="flex-1" placeholder="Lưu ý cho người bán"></TextInput>
                                                        </div>
                                                        <button onClick={getQRCode} className="py-2 px-4 bg-[color:var(--primary-color)] text-white font-bold rounded-xl">Thanh toán</button>
                                                </div>
                                        </div>

                                </div>
                        </div>

                        <Modal show={show} size="lg" onClose={() => { setConfirm(true) }}>
                                <Modal.Header className="p-2" />
                                <h1 className="text-center text-2xl uppercase mt-2 text-medium">Thanh toán tour du lịch</h1>
                                <Modal.Body>
                                        <div className="border rounded flex flex-col items-center justify-center pb-6">
                                                <img className="w-full" src={imageQR} alt="" />
                                                <Button className="rounded-full" color="success" onClick={handleSuccess}>Đã chuyển tiền! Thông báo cho người bán</Button>
                                        </div>

                                </Modal.Body>
                        </Modal>

                        <Modal show={confirm} size="md" popup>
                                <Modal.Body className="pt-4">
                                        <div className="text-center">
                                                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                                        Nếu bạn đã thanh toán dịch vụ này! Vui lòng chọn đã thanh toán
                                                </h3>
                                                <div className="flex justify-center gap-4">
                                                        <Button color="success" onClick={handleSuccess}>
                                                                Tôi đã thanh toán
                                                        </Button>
                                                        <Button color="failure" onClick={handleCancel}>
                                                                Tôi muốn hủy
                                                        </Button>
                                                </div>
                                        </div>
                                </Modal.Body>
                        </Modal>
                </div>

        )
}
export default Payment