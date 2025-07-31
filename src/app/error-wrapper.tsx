'use client' // Error boundaries must be Client Components
import { useState } from "react";
import "./globals.css"

interface WrapperClass{
    children: React.ReactNode
}

const ErrorSimulator = ({
    message = "An error occurred",
}: {
    message?: string;
}) => {
    const [error, setError] = useState(false);

    if(error) throw new Error(message);

    return (
        <button
        title="Simulate Error"
        onClick={() => setError(true)}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >simulate error</button>
    );
};


export default function ErrorWrapper({children}: WrapperClass) {
    return (
        <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300 items-center justify-center h-screen">
            <div className="absolute top-0 left-4 -translate-y-1/2">
                    <ErrorSimulator message="Simulated Error in root layout" />
            </div>
            
            {children}
        </div>
    );
}











