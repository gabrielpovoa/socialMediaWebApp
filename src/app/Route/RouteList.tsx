import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { PeopleLocal } from '../pages/Local';
import { Profile } from '../pages/Profile';
import { Login } from '../pages/Login';

export const RouteList = () => {
    return <>
        <Routes>
            <Route
                path='/'
                element={<Login />}
            />
            <Route
                path='/Home'
                element={<Home />}
            />
            <Route
                path='/Profile'
                element={<Profile />}
            />
            <Route
                path='/People'
                element={<PeopleLocal />}
            />
            <Route
                path='/Settings'
                element={<Home />}
            />
        </Routes>
    </>
}
