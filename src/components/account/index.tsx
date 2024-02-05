import { useEffect, useState } from 'react';
import Profile from './Profile';
import Ordered from './Order';
import { useSearchParams } from 'next/navigation';


const Content = () => {
        const searchParams = useSearchParams()

        const tab = searchParams.get('tab')

        const [content, setContent] = useState(tab)
        useEffect(() => {
                setContent(tab)
        }, [tab])
        switch (content) {
                case "profile":
                        return <Profile />
                case "visa":
                        return <Profile />
                case "order":
                        return <Ordered />
                default:
                        return <Profile />
        }

}
export default Content