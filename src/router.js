import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Examp from './pages/example/example'
import Detail from './pages/detail/detail'
import Login from './pages/login'
import Signup from './pages/register'
import Admin from './pages/add'

function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="add" element={<Admin />} />
                <Route path="examp" element={<Examp />} />
                <Route path="detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router
