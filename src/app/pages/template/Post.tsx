import React, { useEffect, useState } from 'react'
import { addNewPost, postData } from '@/app/data/postData';
import { Post as PostType } from '@/app/types/PostsType';

export const Post = () => {
    const [post, setPost] = useState('');

    const handlePost = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPost(e.target.value);
    }

    // STILL WORKING ON THAT FIELD OF MAKE A POST, INCREMENT THIS ON ARRAY AND DISPLAY IT.
    useEffect(() => {
        generateRondonId();
    },[post])

    let id: number = 0;
    const generateRondonId = () => {
        let getDateToCreateId = new Date().getMilliseconds();
        getDateToCreateId = id;
    }

    const createANewPost = () => {
        const newPost: PostType = {
            id: post.length+1 as number,
            userId: id as number,
            post: post as string,
            postedBy: 'new user' as string,
            date: new Date().toString() as string,
            avatar: 'https://e7.pngegg.com/pngimages/552/1/png-clipart-dogs-dogs-thumbnail.png' as string,
        };

        addNewPost(newPost);
        setPost('');
    };






    return <>
        <main className=''>
            <section className='mt-6 md:mt-6 lg:mt-16 xl:mt-16 relative'>
                <form action="/" className='flex flex-col items-start gap-4' onSubmit={e => e.preventDefault()}>
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
                            // borderLeft: '.5rem solid #587291' add to the aside below
                            style={{ height: '15rem', }}
                            className='bg-white h-full flex flex-col gap-4 items-center justify-between'
                        >
                            {/* <PostActionButton/> */}
                        </aside>
                    </div>
                    <input
                        type="submit"
                        style={{ background: "#235789" }}
                        className="p-4 text-white font-light text-4sm w-full md:w-2/4 lg:w-128 xl:w-160 cursor-pointer rounded-sm" value="Post"
                        onClick={createANewPost}
                    />
                </form>
            </section>
        </main >
    </>
}
