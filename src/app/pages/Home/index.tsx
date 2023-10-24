import { Header } from '../template/Header'

import React from 'react'
import { Post } from '../template/Post'

export const Home = () => {
    return <>
        <Header />
        <main className='p-8 '>
            <section className='flex flex-col gap-8'>
                <h1
                    style={{ color: "#3066BE", borderLeft: ".8rem solid #B4C5E4" }}
                    className='font-bold sm:text-6xl md:text-3xl lg:text-6xl xl:text-6xl'>Welcome, Gabriel
                </h1>
            </section>
            <Post/>
        </main>
    </>
}
