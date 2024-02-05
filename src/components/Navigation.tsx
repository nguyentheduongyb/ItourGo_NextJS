'use client'
import React from 'react'
import { Breadcrumb } from 'flowbite-react';

const Navigation = ({ navigation }: any) => {
        return (
                <>
                        <Breadcrumb aria-label="Solid background breadcrumb example" className="py-3 dark:bg-gray-800">
                                <Breadcrumb.Item href="#">
                                        Trang chủ
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>{navigation}</Breadcrumb.Item>
                        </Breadcrumb>
                </>

        )
}

export default Navigation
