import { postData } from '@/app/data/postData'
import React from 'react'

export const Posts = () => {
  return <>
    {postData.map((item) => (

      <div className='w-full md:w-2/4 lg:w-128 xl:w-160 rounded-sm p-4 text-4sm' style={{ height: '15rem', background: '#F8FFF4' }} key={item.id}>
        <div className='flex items-center'>
          <img src={item.avatar} alt={item.postedBy} className='w-20 h-20 object-cover rounded-full' />
          <div className="ml-4 flex flex-col gap-2 items-baseline">
            <h2 className='text-2xl font-semibold' style={{ color: '#0E79B2' }}>#{item.userId} name</h2>
            <span className='' style={{ color: '#BF1363' }}>{item.date}</span>
          </div>
        </div>
        <p
          className='my-6'
          style={{ color: '#191923' }}>
          {item.post}
        </p>
      </div>
    ))}
  </>
}
