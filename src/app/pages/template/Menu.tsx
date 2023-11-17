import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {
    closeModal: () => void;
}

export const Menu = ({ closeModal }: Props) => {
    return (
        <section
            style={{
                borderTop: "1rem solid #0C1821",
                backgroundColor: '#1B2A41',
                color: "#DDE1E4",
            }}
        >
            <div
                onClick={closeModal}
                className="text-end text-2xl cursor-pointer">
                [X]
            </div>
            <nav className='hamburger '>
                <ul className='sm:gap-0 md:gap-4 lg:gap-6 xl:gap-6'>
                    <li>
                        <Link to="/Home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/Profile">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/People">
                            People
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}
