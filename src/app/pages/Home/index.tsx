import { Header } from '../template/Header'

import React, { useContext } from 'react'
import { Post } from '../template/Post'
import { FriendList } from '../template/FriendList'
import { UserLoginContext } from '@/contexts/LoginUser'

export const Home = () => {
    const usernameCtx = useContext(UserLoginContext);
    return <>
        <Header />
        <main className='p-8 relative'>
            <section className='flex flex-col gap-8'>
                <h1
                    style={{ color: "#3066BE", borderLeft: ".8rem solid #B4C5E4" }}
                    className='font-bold sm:text-6xl md:text-3xl lg:text-6xl xl:text-6xl'>Welcome, {usernameCtx?.name}
                </h1>
            </section>
            <Post />
            <aside
                className='hidden p-8 flex-col justify-start items-baseline scroll-container overflow-y-auto h-full absolute top-0 right-0 bottom-0 mt-6 md:w-60 md:flex sm:w-72 lg:w-72 xl:w-72'>
                <h1 className='text-2xl text-center mb-8 font-bold'>Online Friends</h1>
                <FriendList />
            </aside>
        </main>
    </>
}
