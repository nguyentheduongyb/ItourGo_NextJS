'use client'
import React from 'react'
import { Breadcrumb } from 'flowbite-react';

const Navigation = () => {
        return (
                <>
                        <Breadcrumb aria-label="Solid background breadcrumb example" className="my-6 px-5 py-3 dark:bg-gray-800">
                                <Breadcrumb.Item href="#">
                                        Home
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
                        </Breadcrumb>
                </>

        )
}

export default Navigation
