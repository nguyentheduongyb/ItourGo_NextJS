import { Radio, TextInput, Label } from 'flowbite-react'
import React from 'react'

const Profile = () => {
        return (
                <div className="flex-1 bg-gradient-to-r from-slate-50 to-cyan-50 text-black rounded p-5">
                        <div className="h-[80px] border-b">
                                <div>
                                        <h5 className="font-bold mb-4">Hồ sơ của tôi</h5>
                                        <p className="text-sm italic">Quản lý thông tin tài khoản để bảo mật tài khoản</p>
                                </div>

                        </div>
                        <form className="w-[600px] mt-5" action="">
                                <table className="w-full">
                                        <tbody>
                                                <tr className="flex gap-5 mb-5 items-center">
                                                        <td className="text-end min-w-[20%]">Tên đăng nhập</td>
                                                        <td>entidy</td>
                                                </tr>
                                                <tr className="flex gap-5 mb-5 items-center">
                                                        <td className="text-end min-w-[20%]">Tên</td>
                                                        <td><TextInput
                                                                name="text"
                                                                placeholder="Tên của bạn"
                                                                required
                                                                className="w-full"
                                                                type="password"
                                                        /></td>
                                                </tr>
                                                <tr className="flex gap-5 mb-5 items-center">
                                                        <td className="text-end min-w-[20%]">Email</td>
                                                        <td><span>nguyentheduongyb@Gmail.com</span><i className="cursor-pointer ml-4 text-xs underline text-cyan-400">Thay đổi</i></td>
                                                </tr>
                                                <tr className="flex gap-5 mb-5 items-center">
                                                        <td className="text-end min-w-[20%]">Số điện thoại</td>
                                                        <td><span>0985444759</span><i className="cursor-pointer ml-4 text-xs underline text-cyan-400">Thay đổi</i></td>
                                                </tr>
                                                <tr className="flex gap-5 mb-5 items-center">
                                                        <td className="text-end min-w-[20%]">Giới tính</td>
                                                        <td className="flex">
                                                                <div className="flex items-center mr-5 gap-3">
                                                                        <Radio
                                                                                defaultChecked
                                                                                id="male"
                                                                                name="gender"
                                                                                value="male"
                                                                        />
                                                                        <Label htmlFor="male">
                                                                                Nam
                                                                        </Label>
                                                                </div>
                                                                <div className="flex items-center mr-5 gap-3">
                                                                        <Radio
                                                                                defaultChecked
                                                                                id="female"
                                                                                name="gender"
                                                                                value="female"
                                                                        />
                                                                        <Label htmlFor="male">
                                                                                Nữ
                                                                        </Label>
                                                                </div>
                                                                <div className="flex items-center mr-5 gap-3">
                                                                        <Radio
                                                                                id="other"
                                                                                name="gender"
                                                                                value="other"
                                                                        />
                                                                        <Label htmlFor="other">
                                                                                Khác
                                                                        </Label>
                                                                </div>
                                                        </td>
                                                </tr>
                                                <tr className="flex gap-5 mb-5 items-center">
                                                        <td className="text-end min-w-[20%]">Ngày sinh</td>
                                                        <td className="flex">
                                                        </td>
                                                </tr>
                                        </tbody>
                                </table>
                        </form>
                </div>
        )
}

export default Profile
