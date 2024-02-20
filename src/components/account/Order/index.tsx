'use client'
import Item from "./Item"
import { urlAPI } from "~/utils/API"
import Tab from "./Tab"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"

const Ordered = () => {
        const { data }: any = useSession()
        const [results, setResults] = useState([])
        useEffect(() => {
                fetch(`${urlAPI}/api/booking/${data && data.user.email}`)
                        .then(response => response.json())
                        .then(data => {
                                setResults(data)
                        })
                        .catch(error => {
                                console.error('Error:', error);
                        });
        }, [data])


        return (
                <div className="w-full">
                        <Tab />
                        <div className="space-y-4">
                                {results.map((item: any, index: number) =>
                                        <Item key={index} item={item} />
                                )}
                        </div>
                </div>
        )
}
export default Ordered