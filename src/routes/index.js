import { Routes, Route, Navigate } from "react-router-dom"
import { Login } from "../pages/login"
import { Consult } from "../pages/consult"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/consult" element={<Consult />} />
            <Route path="*" element={<Navigate to="/login" />} />

        </Routes>
    )
}