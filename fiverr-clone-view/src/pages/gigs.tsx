import { useQuery } from '@tanstack/react-query'

import GigsCard from "@/components/gigscards/Gigscard"
import GigsMobileCard from "@/components/gigscards/Gigsmobilecard"
import Gigspormotion from "@/components/gigspormotion/Gigspormotion"
import newRequest from '@/utils/newRequest'

import { Skeleton } from '@/components/ui/skeleton'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { LineChart } from 'lucide-react'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"






const Gigs = () => {


  const fetchGigs = async () => {
    const response = await newRequest.get(`/gigs?page=${pagination}&${search}`);
    console.log(response.data)
    return response.data;
  };

  const navigate = useNavigate();

  const minPriceRef = useRef<HTMLInputElement>(null)
  const maxPriceRef = useRef<HTMLInputElement>(null)

  const [pagination, setPagination] = useState<number>(1)

  const { search } = useLocation()
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: async () =>
      fetchGigs(),
  })

  const handlePageChange = (newPage: number) => {
    setPagination(newPage);
    refetch();
  };

  let span = search.split('=')[1]
  useEffect(() => {
    refetch()
    span = search.split('=')[1]
  }, [search])

  const [username, setUsername] = useState(null);

  useEffect(() => {
    const getUsername = async () => {
      try {
        const res = await newRequest.get('/users');
        setUsername(res.data);
      } catch (error) {
        navigate('/login');
        console.error('Failed to fetch username', error);
      }
    };
    setTimeout(() => {
      if (!username) {
        getUsername();
      }
    }, 1000);

  }, [username]);


  return (
    <>
      <div className="font-bold text-2xl p-3 pl-8">
        Hi {username}, What service are you looking for today?
      </div>
      <Gigspormotion />
      <div className="p-3 md:pl-8 font-bold text-lg py-4">
        {(!span) ? (<>Most Popular Gigs in <span className='text-blue-600'>Fiverr</span></>) : (<>Search Results For  <span className='text-blue-600'>{span}</span></>)}
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
            <LineChart size={16} />
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
      <div className='space-y-5'>
        <div className='flex justify-center'>
          <div className="hidden md:grid md:grid-cols-4 gap-y-10 gap-x-10">
            {isPending ? <SkeletonGigs /> :
              error ?
                <div>error</div> :
                data?.gigs.map((item: any) => <GigsCard key={item.id} gig={item} />)}
          </div>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={() => handlePageChange(pagination - 1 > 0 ? pagination - 1 : 1)} />
            </PaginationItem>

            {data?.totalPages > 1 && data?.totalPages < 4 && [...Array(data?.totalPages + 1).keys()].map((i) => (
              <PaginationItem key={i}>
                <PaginationLink className={`${pagination == i + 1 && 'bg-gray-100'} hover:bg-gray-200`} href="#" onClick={() => handlePageChange(i + 1)}>{i + 1}</PaginationLink>
              </PaginationItem>
            ))}
            {data?.totalPages >= 3 && <PaginationEllipsis />}
            <PaginationItem>
              <PaginationNext href="#" onClick={() => handlePageChange(pagination + 1 < data.totalPages ? pagination + 1 : data.totalPages)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
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