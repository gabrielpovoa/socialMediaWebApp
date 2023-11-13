import React, { ChangeEvent } from 'react'
import Swal from 'sweetalert2'

import { Header } from '../template/Header'
import { ProfilePreview } from '../template/ProfilePreview'
import { useAuthUser } from '@/contexts/LoginUser'
import { useNavigate } from 'react-router-dom'
import { ChangeName } from '../template/ChangeName'

export const Profile = () => {
    const photoFilectx = useAuthUser()
    const navigateTo = useNavigate();

    const areYouSureOnSaveChnges = () => {
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                setTimeout(() => {
                    Swal.fire("Saved!", "", "success");
                    navigateTo('/Home');
                }, 1000)
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files[0];
        photoFilectx?.setPhotoFile(file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                photoFilectx?.setPhoto(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            photoFilectx?.setPhoto('');
        }
    };

    return <>
        <Header />
        <main className='p-7 md:p-20 '>
            <section className='flex flex-1 items-start flex-wrap gap-8 '>
                <label htmlFor="SelectPhoto" className='text-4xl text-blue-600 font-bold cursor-pointer'>
                    <section className='bg-gray-200 p-3 rounded-md flex items-center justify-center  '
                        style={{
                            width: "30rem", height: '30rem', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)'
                        }}
                    >
                        select a photo
                        <input type="file" accept="image/*" onChange={handleFileChange} hidden name='SelectPhoto' id='SelectPhoto' />
                    </section>
                </label>

                <ChangeName />
                <ProfilePreview />
                
            </section>

            <button
                onClick={areYouSureOnSaveChnges}
                className='mt-6 p-6 text-white font-2xl w-fit bg-blue-700 hover:opacity-80 rounded-md'>
                Save changes
            </button>
        </main>
    </>
}
