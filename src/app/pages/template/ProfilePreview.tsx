import { UserLoginContext } from '@/contexts/LoginUser'
import React, { useContext } from 'react'

export const ProfilePreview = () => {
    const photoFilePreview = useContext(UserLoginContext)
    return <>
        {!photoFilePreview?.photo || photoFilePreview.photo !== null &&
            <section className='bg-gray-50 max-w-full w-3/6 p-7 flex flex-col items-start felx-1 gap-8' style={{
                boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)'
            }}>
                <h1 className='text-center font-bold text-3xl'>Preview</h1>
                <img
                    src={photoFilePreview?.photo}
                    alt=""
                    className='w-2/3 h-80 object-cover rounded'

                />
                <h2 className='text-gray-600 font-4xl font-semibold'>name</h2>
            </section>
        }
    </>
}
