import { Gig } from '@/types/gig'
import newRequest from '@/utils/newRequest'
import { useQuery } from '@tanstack/react-query'

const SellerGigs = () => {
    const { data } = useQuery<Gig[]>({
        queryKey: ['userGigs'],
        queryFn: async () => {
            return await newRequest.get('/gigs/gigsUser').then((res) => {
                console.log(res.data)
                return res.data
            })
        }

    })
    return (
        <div>
            {data?.length !== 0 ? <div>
                {data?.map((gig) => {
                    return (
                        <div key={gig._id}>
                            <div>{gig.title}</div>
                            <div>{gig.shortDesc}</div>
                            <div>{gig.price}</div>
                        </div>
                    )
                })}
            </div> :
                <h1 className='p-10 text-3xl '>
                    You don't have any gigs!
                </h1>}
        </div>
    )
}

export default SellerGigs