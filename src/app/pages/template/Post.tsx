import React, { useContext, useEffect, useState } from 'react'
import { addNewPost } from '@/app/data/postData';
import { Post as PostType } from '@/app/types/PostsType';
import { Posts } from './Posts';
import { api } from '@/api/Api';

export const Post = () => {
    const defaultAvatar = 'https://i.stack.imgur.com/l60Hf.png'
    const [post, setPost] = useState('');
    const [error, setError] = useState('');
    const [json, setJson] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        getDataFromApi();
        // getDataFromRondomNameApi()
    })

    const getDataFromApi = async () => {
        let json = await api.getUserAvatar();
        setJson(json.message)
    }

    const handlePost = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPost(e.target.value);
    }

    const handleWithWhiteSpace = () => {
        return post.trim() === '';
    }


    const createANewPost = () => {
        if (handleWithWhiteSpace()) {
            setError('You need to write down a post to display it.');
        } else {
            const newPost: PostType = {
                id: new Date().getMilliseconds() as number,
                userId: new Date().getMilliseconds() as number,
                post: post as string,
                postedBy: `User - ${new Date().getMilliseconds() as number}`,
                date: `${new Date().toLocaleDateString()} - ${new Date().getHours()}:${new Date().getMinutes()}`,
                avatar: json || defaultAvatar,
            };

            addNewPost(newPost);
            setPost('');
            setError('');
        }
    };



    return <>
        <main className=''>
            <section className='mt-6 md:mt-6 lg:mt-16 xl:mt-16 '>
                <form action="/" className='flex flex-col items-start gap-4' onSubmit={e => e.preventDefault()}>
                    <label htmlFor="postField" className='text-2xl my-4'>Post your thoughts here</label>
                    <div className='w-full flex items-start justify-start'>
                        <textarea
                            id='postField'
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
                        </aside>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    {handleWithWhiteSpace() ? (
                        <input
                            disabled={true}
                            type="submit"
                            style={{ background: "#235789" }}
                            className="p-4 hidden text-white font-light text-4sm w-full md:w-2/4 lg:w-128 xl:w-160 cursor-not-allowed rounded-sm"
                            value="Post"
                        />
                    ) : (
                        <input
                            type="submit"
                            style={{ background: "#235789" }}
                            className="p-4 text-white font-light text-4sm w-full md:w-2/4 lg:w-128 xl:w-160 cursor-pointer rounded-sm"
                            value="Post"
                            onClick={createANewPost}
                        />
                    )}
                </form>
            </section>

            <section className='flex flex-col flex-1 gap-8 mt-8'>
                <Posts />
            </section>
        </main >
    </>
}
