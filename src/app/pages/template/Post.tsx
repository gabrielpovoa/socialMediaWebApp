import React, { useState } from 'react'
import { PostActionButton } from './PostActionButton';

export const Post = () => {
    const [post, setPost] = useState('');

    const handlePost = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPost(e.target.value);
    }

    return <>
        <main>
            <section className='mt-6 md:mt-6 lg:mt-16 xl:mt-16'>
                <form action="" className='flex flex-col items-start gap-4' onSubmit={e => e.preventDefault()}>
                    <label>Post your thoughts here</label>
                    <div className='w-full flex items-start justify-start'>
                        <textarea
                            name="postField"
                            style={{ height: '15rem', border: '.2rem solid #FDFFFC' }}
                            className=" p-4 text-4sm resize-none w-full md:w-2/4 lg:w-128 xl:w-160 rounded-sm"
                            placeholder='What are you thinking 🤔?'
                            value={post}
                            onChange={handlePost}
                        >
                        </textarea>
                        <aside
                            style={{ height: '15rem', borderLeft: '.5rem solid #587291' }}
                            className='bg-white h-full flex flex-col gap-4 items-center justify-between'
                        >
                            <PostActionButton/>
                        </aside>
                    </div>
                    <input
                        type="submit"
                        style={{ background: "#235789" }}
                        className="p-4 text-white font-light text-4sm w-full md:w-2/4 lg:w-128 xl:w-160 cursor-pointer rounded-sm" value="Post"
                    />
                </form>
            </section>
        </main >
    </>
}
