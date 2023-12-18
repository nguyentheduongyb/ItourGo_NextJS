import Header from '~/layout/component/Header'
import Footer from '~/layout/component/Footer'

import type { LayoutProps } from './pageWithLayouts'
const MainLayout: LayoutProps = ({ children }) => {
        return (
                <>
                        <Header />
                        <main>{children}</main>
                        <Footer />
                </>
        )
}
export default MainLayout