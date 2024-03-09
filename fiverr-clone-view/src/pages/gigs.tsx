import { useQuery } from '@tanstack/react-query'

import GigsCard from "@/components/gigscards/Gigscard"
import GigsMobileCard from "@/components/gigscards/Gigsmobilecard"
import Gigspormotion from "@/components/gigspormotion/Gigspormotion"
import newRequest from '@/utils/newRequest'

import { Skeleton } from '@/components/ui/skeleton'
import { useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { LineChart } from 'lucide-react'





const Gigs = () => {

  const minPriceRef = useRef<HTMLInputElement>(null)
  const maxPriceRef = useRef<HTMLInputElement>(null)

  const obj = JSON.parse(localStorage.getItem('currentUser')!)


  const { search } = useLocation()
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: async () =>
      await newRequest.get(`/gigs?${search}&min=${minPriceRef.current?.value}&max=${maxPriceRef.current?.value}`).then((res) => {
        return res.data
      }),
  })
  let span =  search.split('=')[1]
  useEffect(() => {
    refetch()
    span = search.split('=')[1]
  }, [search])


  return (
    <>
      <div className="font-bold text-2xl p-3 pl-8">
        Hi {obj.username}, What service are you looking for today?
      </div>
      <Gigspormotion />
      <div className="p-3 md:pl-8 font-bold text-lg py-4">
        Most Popular Gigs in <span className="text-blue-600">{span !== undefined ? span : "Fiverr Clone"}</span>
      </div>
      {/* //Mobile Gig card */}
      <div className="md:hidden flex flex-col">
        <GigsMobileCard />
        <GigsMobileCard />
        <GigsMobileCard />
        <GigsMobileCard />
        <GigsMobileCard />
        <GigsMobileCard />
        <GigsMobileCard />
      </div>

      {/* // Desktop Gig card */}
      <div className='flex justify-end text-sm font-bold p-3'>
        <div className='flex flex-col justify-center items-center gap-y-1'>
          <div className='flex items-center gap-x-1'>
            <LineChart size={16}/>
            Sort by price
          </div>
          <div className='flex gap-x-1 justify-center'>
            <input type="number" ref={minPriceRef}
              placeholder='min'
              className='w-20 p-1 border-2 rounded-[5px] hover:border-green-600 outline-none focus:border-green-800 focus:rounded-[5px]'
              min={0}
              onChange={() => {
                refetch()
              }}
            />
            <input type="number" ref={maxPriceRef}
              placeholder='max'
              className='w-20 p-1 border-2 rounded-[5px] hover:border-green-600 outline-none focus:border-green-800 focus:rounded-[5px]'
              min={0}
              onChange={() => { 
                refetch()
              }}
            />
              
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className="hidden md:grid md:grid-cols-5 gap-y-10 gap-x-10">
          {isPending ? <SkeletonGigs /> : error ? <div>error</div> : data?.map((item: any) => <GigsCard key={item.id} gig={item} />)}
        </div>
      </div>
    </>

  )
}

export const SkeletonGigs = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

export default Gigs