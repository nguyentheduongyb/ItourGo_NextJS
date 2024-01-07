import { Metadata, ResolvingMetadata } from 'next'
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
        const data = await fetch(`https://backend-itourgo.onrender.com/api/tour/${slug}`).then((res) => res.json())

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
export default async function getServerSideProps({ params }: Props) {
        const res = await fetch(`https://backend-itourgo.onrender.com/api/tour/${params.slug}`)
        const data = await res.json()

        if (!data) {
                return {
                        notFound: true,
                }
        }

        return (
                <div>
                        <TourDetail data={data} />
                </div>
        )
}