import React from 'react'

import { Routes, Route } from 'react-router-dom';
import { FirstTaskPage, SecondTaskPage, ThirdTaskPage } from './pages/TechTasks';
import { ScreeningStagePage } from './pages/ScreeningStagePage/ScreeningStagePage';
import { TechStagePage } from './pages/TechStagePage/TechStagePage';
import { ScreeningFirstTaskPage, ScreeningSecondTaskPage } from './pages/ScreeningTasks';

export default function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<ScreeningStagePage />} />
                <Route path='/tech' element={<TechStagePage />} />
                <Route path='/screening/first' element={<ScreeningFirstTaskPage />} />
                <Route path='/screening/second' element={<ScreeningSecondTaskPage />} />
                <Route path='/tech/first' element={<FirstTaskPage />} />
                <Route path='/tech/second' element={<SecondTaskPage />} />
                <Route path='/tech/third' element={<ThirdTaskPage />} />
            </Routes>
        </>
    )
}