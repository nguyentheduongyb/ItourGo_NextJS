import type { LayoutProps } from './pageWithLayouts'
const NoLayout: LayoutProps = ({ children }) => {
        return (
                <>
                        {children}
                </>
        )
}
export default NoLayout