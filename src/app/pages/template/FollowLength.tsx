import { useFollower } from '@/contexts/Follower'
import React from 'react'

export const FollowLength = () => {
    const follow = useFollower();

    return (
        <section className='bg-gray-50 rounded-md flex flex-col p-7 w-[30rem] shadow-md hover:bg-[#f2f2f2]'>
            <h1 className='font-bold text-2xl text-blue-600'>Following</h1>
            <span className='mt-[3rem] text-[1.4rem] bg-[#CCC] text-[#454545] text-center p-3 rounded-md w-[10rem] max-[w-100%]:'>{follow?.followingCount}</span>
        </section>
    )
}
