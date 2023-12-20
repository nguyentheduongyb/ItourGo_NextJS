import { Metadata, ResolvingMetadata } from 'next'
import API from '~/API'
import TourDetail from '~/components/tour/TourDetail'

type Props = {
        params: { slug: string }
}

export async function generateMetadata(
        { params }: Props,
        parent: ResolvingMetadata
): Promise<Metadata> {
        // read route params
        const slug = params.slug
        // fetch data
        const data = await fetch(`http://localhost:8888/api/tour/${slug}`).then((res) => res.json())
        // optionally access and extend (rather than replace) parent metadata
        const previousImages = (await parent).openGraph?.images || []
        return (
                {
                        title: data.name,
                        description: data.description,
                        openGraph: {
                                images: ['/some-specific-page-image.jpg', ...previousImages],
                        },

                }

        )
}

export default async function Page({ params }: Props) {
        const data = await fetch(`http://localhost:8888/api/tour/${params.slug}`).then((res) => res.json())
        return (
                <div className='container'>
                        <TourDetail data={data} />
                </div>
        )

}