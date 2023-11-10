import { ReactNode, createContext, useContext, useState } from "react";

interface UserLoginContextType {
    name: string,
    setName: (n: string) => void,
    password: string,
    setPassword: (p: string) => void,
    Usernamekey: string,
    PasswordKey: string;
}

export const UserLoginContext = createContext<UserLoginContextType | null>(null);


export const UserLoginProvider = ({ children }: { children: ReactNode }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const Usernamekey = 'gabrielPovoa';
    const PasswordKey = 'caverna123'


    return (
        <UserLoginContext.Provider value={{ name, setName, password, setPassword, Usernamekey, PasswordKey }}>{children}</UserLoginContext.Provider>
    )
}
