import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import BlogPage from "../pages/BlogPage"
function AppRoute() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/blog" element={<BlogPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoute