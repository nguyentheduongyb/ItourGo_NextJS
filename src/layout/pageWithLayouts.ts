import { NextPage } from 'next'
import type { ReactElement } from 'react'
import MainLayout from './MainLayout'
import NoLayout from './NoLayout'
export type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout }
export type PageWithAdminLayoutType = NextPage & { layout: typeof NoLayout }
export type PageWithLayoutType =
        | PageWithMainLayoutType
        | PageWithAdminLayoutType
export type LayoutProps = ({
        children,
}: {
        children: ReactElement
}) => ReactElement
export default PageWithLayoutType