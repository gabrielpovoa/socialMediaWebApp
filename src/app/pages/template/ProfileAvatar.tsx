import { useAuthUser } from '@/contexts/LoginUser'
import React from 'react'

export const UserProfile = () => {
    const defaultAvatar = 'https://i.stack.imgur.com/l60Hf.png'
    const usernameCtx = useAuthUser();

    return <>
        <div className='w-20 h-20 flex items-end gap-8 pointer-events-none'>
            <img
                src={usernameCtx?.photo ? usernameCtx.photo : defaultAvatar}
                alt=""
                style={
                    {
                        boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)'
                    }
                }
                className="flex-none md:w-full md:h-full rounded-full object-cover hidden md:block"
            />
            <p className="hidden md:block"
            >
                {usernameCtx?.name}
            </p>
        </div>
    </>
}
