import { NotificationType } from '@/app/types/notificationType'
import React from 'react'

// interface Props {
//     id:number
//     label: string,
//     date: string,
//     description: string,
// }

export const Notifications = ({ label, date, description, id }: NotificationType) => {
    return <>
        <div key={id} className=' p-4 max-h-full cursor-pointer hover:opacity-80' style={{background: "#F0EDEE", borderBottom: ".1rem solid #F6F8FF"}}>
            <div className='flex items-start justify-between gap-4'>
                <h2 className='text-2sm font-bold mb-4'>{label}</h2>
                <span className='text-gray-400 font-semibold'>({date})
                </span>
            </div>
            <p>{description}</p>
           
        </div>
    </>
}
