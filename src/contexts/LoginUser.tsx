import { ReactNode, createContext, useContext, useState } from "react";

interface UserLoginContextType {
    name: string,
    setName: (n: string) => void,
    password: string,
    setPassword: (p: string) => void,
    Usernamekey: string,
    PasswordKey: string;
    photo: string;
    setPhoto: (p: string) => void;
    photoFile: File | null; // Add this line for the photoFile property
    setPhotoFile: (file: File | null) => void; // Add this line for setting the photoFileF
}

export const UserLoginContext = createContext<UserLoginContextType | null>(null);


export const UserLoginProvider = ({ children }: { children: ReactNode }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');
    const [photoFile, setPhotoFile] = useState<File | null>(null); // Add this line for the photoFile state


    const Usernamekey = 'gabrielPovoa';
    const PasswordKey = 'caverna123'


    return (
        <UserLoginContext.Provider
            value={{ name, setName, password, setPassword, Usernamekey, PasswordKey, photo,setPhoto,photoFile,setPhotoFile }}>
            {children}
        </UserLoginContext.Provider>
    )
}
