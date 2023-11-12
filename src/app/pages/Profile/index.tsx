import React, { ChangeEvent, useContext } from 'react'
import { Header } from '../template/Header'
import Swal from 'sweetalert2'
import { ProfilePreview } from '../template/ProfilePreview'
import { UserLoginContext } from '@/contexts/LoginUser'

export const Profile = () => {
    const photoFilectx = useContext(UserLoginContext);

    const areYouSureOnSaveChnges = () => {
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files[0];
    
        // Update the user's photo file when the input changes
        photoFilectx?.setPhotoFile(file);
    
        // You might also want to display a preview of the selected image
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
        <main className='p-20 '>
            <section className='flex flex-1 items-start flex-wrap gap-8 '>
                <label htmlFor="SelectPhoto" className='text-4xl text-blue-600 font-bold cursor-pointer'>
                    <section className='bg-gray-200 p-3 rounded-md flex items-center justify-center'
                        style={{
                            width: "20rem", height: '30rem', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)'
                        }}
                    >
                        select a photo
                        <input type="file" accept="image/*" onChange={handleFileChange} hidden name='SelectPhoto' id='SelectPhoto' />
                    </section>
                </label>
                <form className='bg-gray-50 w-fit rounded-md flex flex-col p-7'
                    style={{ height: '30rem', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)' }}>
                    <label htmlFor="changeName" className='w-96 flex flex-col gap-4 text-5sm text-blue-600'>
                        change your name here!
                        <input type="text" name='changeName'
                            className='p-4 rounded-sm'
                        />
                    </label>
                    <input
                        type="submit"
                        value="Change Name"
                        className='w-96 rounded-sm mt-6 bg-indigo-600 text-white p-4 cursor-pointer'
                    />
                </form>
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
