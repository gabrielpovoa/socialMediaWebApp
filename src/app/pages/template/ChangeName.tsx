import React from 'react'

export const ChangeName = () => {



    return (
        <form className='bg-gray-50 rounded-md flex flex-col p-7'
            style={{ width: '30rem', height: '30rem', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)' }}>
            <label htmlFor="changeName" className='w-96 flex flex-col gap-4 text-5sm text-blue-600'>
                change your name here!
                <input
                    type="text"
                    value=''
                    className='p-4 rounded-sm'
                    onChange={() => null}
                />
            </label>
            <input
                type="submit"
                value="Change Name"
                className='w-96 rounded-sm mt-6 bg-indigo-600 text-white p-4 cursor-pointer'
            />
        </form>
    )
}
