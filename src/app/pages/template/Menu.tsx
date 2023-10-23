import React, { useState } from 'react'

type Props = {
    closeModal: () => void;
}

export const Menu = ({ closeModal }: Props) => {

    return (
        <section
            style={{
                borderTop: "1rem solid #0C1821",
                backgroundColor: '#1B2A41',
                color: "#DDE1E4"
            }}
        >
            <div
                onClick={closeModal}
                className="text-end text-2xl cursor-pointer">
                [X]
            </div>
            <nav className='hamburger '>
                <ul className='sm:gap-0 md:gap-4 lg:gap-6 xl:gap-6'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">People</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
        </section>
    )
}
