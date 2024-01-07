'use client'

import Image from "next/image"

const Error = () => {
        return (
                <div className="container flex justify-center">
                        <div className="mx-auto flex flex-col justify-center items-center gap-4 my-6">
                                <p>Có thể bạn đã có lỗi xảy ra. Rất xin lỗi vì sự bất tiện này</p>
                                <Image src='/images/minion_writing1.png' alt='' width={250} height={250} />
                        </div>

                </div>
        )
}

export default Error
