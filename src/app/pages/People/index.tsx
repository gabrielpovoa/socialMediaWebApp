import React, { useState } from 'react'
import { ButtonFollow } from '../template/ButtonFollow';
import { UserType } from '@/app/types/userType';

const img = "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSclQZplTElYqQQsiWAl-OPA4JvJptEUEqAVFee9aUG7LkIPpNHXOtU6MyCH6giD_ug0T9p97u5hu0oMLs";



export const People = ({ name, avatar, id }: UserType) => {
    const [buttonLabel, setButtonLabel] = useState('Follow');

    const handleFollowButton = () => {
        if (buttonLabel === 'Follow') {
            setButtonLabel('Following')
        } else {
            setButtonLabel('Follow')
        }
    }

    return <>
        <section id="followUser" key={id}>
            <div className='
                bg-neutral-50
                flex 
                flex-col 
                items-center 
                justify-center 
                max-w-full
                max-h-full
                mt-8
                rounded'
            >
                <div className="">
                    <img
                        src={avatar}
                        alt=""
                        className='object-cover w-full'
                    />
                </div>
                <div className="flex items-center flex-col gap-3 p-4 w-full "
                    style={{ background: "#dcdcdc" }}
                >
                    <p className='text-2xl text-blue-600 font-semibold'>{name}</p>
                    <ButtonFollow
                        label={buttonLabel}
                        onClick={handleFollowButton}
                        background="#F4743B"
                    />

                </div>
            </div>
        </section>
    </>
}
