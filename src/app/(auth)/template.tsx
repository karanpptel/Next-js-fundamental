"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // This hook is used to get the current pathname so that active navlinks can be highlighted in the UI.
import { useState } from "react";
import './auth-styles.css';



const navLinks = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
    {name: "Forgot Password", href: "/forgot-password"},

]

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}){
    const pathname = usePathname();
    const [input, setInput] = useState('');
    return(
        <div>
            <div>
                <input type="text" placeholder="Search" value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                    <Link 
                        href={link.href}
                        key={link.name}
                        className={isActive ? "font-bold mr-4 text-green-500" : "text-red-800 mr-4"}>
                        {link.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
}