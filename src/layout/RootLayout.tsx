import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function RootLayout() {
    return (
        <div className="min-h-screen bg-zinc-800 text-foreground flex flex-col">
            <Navbar />
            <div className="flex-1 p-4 md:p-4 lg:p-6">
                <Outlet />
            </div>
        </div>
    )
}