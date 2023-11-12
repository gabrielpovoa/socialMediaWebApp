import { UserLoginContext } from '@/contexts/LoginUser'
import React, { useContext } from 'react'

export const UserProfile = () => {
    const defaultAvatar = 'https://i.stack.imgur.com/l60Hf.png'
    const usernameCtx = useContext(UserLoginContext)

    return <>
        <div className='w-20 h-20 flex items-end gap-8'>
            <img
                src={usernameCtx?.photo ? usernameCtx.photo : defaultAvatar}
                alt=""
                style={
                    {
                        boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)'
                    }
                }
                className='w-full h-full rounded-full object-cover'
            />
            <p>
                {usernameCtx?.name}
            </p>
        </div>
    </>
}
