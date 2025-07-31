"use client";

export default function ErrorBoundary({ 
    error,
    reset
}: { error: Error, reset: () => void }) {
    return <h1> {error.message} <button onClick={reset}>Try again</button> </h1>;
}

//this component also receive an error object as a prop to display the error message
//Errror Boundary is a client component and not a server component and is used to handle errors in the client side