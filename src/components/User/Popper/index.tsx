import { Modal } from 'flowbite-react'
import React, { useState } from 'react'
import Login from '../Login'
import Register from '../Register'
import { IoIosArrowBack } from 'react-icons/io'

const Popper = ({ show, setShow }: any) => {
        const [tab, setTab] = useState(0)
        const [content, setContent] = useState("")
        const renderContent = () => {
                switch (tab) {
                        case 0: return <Login tab={tab} setTab={setTab} />;
                        case 2: return <Register setTab={setTab} />;
                        default: return <Login />
                }
        }
        return (
                <Modal show={show} size="xl" onClose={() => { setShow(false) }} popup>
                        <Modal.Header />
                        <Modal.Body>
                                {tab == 0 ? "" : <button onClick={() => { setTab(0) }}>
                                        <IoIosArrowBack size="24" color="gray" />
                                </button>}
                                {renderContent()}
                                <p className='mx-4 text-xs text-center'>Việc bạn tiếp tục sử dụng trang web này đồng nghĩa với việc bạn đồng ý với <span className="cursor-pointer text-[color:var(--primary-color)] underline">Điều khoản sử dụng </span>của chúng tôi.</p>
                        </Modal.Body>
                </Modal>
        )
}

export default Popper
