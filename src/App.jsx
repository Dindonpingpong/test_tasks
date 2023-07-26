import React from 'react'

import { Routes, Route } from 'react-router-dom';
import { FirstTaskPage } from './pages/FirstTaskPage/FirstTaskPage';
import { SecondTaskPage } from './pages/SecondTaskPage/SecondTaskPage';
import { ThirdTaskPage } from './pages/ThirdTaskPage/ThirdTaskPage';
import { FourthTaskPage } from './pages/FourthTaskPage/FourthTaskPage';

export default function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<FirstTaskPage />} />
                <Route path='/second' element={<SecondTaskPage />} />
                <Route path='/third' element={<ThirdTaskPage />} />
                <Route path='/fourth' element={<FourthTaskPage />} />
            </Routes>
        </>
    )
}